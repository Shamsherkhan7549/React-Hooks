import React, { useContext } from 'react'
import { context } from '../../UseContext/ContextApi'

const Footer = () => {
    const {phone} = useContext(context)

  return (
    <div>
        <p>Footer</p>
        <p>Phone: {phone}</p>
    </div>
  )
}

export default Footer