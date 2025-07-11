import { Eye, EyeOff } from "lucide-react";
import { useEffect, useState } from "react";

export const InputBox = ({
  labelName,
  Iconname,
  placeholder,
  inputId,
  inputType,
  formData,
  setFormData,
  validationArr,
}) => {
  const [type, setType] = useState(inputType);
  const [isPass] = useState(inputType == "password" ? true : false);
  const [borderColor, setBorderColor] = useState("border-gray-400");

  const err = validationArr?.find((err) => err.path === inputId);

  const handleEyeClick = () => {
    setType((prev) => {
      if (prev == "password") {
        return "text";
      } else {
        return "password";
      }
    });
  };

  const handleInputChange = (e) => {
    setFormData((prev) => ({ ...prev, [inputId]: e.target.value }));
  };

  useEffect(() => {
    if (inputId == "cpassword") {
      if (!formData.password || !formData.cpassword) {
        setBorderColor("border-gray-400");
        return;
      }

      if (
        formData.password &&
        formData.cpassword &&
        formData.password === formData.cpassword
      ) {
        setBorderColor("border-green-400");
      } else {
        setBorderColor("border-red-500");
      }
    }
  }, [formData.password, formData.cpassword, inputId]);

  return (
    <div className="flex flex-col space-y-2">
      <div className="flex justify-between">
        <label
          htmlFor={inputId}
          className="text-gray-200"
        >
          {labelName}
        </label>
        {err && <p className="text-red-400 text-xs mt-1">{err.msg}</p>}
      </div>
      <div className="flex items-center relative">
        <Iconname className="w-4 h-4 absolute left-3 text-gray-400" />
        <input
          type={type}
          id={inputId}
          placeholder={placeholder}
          value={formData[inputId]}
          onChange={handleInputChange}
          autoComplete="off"
          className={`bg-[#1F2937] px-10 w-full p-2 text-sm rounded-lg border placeholder-gray-400 text-white focus:outline-0
            ${borderColor} ${err && "border-red-500"}
            `}
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
  );
};
