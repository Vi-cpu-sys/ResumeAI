import { useDropzone } from "react-dropzone";
import { motion } from "framer-motion";
import {
  FaCloudUploadAlt,
  FaCheckCircle,
  FaTrashAlt
} from "react-icons/fa";

function DropZone({
  title,
  onFileSelect,
  file
}) {

  const {
    getRootProps,
    getInputProps,
    isDragActive
  } = useDropzone({

    accept: {
      "application/pdf": [".pdf"],
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [".docx"]
    },

    multiple: false,

    onDrop: (acceptedFiles) => {

      if (acceptedFiles.length > 0) {

        onFileSelect(
          acceptedFiles[0]
        );

      }

    }

  });

  const removeFile = (e) => {

    e.stopPropagation();

    onFileSelect(null);

  };

  return (

    <motion.div

      whileHover={{
        scale: 1.03
      }}

      {...getRootProps()}

      className={`
      relative
      bg-white/5
      backdrop-blur-xl
      border-2
      border-dashed
      rounded-3xl
      p-10
      text-center
      cursor-pointer
      shadow-2xl
      min-h-[280px]
      flex
      flex-col
      justify-center
      transition-all
      duration-300

      ${
        isDragActive
          ? "border-blue-400 shadow-blue-500/40"
          : "border-white/20 hover:border-blue-400"
      }
      `}
    >

      <input {...getInputProps()} />

      {

        !file ? (

          <>

            <motion.div

              animate={{
                y: [0, -10, 0]
              }}

              transition={{
                repeat: Infinity,
                duration: 2
              }}
            >

              <FaCloudUploadAlt
                size={70}
                className="
                mx-auto
                text-blue-400"
              />

            </motion.div>

            <h2
              className="
              text-2xl
              font-bold
              mt-5"
            >
              {title}
            </h2>

            <p
              className="
              text-gray-400
              mt-3"
            >
              Drag & Drop PDF or DOCX
            </p>

            <p
              className="
              text-sm
              text-gray-500
              mt-2"
            >
              Maximum file size: 10 MB
            </p>

          </>

        ) : (

          <>

            <FaCheckCircle
              size={70}
              className="
              mx-auto
              text-green-400"
            />

            <h2
              className="
              text-2xl
              font-bold
              mt-5
              text-green-400"
            >
              Uploaded Successfully
            </h2>

            <div
              className="
              mt-4
              bg-green-500/10
              border
              border-green-500/20
              rounded-xl
              p-4"
            >

              <p
                className="
                break-all
                font-medium"
              >
                {file.name}
              </p>

              <p
                className="
                text-gray-400
                mt-2"
              >
                {(
                  file.size /
                  1024 /
                  1024
                ).toFixed(2)}
                {" "}MB
              </p>

            </div>

            <div
              className="
              flex
              justify-center
              gap-3
              mt-5"
            >

              <button

                onClick={removeFile}

                className="
                px-4
                py-2
                rounded-xl
                bg-red-500/20
                border
                border-red-500/30
                hover:bg-red-500/30
                transition"
              >

                <FaTrashAlt
                  className="inline mr-2"
                />

                Remove

              </button>

            </div>

            <p
              className="
              text-gray-500
              mt-4"
            >
              Click anywhere to replace file
            </p>

          </>

        )

      }

    </motion.div>

  );

}

export default DropZone;