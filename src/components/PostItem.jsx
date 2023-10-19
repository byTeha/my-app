import React from 'react'
import MyButton from './UI/button/MyButton'

const PostItem = (props) => {

  return (
    <div className='post'>
    <div className='post__content'>
      <strong>{props.post.id}{props.post.tiile}</strong>
      <div>{props.post.body}</div>
    </div>
    <div className='post__btns'> 
      <MyButton>Удалить</MyButton>
    </div>
  </div>
  )
}

export default PostItem