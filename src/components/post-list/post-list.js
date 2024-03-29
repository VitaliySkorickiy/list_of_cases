import React from 'react';

import PostListItem from '../post-list-item/post-list-item'

import './post-list.css';

const PostList = ({posts, onDeleteItem, onToggleLiked, onToggleImportant}) => {

  const elements = posts.map((item) => {

    const {id, ...itemProps} = item;

    return (
      <li key={id} className='list-group-item'>
         <PostListItem 
          {...itemProps} 
          onDelete={()=>onDeleteItem(id)}
          onToggleImportant={()=>{onToggleImportant(id)}}
          onToggleLiked={()=>{onToggleLiked(id)}}/>
      </li>
    )

  });

  return (
    <ul className="app-list list-group">
     {elements}
    </ul>
  )
}

export default PostList;