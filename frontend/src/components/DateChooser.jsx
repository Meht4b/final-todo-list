import React from 'react'
import '../style/DateChooser.css'
import arrowLeft from '../assets/arrow-left.png'
import arrowRight from '../assets/arrow-right.png'

const DateChooser = ({decrementDate,currentDate,incrementDate}) => {
  return (
    <>
      <div className='date-chooser-cont'>
        <button className='date-chooser-btn' onClick={() => decrementDate()}><img src={arrowLeft} /></button>
        <div className='date-chooser-date'>
          <h1>{currentDate.toLocaleDateString(undefined, { weekday: 'long' })}</h1>
          <p>{currentDate.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>
        <button className='date-chooser-btn' onClick={() => incrementDate()}><img src={arrowRight} /></button>
      </div>
    </>
  )
}

export default DateChooser
