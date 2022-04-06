import React from 'react';

function PostItem( props ) {
  return (
    <div className='post'>
      <div className='post__content'>
        <strong>{props.post.id}. {props.post.title}</strong>
        <div>{props.post.title} - {props.post.body}</div>
      </div>
      <div className='post__btns'>
        <button>Delete post</button>
      </div>
    </div>
  );
}

export default PostItem;