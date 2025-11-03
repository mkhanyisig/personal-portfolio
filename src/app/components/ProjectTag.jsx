import React from 'react';
import './styles.css';

const ProjectTag = ({ name, onClick, isSelected, darkMode }) => {
  const buttonStyles = isSelected
    ? 'text-red-600 font-extrabold border-red-700'
    : `font-semibold border-slate-600 ${
        darkMode ? 'text-[#ADB7BE]' : 'text-black '
      } `;

  return (
    <button
      onClick={() => onClick(name)}
      className={`border-4 rounded-full px-4 py-2 text-base lg:text-xl sm:text-base cursor-pointer ${buttonStyles} hover:border-red-500`}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
