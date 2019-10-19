import React from "react";

const Scroll = props => {
  return (
    <div
      style={{
        overflowY: "scroll",
        border: "1px solid black",
        height: 'calc(100vh - 12rem)'
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
