import { Eye, EyeClosed, EyeOff } from "lucide-react";
import { useEffect, useState } from "react";

export const InputBox = ({
  labelName,
  Iconname,
  placeholder,
  inputId,
  inputType,
}) => {
  const [type, setType] = useState(inputType);
  const [isPass] = useState(inputType == "password" ? true : false);

  const handleEyeClick = () => {
    setType((prev) => {
      if (prev == "password") {
        return "text";
      } else {
        return "password";
      }
    });
  };

  return (
    <>
      <div className="flex flex-col space-y-2">
        <label
          htmlFor={inputId}
          className="text-gray-200"
        >
          {labelName}
        </label>
        <div className="flex items-center relative">
          <Iconname className="w-4 h-4 absolute left-3 text-gray-400" />
          <input
            type={type}
            id={inputId}
            placeholder={placeholder}
            className="bg-[#1F2937] px-10 w-full p-2 text-sm rounded-lg border border-[#313d4d] placeholder-gray-400 text-white"
          />
          {isPass && type == "password" && (
            <Eye
              onClick={handleEyeClick}
              className="w-4 h-4 absolute right-3 text-gray-400 hover:text-white cursor-pointer"
            />
          )}
          {isPass && type == "text" && (
            <EyeOff
              onClick={handleEyeClick}
              className="w-4 h-4 absolute right-3 text-gray-400 hover:text-white cursor-pointer"
            />
          )}
        </div>
      </div>
    </>
  );
};
