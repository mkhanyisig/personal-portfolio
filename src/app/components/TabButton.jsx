import React from "react";

const TabButton = ({ active, selectTab, children, tcolor }) => {
  const buttonClasses = active
    ? "font-black border-neutral-500 border-b"
    : `font-bold ${tcolor} `;

  return (
    <button onClick={selectTab}>
      <p className={`mr-3 text-xl  ${tcolor}  ${buttonClasses} `}>{children}</p>
    </button>
  );
};

export default TabButton;
