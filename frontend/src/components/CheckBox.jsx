import React, { useState } from 'react';
import '../style/CheckBox.css'
import unChecked from '../assets/stop.png';
import checkedTick from '../assets/tick-square.png';


function CheckBox() {
  const [checked, setChecked] = useState(false);

  return (
    <div>
      <div className='checkbox-cont'>
        <div>
          <img src={unChecked} alt="" onClick={() => setChecked(!checked)} className='checkbox-bg'/>
          <img src={checkedTick} alt="" className={checked ? 'box-checked' : 'box-unchecked'} onClick={() => {setChecked(false)}} />
        </div>
      </div>

      <p>{checked}</p>

    </div>
  );
}

export default CheckBox;
