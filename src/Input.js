import React, { useRef, useEffect, ChangeEvent, useState } from "react";

function Input({ label, ...props }) {
  const [touched, setTouched] = useState(false);

  return (
    <>
      <label htmlFor={props.name}>{label}</label>
      <input
        className="form-control"
        {...props}
        onBlur={() => setTouched(true)}
      />
    </>
  );
}

export default Input;