import React, { useRef, useState } from "react";

function CreateBox({
  size,
  children,
  step_size,
  innerRef = null,
  callback = null
}) {
  const handleClick = () => {
    callback();
  };
  return (
    <>
      <div
        onClick={step_size === size ? handleClick : null}
        style={{
          border: "1px solid black",
          height: `${size}px`,
          width: `${size}px`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "white"
        }}
        ref={innerRef}
      >
        {children}
      </div>
    </>
  );
}

export default function Box({ max_length, step_size }) {
  const colorRef = useRef();
  const [isColored, setIsColored] = useState(false);
  const changeColor = () => {
    colorRef.current.style.backgroundColor = isColored ? null : "red";
    setIsColored((prev) => !prev);
  };

  const returnBoxes = (max_length) => {
    if (max_length === 0) {
      return;
    }
    return (
      <CreateBox size={max_length} step_size={step_size} callback={changeColor}>
        {returnBoxes(max_length - step_size)}
      </CreateBox>
    );
  };

  return (
    <>
      <CreateBox size={max_length} step_size={step_size} innerRef={colorRef}>
        {returnBoxes(max_length - step_size)}
      </CreateBox>
    </>
  );
}
