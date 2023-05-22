import React from 'react'
import './style.css'
import AddPost from './AddPost'
import PostList from './PostList'

const Es1 = () => {
  return (
    <div className='container'>
      <h1>Esercizio 1</h1>
      <AddPost/>
      <PostList/>
    </div>
  )
}

export default Es1