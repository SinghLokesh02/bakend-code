import { useRef, useState } from 'react'
 
function App() {
  const inputRef = useRef(null)
  const handleSubmit = (e) => {
    const name = inputRef.current.value
    e.preventDefault()
    alert(`Hello, ${name}!`)
  }

  return (
    <>
      Name : <input type="text" name='name' ref={inputRef}/>

      <button type='submit' onClick={handleSubmit}>Submit</button>
    </>
  )
}

export default App
