import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from './counterSlice'
import { Link } from 'react-router-dom'

export function Counter() {
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <div>
        <button
          aria-label="Increment by"
          onClick={() => dispatch(incrementByAmount(50))}
        >
          Increment by
        </button>
        <Link to={'/posts'}>POSTS</Link>
        </div>
      </div>
    </div>
  )
}