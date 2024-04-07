import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-white font-extrabold border-red-700"
    : "text-[#ADB7BE] font-semibold border-slate-600 hover:border-white";

  return (
    <button
      onClick={() => onClick(name)}
      className={`border-2 rounded-full px-6 py-3 text-xl cursor-pointer ${buttonStyles}`}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
