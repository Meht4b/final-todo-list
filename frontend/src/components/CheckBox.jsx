import React, { use, useState } from 'react'
import emptyCheck from '../assets/stop.png'
import filledCheck from '../assets/tick-square.png'
import '../style/CheckBox.css'

const CheckBox = ({isCompleted, toggleComplete}) => {

  const [checked, setChecked] = useState(false);

  return (
    <>
      <div className='checkbox-cont'>
          <img src={emptyCheck} alt="" onClick={() => setChecked(!checked)} className='checkbox-bg'/>
          <img src={filledCheck} alt="" className={checked ? 'box-checked' : 'box-unchecked'} onClick={() => setChecked(!checked)} />
      </div>


    </>
  )
}

export default CheckBox
