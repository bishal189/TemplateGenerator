import PropTypes from "prop-types";

const TemplateCard = ({ Icon, Text }) => {
  return (
    <div className="group flex flex-col justify-items-center justify-center border-2 rounded-lg border-violet-200 hover:border-violet-600 transition-all py-4 px-3 mx-1 hover:bg-violet-100">
      <Icon className="text-5xl w-full text-violet-200 group-hover:text-violet-400 transition-all group-hover:bg-violet-100" />
      <p className="font-bold text-sm text-gray-600 group-hover:text-gray-900 group-hover:bg-violet-100 transition-all">
        {Text}
      </p>
    </div>
  );
};

TemplateCard.propTypes = {
  Icon: PropTypes.elementType.isRequired,
  Text: PropTypes.string.isRequired,
};

export default TemplateCard;
