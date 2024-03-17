import React, { useState } from "react";

const Question = ({ title, info }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 dark:divide-gray-700">
      <details>
        <summary
          onClick={() => setExpanded(!expanded)}
          className="py-2 outline-none cursor-pointer focus:underline"
        >
          {title}
        </summary>
        <div onClick={() => setExpanded(!expanded)} className="px-4 pb-4">
          <p>{info}</p>
        </div>
      </details>
    </div>
  );
};

export default Question;
