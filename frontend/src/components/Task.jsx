import React, { useState } from 'react';
import '../style/Task.css'

function Task() {
  const [checked, setChecked] = useState(false);

  return (
    <label className="checkbox-wrapper">
      <input
        type="checkbox"
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
      <span className={`custom-box ${checked ? "checked" : "unchecked"}`}>
        {checked && "✔"}
      </span>
      <span className="label-text">I agree to the terms</span>
    </label>
  );
}

export default Task
