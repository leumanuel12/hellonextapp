import { comments } from "@/pages/data/comments"

export default function handler(req, res) {
  res.status(200).json({ comments })

  if( req.method === 'POST' ){

    const comment = req.body.comment
    const id = req.body.id
    const newComment = {
      id,
      comment,
    }
    comments.push(newComment)
    res.status(200).json(newComment)
  }
}
