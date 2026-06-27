import { FaFileUpload } from "react-icons/fa";

function UploadCard({ title }) {
  return (
    <div
      className="
      bg-white/10
      backdrop-blur-lg
      border border-white/20
      rounded-3xl
      p-8
      shadow-xl
      text-center"
    >
      <FaFileUpload
        size={40}
        className="mx-auto mb-4"
      />

      <h2 className="text-2xl font-bold">
        {title}
      </h2>

      <p className="text-gray-300 mt-2">
        Upload PDF or DOCX file
      </p>

      <input
        type="file"
        accept=".pdf,.docx"
        className="mt-6"
      />
    </div>
  );
}

export default UploadCard;