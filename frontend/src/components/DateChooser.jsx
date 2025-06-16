import { useState } from 'react'
import '../style/DateChooser.css'
import arrowLeft from '../assets/arrow-left.png'
import arrowRight from '../assets/arrow-right.png'
function DateChooser() {
  const [CurrentDay,setCurrentDay] = useState("Monday")
  const [CurrentDate,setCurrentDate] = useState("12 jun 2006")

  return (
    <>
    <div className='DateChooser-cont std-box'>
      <button className='left'>
        <img src={arrowLeft} alt="" />
      </button>

      <div className='date-day'>
        <h1>
          {CurrentDay}
        </h1>
        <h3>
          {CurrentDate}
        </h3>
      </div>

      <button className='right'>
        <img src={arrowRight} alt="" />
      </button>

    </div>
    </>
  )
}
export default DateChooser