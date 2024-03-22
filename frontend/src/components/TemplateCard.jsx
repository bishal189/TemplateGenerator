import React from "react";

const TemplateCard = ({ Icon, Text }) => {
  return (
    <div className="group flex flex-col justify-items-center justify-center border-2 rounded-lg border-violet-200 hover:border-violet-300 transition-all py-4 px-3 mx-1 hover:bg-violet-100">
      <Icon className="text-5xl w-full text-violet-200 group-hover:text-violet-400 transition-all" />
      <p className="font-bold text-sm text-gray-600 group-hover:text-gray-900">
        {Text}
      </p>
    </div>
  );
};

export default TemplateCard;
