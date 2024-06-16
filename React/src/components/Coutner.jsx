import { useState } from 'react'
const Counter = () => {
  const [count, setState] = useState(0)
  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setState(count + 1)
        }}
      >
        +
      </button>
    </div>
  )
}

export default Counter
