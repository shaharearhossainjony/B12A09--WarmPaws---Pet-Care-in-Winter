import React from 'react';

const WinterTipsCard = ({ winterTip}) => {
    const {icon,title,text}=winterTip;
  return (
    <div className="mt-10 border-1 border-[#E100FF] bg-white p-4 rounded-2xl shadow-xl hover:shadow-lg transition-shadow min-h-[260px]">
      <div className="text-4xl mb-3">{icon}</div>
      <h2 className="text-lg font-semibold text-indigo-700 mb-2">{title}</h2>
      <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
    </div>
  );
};

export default WinterTipsCard;