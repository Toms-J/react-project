import React, { useEffect } from 'react'
import PostCard from './PostCard'
import { useSelector, useDispatch } from 'react-redux'
import { removePost, setEditingPost, fetchPosts } from '../../../features/posts/postsSlice'

const PostList = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector(state => state.postStore);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <>
      {
        posts?.map((post, i) => (
          <PostCard 
            {...post} 
            key={i} 
            onDeletePost={() => dispatch(removePost(i))}
            onEditPost={() => dispatch(setEditingPost({...post, index: i}))}
          />
        ))
      }
    </>
  )
}

export default PostList