import { useState } from 'react'
import '../style/Task.css'

function Task() {

    return (
      <>
        <div className='task-cont'>
                <div class="newCheckbox">
                    <input type="checkbox" class="checkbox" />
                    <div class="newCheckboxColor">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/></svg>
                    </div>
                    
                </div>            <input type="checkbox" />

            <p>do the thing</p>
        </div>

      </>
    )
}

export default Task
