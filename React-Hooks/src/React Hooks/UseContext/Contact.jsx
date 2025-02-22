import React, { useContext } from 'react'
import { context } from '../../UseContext/ContextApi'

const Contact = () => {
    const {name , phone} = useContext(context)
  return (
    <div>
        <p>Contact</p>
        <p>Name: {name}</p>
        <p>Phone: {phone}</p>
    </div>
  )
}

export default Contact