import React from "react";
import * as motion from "motion/react-client";

const WinterTipsCard = ({ winterTip }) => {
  const { icon, title, text } = winterTip;
  return (
    <motion.div
      className="mt-10 border-1 border-[#E100FF] bg-white p-4 rounded-2xl shadow-xl hover:shadow-lg transition-shadow min-h-[260px]"
      style={{ borderRadius: 16 }}
      whileHover={{
        scale: [null, 1.05, 1.12],
        transition: {
          duration: 0.4,
          times: [0, 0.6, 1],
          ease: ["easeInOut", "easeOut"],
        },
      }}
    >
      <div className="text-4xl mb-3">{icon}</div>
      <h2 className="text-lg font-semibold text-indigo-700 mb-2">{title}</h2>
      <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
    </motion.div>
  );
};
export default WinterTipsCard;
