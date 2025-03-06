import React,{useContext} from 'react'
 
import Button from './Button'
import contextData from '../context/context'

const Card = () => {
    const {user} = useContext(contextData)
    const {name,age, email} = user
  return (
    <div>
      <h1>{name}</h1>
      <p>{email}</p>
      <p>{age}</p>

      <Button/>
    </div>
  )
}

export default Card
