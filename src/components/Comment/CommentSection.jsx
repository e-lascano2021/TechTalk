import React from "react"


// Components
import CommentList from './CommentList'
import CreateComment from './CreateComment'

// Services
import * as postService from '../../services/postService'

const CommentSection = (props) => {
  const comments = props.post.comments
  const handleCreateComment = async (formData) => {
  try {
    const newComment = await postService.createComment(props.post._id, formData)
    props.setComments([...comments, newComment])
  } catch (error) {
    throw error
  }
}

const handleDeleteComment = async (commentId) => {
  try {
    await postService.deleteComment(props.post._id, commentId)
    // props.setComments(comments.filter(comment => comment._id !== commentId))
  } catch (error) {
    throw error
  }
}

  return (
    <div className="comment-section">
      <div className="header">
        <h3>Comment Section</h3>
        <div className="header-buttons"></div>
      </div>
      <CreateComment {...props}
      handleCreateComment={handleCreateComment}
      />
      <CommentList comments={comments}
      handleDeleteComment={handleDeleteComment} />
    </div>
  )
}

export default CommentSection