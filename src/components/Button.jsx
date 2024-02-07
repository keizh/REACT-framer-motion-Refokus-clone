/* eslint-disable react/prop-types */
import { IoIosReturnRight } from "react-icons/io";
function Button({ title = "Start a Project" }) {
  return (
    <div className="flex items-center gap-2 bg-zinc-200 text-black rounded-full px-3 py-1">
      <span>{title}</span>
      <IoIosReturnRight />
    </div>
  );
}

export default Button;
