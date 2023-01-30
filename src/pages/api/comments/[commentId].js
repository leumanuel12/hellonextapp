import { comments } from "@/pages/data/comments"

export default function handler(req, res) {
    //console.log(req.query)


        const { commentId } = req.query
        const response = comments.find( comment => comment.id === parseInt(commentId) )
        //console.log(response)
        res.status(200).json(response)


    if( req.method === 'DELETE' ){
        const { commentId } = req.query
        const index = comments.findIndex( comment => comment.id === parseInt(commentId) )
        comments.splice(index, 1)
        res.status(200).json(comments)
    }

}
