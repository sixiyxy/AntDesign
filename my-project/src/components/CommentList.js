import React from "react";

const CommentList = ({comments,onDeleteThis}) => {
    return (
        <div className="comment-list-component">
            <label>评论列表</label>
            <ul className="list-group mb-3">
                {
                    comments.map((comment, index) => (
                        <li key={index} className="list-group-item">
                            {comment}
                            <button className={"btn btn-mini btn-info"}
                                    onClick={
                                        () => {
                                            onDeleteThis(index);
                                        }
                                    }
                            >
                                ×
                            </button>
                        </li>
                    )
                )
            }
            </ul>
        </div>
    )   
}

export default CommentList;