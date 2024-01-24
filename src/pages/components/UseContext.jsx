import React, { useContext } from 'react'

// create context for theam

const TheamContext = React.createContext('blue')

function UseContext () {
  const theam = useContext(TheamContext)

  return (
    <div>
      <h4>Use Context for theam</h4>

      <div
        style={{
          backgroundColor: theam === 'blue' ? '#ff6600' : 'red',
          color: theam === 'blue' ? '#fff' : '#fff666'
        }}
      >
        Theamed content
      </div>
    </div>
  )
}

export default UseContext
