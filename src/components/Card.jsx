import React from 'react'
import './Card.css'

const Card = (props) => {
  return (
    <div className='card_box'>
      <div className="card_color" style={{backgroundColor:props.color}}>
      </div>
      <div className='card_details'>
            <h3>#{props.colorCode}</h3>
            <h6 style={{color:props.color}}>{props.colorName}</h6>
      </div>
    </div>
  )
}

export default Card
