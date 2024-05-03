import React from 'react'
import fashion from "../../asserts/fashiontag.png"
import "./Fashion.css"

function Fashion() {
  return (
    <div className='fashioncontainer'>
        <img className = "image" src={fashion} alt=""/>
    </div>
  )
}

export default Fashion