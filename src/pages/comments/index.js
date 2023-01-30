import axios from "axios";
import { useEffect, useState } from "react";

export default function Comments() {
  const [allComments, setAllComments] = useState([]);
  const [comment, setComment] = useState("");
  const [showEdit, setShowEdit] = useState(false);

  const getComments = async () => {
    const response = await axios.get("/api/comments");
    const result = await response.data;
    setAllComments(result.comments);
    //console.log(result.comments)
  };

  const sendComment = async (e) => {
    e.preventDefault();
    //console.log(comment)
    const newComment = {
      id: Date.now(),
      comment: comment,
    };
    const response = await axios.post("/api/comments", newComment);
    const result = await response.data;
    setComment("");
    //console.log(result)
    getComments();
  };

  const editComment = async (commentid) => {
    setShowEdit(true);
    //console.log(commentid)

    const response = await axios.post(`/api/comments/${commentid}`);
    const result = await response.data;

    //console.log(result.comment)
    setComment(result.comment);
  };

  //TODO: pending
  const updateComment = async (commentid) => {
    const updatecomment = {
      comment: comment,
    };
    const response = await axios.put(
      `/api/comments/${commentid}`,
      updatecomment
    );
    const result = await response.data;
    console.log(result)
    getComments();
  };

  const deleteComment = async (commentid) => {
    const response = await axios(`/api/comments/${commentid}`, {
      method: "DELETE",
    });
    getComments();
  };

  useEffect(() => {
    getComments();
  }, []);

  return (
    <div className="m-3 max-w-7xl mx-auto">
      <div className="text-medium text-lg">API Routes example</div>
      <div className="text-medium">
        This method is temporary only. Data will not be permanently
        modified/deleted. Not SEO friendly!
      </div>

      {showEdit ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            updateComment();
          }}
        >
          <input
            type="text"
            value={comment}
            className="border border-black rounded-md px-2 ml-2"
            onChange={(e) => setComment(e.target.value)}
          />
          <button className="border border-black rounded-md px-2 ml-2">
            update comment
          </button>
        </form>
      ) : (
        <form onSubmit={sendComment}>
          <input
            type="text"
            value={comment}
            className="border border-black rounded-md px-2 ml-2"
            onChange={(e) => setComment(e.target.value)}
          />
          <button className="border border-black rounded-md px-2 ml-2">
            submit
          </button>
        </form>
      )}

      {allComments &&
        allComments.map((comment) => {
          return (
            <p key={comment.id} className="m-3">
              <span>{comment.id} </span>
              <span>{comment.comment}</span>
              <button
                className="border border-black rounded-md px-2 ml-2"
                onClick={() => deleteComment(comment.id)}
              >
                Delete
              </button>
              <button
                className="border border-black rounded-md px-2 ml-2"
                onClick={(e) => {
                  e.preventDefault();
                  editComment(comment.id);
                }}
              >
                Edit
              </button>
            </p>
          );
        })}
    </div>
  );
}
