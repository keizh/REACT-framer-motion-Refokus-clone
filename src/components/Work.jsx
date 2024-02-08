/* eslint-disable no-unused-vars */
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

function Work() {
  const [images, setImages] = useState([
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png",
      top: "40%",
      left: "30%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png",
      top: "47%",
      left: "25%",
      isActive: false,
    },
    {
      url: "assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png",
      top: "30%",
      left: "35%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png",
      top: "30%",
      left: "35%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png",
      top: "55%",
      left: "29%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png",
      top: "40%",
      left: "40%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png",
      top: "50%",
      left: "20%",
      isActive: false,
    },
  ]);

  const { scrollYProgress } = useScroll();

  function updateImagesState(arr) {
    setImages((images) => {
      return images.map((image, index) => {
        return arr.includes(index)
          ? { ...image, isActive: true }
          : { ...image, isActive: false };
      });
    });
  }

  function appearAndDisappearOnScroll(scrollYProgressInInteger) {
    switch (scrollYProgressInInteger) {
      case 0:
        updateImagesState(
          Array.from({ length: scrollYProgressInInteger }, (_, index) => index)
        );
        break;
      case 1:
        updateImagesState(
          Array.from({ length: scrollYProgressInInteger }, (_, index) => index)
        );
        // console.log(1);
        break;
      case 2:
        // console.log(2);
        updateImagesState(
          Array.from({ length: scrollYProgressInInteger }, (_, index) => index)
        );
        // Array.from({ length: scrollYProgressInInteger }, (_, index) => index)
        break;
      case 3:
        console.log(3);
        updateImagesState(
          Array.from({ length: scrollYProgressInInteger }, (_, index) => index)
        );
        break;
      case 4:
        updateImagesState(
          Array.from({ length: scrollYProgressInInteger }, (_, index) => index)
        );
        break;
      case 5:
        updateImagesState(
          Array.from({ length: scrollYProgressInInteger }, (_, index) => index)
        );
        break;
      case 6:
        updateImagesState(
          Array.from({ length: scrollYProgressInInteger }, (_, index) => index)
        );
        break;
      case 7:
        updateImagesState(
          Array.from({ length: scrollYProgressInInteger }, (_, index) => index)
        );
        break;
      default:
      // console.log("out");
    }
  }

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    appearAndDisappearOnScroll(Math.floor(latest * 100));
  });

  return (
    <div className="WORK w-full ">
      <div className=" relative max-w-screen-xl relative mx-auto pt-[2rem]  border-zinc-700 leading-none flex flex-col justify-center ">
        <h1 className="text-[37rem] text-zinc-200 align-center ">work</h1>
        <div className="absolute  w-full h-full ">
          {images.map(
            (image, index) =>
              image.isActive && (
                <img
                  key={index}
                  src={image.url}
                  style={{ top: image.top, left: image.left }}
                  className={` absolute rounded-lg   w-[17.5vw] `}
                />
              )
          )}
        </div>
      </div>
    </div>
  );
}

export default Work;

{
  /* <div className="absolute top-0 w-full h-full ">
{images.map((image, index) => (
  <img
    key={index}
    src={`${image.url}`}
    className={` absolute rounded translate-y-[-50%] translate-x-[-50%] top-[${image.top}] left-[${image.left}] w-[200px] `}
  />
))}
</div> */
}
