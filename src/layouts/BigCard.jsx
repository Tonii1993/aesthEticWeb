import TextExpander from "../components/TextExpander";

const BigCard = ({ title, description, imageSrc }) => {
  const descriptionMaxLength = 250; // Adjust as needed

  return (
    <div className="flex flex-col md:flex-row p-4 rounded-md border border-gray-200">
      <div className="md:w-1/2 md:mr-4 flex flex-col text-center">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <TextExpander text={description} maxLength={descriptionMaxLength} />
      </div>
      <img
        src={imageSrc}
        alt={title}
        className="w-full md:w-1/2 rounded-md shadow-md mt-4 md:mt-0"
        style={{ maxHeight: "400px" }} // Set a maximum height as an example, adjust as needed
      />
    </div>
  );
};

export default BigCard;
