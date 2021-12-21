import React from "react"


//Components
// import UserCard from '../misc/UserCard'
import UserCard from "../../misc/UserCard";
import CommentActions from './CommentActions'

const CommentCard = (props) => {

  return (
    <div className="comment-card">

      <div className="card-header">
        <UserCard
          profile={props.comment.commenter}
        /> 
      </div>
      <div className="question-container">
        <p>
          {props.comment.comment_text}
        </p>
        <CommentActions {...props} />
      </div>
    </div>
  )
}

export default CommentCard