import React from "react";

const TabButton = ({ active, selectTab, children, tcolor }) => {
  const buttonClasses = active ? " border-neutral-500 border-b" : `${tcolor} `;

  return (
    <button onClick={selectTab}>
      <p className={`mr-3 text-xl font-extrabold ${tcolor}  ${buttonClasses} `}>
        {children}
      </p>
    </button>
  );
};

export default TabButton;
