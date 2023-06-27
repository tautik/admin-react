import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";

const New = ({ inputs, title }) => {
  const [file, setFile] = useState("");

  return (
    <div className="flex-1">
      <div className="p-10">
        <h1 className="text-gray-400 text-lg">{title}</h1>
      </div>
      <div className="flex gap-20 p-10 m-20 shadow-md">
        <div className="flex-1 text-center">
          <img
            src={
              file
                ? URL.createObjectURL(file)
                : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
            }
            alt=""
            className="w-100 h-100 rounded-full object-cover"
          />
        </div>
        <div className="flex-2">
          <form className="flex flex-wrap gap-8 justify-around">
            <div className="w-1/2">
              <label htmlFor="file" className="flex items-center gap-2">
                Image:{" "}
                <DriveFolderUploadOutlinedIcon className="cursor-pointer" />
              </label>
              <input
                type="file"
                id="file"
                onChange={(e) => setFile(e.target.files[0])}
                className="hidden"
              />
            </div>

            {inputs.map((input) => (
              <div className="w-1/2" key={input.id}>
                <label className="block">{input.label}</label>
                <input
                  type={input.type}
                  placeholder={input.placeholder}
                  className="w-full py-1 border-b border-gray-300"
                />
              </div>
            ))}
            <button className="w-48 py-2 bg-teal-500 text-white font-bold mt-4">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default New;
