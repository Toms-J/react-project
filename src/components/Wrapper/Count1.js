import React from 'react'

const Count1 = ({ count, increment }) => {
  return (
    <button onClick={increment}>
      <h1 style={{color: 'red'}}>{count}</h1>
    </button>
  )
}

export default Count1