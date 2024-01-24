import React, { useCallback, useEffect, useState } from 'react'
import axios from 'axios'

const Count = () => {
  const [count, setCount] = useState(0)
  const [data, setData] = useState(null)

  // const increase = () => {
  //   setCount(count + 1)
  // }

  // useCallback

  const increase = useCallback(() => {
    setCount(count + 1)
  }, [count])

  useEffect(() => {
    //using axios
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(response => setData(response.data))

    // fetch data
    // fetch('https://jsonplaceholder.typicode.com/users')
    //   .then(response => response.json())
    //   .then(data => setData(data))

    // console.log(data)
  }, []) // this dependance array run once at component mount

  return (
    <div>
      <h1>Count Increase : {count}</h1>

      <button onClick={increase}>Increment Number</button>

      <hr />
      <div>
        {/* {data ? <p>Data: {data}</p> : <p>Loading...</p>} */}

        {data ? (
          <>
            {data.map((data, index) => (
              <h6 key={index}>{data.name}</h6>
            ))}
          </>
        ) : (
          <p>Data Loading ...</p>
        )}
      </div>

      <hr />
    </div>
  )
}

export default Count
