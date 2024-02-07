import { BsArrowReturnRight } from "react-icons/bs";

function Button(title = "Start a Project") {
  return (
    <Button className="flex gap-[2] rounded-full bg-zinc-200 text-black">
      <p>{title}</p>
      <BsArrowReturnRight />
    </Button>
  );
}

export default Button;
