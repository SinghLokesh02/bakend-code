import React, { useRef ,useContext} from 'react'
import contextData from '../context/context'

const Button = () => {
    const { color } = useContext(contextData);
    const btnRef = useRef(null)
    const handleClick = () => {
        btnRef.current.style.backgroundColor = color;
    }
  return (
    <button ref={btnRef} onClick={handleClick}>Click</button>
  )
}

export default Button
