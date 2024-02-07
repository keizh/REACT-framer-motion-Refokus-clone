/* eslint-disable react/prop-types */
import { IoIosReturnRight } from "react-icons/io";
import CardStyle from "./CardStyle.module.css";

function Card({ top, smalltopic, bottom, Bigtopic, button, width }) {
  return (
    <div
      className={`CARD ${
        CardStyle.card
      } w-[${width}] h-[45vh] flex flex-col gap-[20px] bg-zinc-700  rounded-[1.3rem] py-[1rem] px-[1.4rem] shrink-0 ${
        button ? CardStyle.cardbg : `hover:bg-zinc-600`
      }`}
    >
      <div className={`${CardStyle.top} flex items-center justify-between`}>
        <p>{top}</p>
        <IoIosReturnRight />
      </div>
      <div className={`${CardStyle.top} mb-auto text-3xl w-[300px]`}>
        {smalltopic}
      </div>
      {Bigtopic && <div className="text-8xl">{Bigtopic}</div>}
      {bottom && <div className="text-zinc-400">{bottom}</div>}
      {button && (
        <div className="flex items-center text-zinc-200 rounded-full px-4 py-2 border w-fit">
          {" "}
          Contact us{" "}
        </div>
      )}
    </div>
  );
}

export default Card;
