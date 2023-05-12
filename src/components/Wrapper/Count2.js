import React from 'react'

const Count2 = ({ count, increment }) => {
  return (
    <button onClick={increment}>
      <h1 style={{color: 'blue'}}>{count}</h1>    
    </button>
  )
}

export default Count2