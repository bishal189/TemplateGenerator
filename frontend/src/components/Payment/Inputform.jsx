import React from 'react'
import './Inputfrom.css'

const Inputform = () => {
  return (
    <div className='email_section'>
    <label className='label' htmlFor="email">Email Address</label>
    <input id="email" className='input' name="email" type="text" inputmode="email" placeholder="Email"/>

</div>
  )
}

export default Inputform