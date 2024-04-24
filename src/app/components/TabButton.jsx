import React from "react";
import "./styles.css";

const TabButton = ({ active, selectTab, children, tcolor }) => {
  const buttonClasses = active
    ? "font-black border-neutral-500 border-b border-b-thick"
    : `font-bold ${tcolor} `;

  return (
    <button onClick={selectTab}>
      <p className={`mr-3 text-xl  ${tcolor}  ${buttonClasses} `}>{children}</p>
    </button>
  );
};

export default TabButton;
