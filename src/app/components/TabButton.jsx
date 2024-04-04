import React from "react";

const TabButton = ({ active, selectTab, children, tcolor }) => {
  const buttonClasses = active
    ? "text-purple-600 border-purple-500 border-b"
    : `text-${tcolor} `;

  return (
    <button onClick={selectTab}>
      <p
        className={`mr-3 font-semibold ${tcolor} hover:text-blue-600 ${buttonClasses} `}
      >
        {children}
      </p>
    </button>
  );
};

export default TabButton;
