/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import Button from "./Button";

// setPos((pos) => index * 23);

function Product({ name, description, live, pcase, pos, setPos, index, bg }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      onMouseOver={() => {
        setPos((pos) => index * 23);
        setIsHovered(true);
      }}
      onMouseOut={() => setIsHovered(false)}
      className="w-full h-fit"
      style={{ backgroundImage: isHovered ? `url(${bg})` : "" }}
    >
      <div className="max-w-screen-xl h-[23rem] mx-auto flex justify-between items-center text-zinc-200 py-[3rem] ">
        <h1 className="text-6xl">{name}</h1>
        <div className="flex flex-col w-[300px]">
          <p className="mb-4 text-base">{description}</p>
          <div className="flex gap-[10px]">
            {isHovered && (
              <>
                {live && <Button title="Live Website" />}
                {pcase && <Button title="Case Study" />}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
