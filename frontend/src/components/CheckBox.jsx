import React from 'react'
import emptyCheck from '../assets/stop.png'
import filledCheck from '../assets/tick-square.png'

const CheckBox = ({isCompleted, toggleComplete}) => {
  return (
    <>
    <div>
      <img src={emptyCheck} />
      <img src={filledCheck} alt="filled check" className={isCompleted == true ? 'check-box-visible':'check-box-invisible'} /> 
    </div>
    </>
  )
}

export default CheckBox
