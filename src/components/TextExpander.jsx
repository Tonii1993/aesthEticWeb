import { useState } from "react";

const TextExpander = ({ text, maxLength }) => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <p className="text-gray-600 leading-relaxed">
        {expanded ? text : text.substring(0, maxLength) + "..."}
      </p>
      <button onClick={handleToggle} className="text-blue-500 underline">
        {expanded ? "Show less" : "Show more"}
      </button>
    </div>
  );
};

export default TextExpander;
