import Product from "./Product";
import { motion } from "framer-motion";
import { useState } from "react";

import arqitel from "../assets/Arqitel project video 4_3.webm";
import cula from "../assets/Cula_promo_new_4_3.mp4";
import maniv from "../assets/Maniv-Compressed.mp4";
import summon from "../assets/summon.webm";
import yahoo from "../assets/yahoo.webm";
import weglot from "../assets/weglot.web";
import candid from "../assets/Candid Health 4_3_H.264.webm";
import showcase from "../assets/showcase_4_3.mp4";

function Products() {
  const products = [
    {
      name: "Arqitel",
      description:
        "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into realestate.",
      live: true,
      bg: "https://assets-global.website-files.com/6334198f239547f2fccd84c1/650c621a3aa0ee3ae147d692_arqitel-bg-p-2000.webp",
      case: false,
    },
    {
      name: "Cula",
      description:
        "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.",
      live: true,
      bg: "https://assets-global.website-files.com/6334198f239547f2fccd84c1/65b41319bda140bccae204ae_bg%202.png",
      case: false,
    },
    {
      name: "Maniv",
      description:
        "A global early-stage venture fund partnering with founders to advance cleaner, safer, and more sustainable movement of people and goods.",
      live: true,
      bg: "https://assets-global.website-files.com/6334198f239547f2fccd84c1/65b2ccf5af18668cfbd3a8d6_bg%201.png",
      case: false,
    },
    {
      name: "YIR 2022",
      description:
        "Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate.",
      live: true,
      bg: "https://assets-global.website-files.com/6334198f239547f2fccd84c1/6450586e80fac7eb1655014f_yir2022%E2%80%93bg-p-2000.png",
      case: false,
    },
    {
      name: "Yahoo!",
      description:
        "We enhanced the New York Fashion Week, by creating a fully digital AR  fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models  and an integrated web shop.",
      live: true,
      bg: "https://assets-global.website-files.com/6334198f239547f2fccd84c1/635299cbb5dc5fd8b2972010_Yahoo%20bg.png",
      case: true,
    },
    {
      name: "Weglot",
      description:
        "We enhanced the New York Fashion Week, by creating a fully digital AR  fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models  and an integrated web shop.",
      live: true,
      bg: "https://assets-global.website-files.com/6334198f239547f2fccd84c1/635299d5545a912e9e4a9cb4_Weglot%20for%20Germany%20bg.png",
      case: true,
    },
    {
      name: "Candid Health",
      description:
        "We enhanced the New York Fashion Week, by creating a fully digital AR  fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models  and an integrated web shop.",
      live: true,
      bg: "https://assets-global.website-files.com/6334198f239547f2fccd84c1/64b7dbf5f12bc6fafbfb90fa_Candid%20Work%20Background.jpg",
      case: true,
    },
    {
      name: "Showcase",
      description:
        "We enhanced the New York Fashion Week, by creating a fully digital AR  fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models  and an integrated web shop.",
      live: true,
      bg: "https://assets-global.website-files.com/6334198f239547f2fccd84c1/6352999803e7fe5651137f1e_Showcase%20Website%20bg.png",
      case: true,
    },
  ];

  const [pos, setPos] = useState(0);
  console.log(pos);
  return (
    <div className="mt-[10vw]  relative h-fit w-full text-zinc-100">
      {products.map((product, index) => (
        <Product
          key={index}
          name={product.name}
          description={product.description}
          live={product.live}
          pcase={product.case}
          pos={pos}
          setPos={setPos}
          index={index}
          bg={product.bg}
        />
      ))}
      <div className="absolute w-full h-full top-0  pointer-events-none">
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: `${pos}rem` }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.4 }}
          className="WINDOW h-[23rem] w-[32rem] absolute  left-[38%] overflow-hidden rounded-lg "
        >
          {/* first */}
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: `-${pos}rem` }}
            className="w-full h-full "
          >
            <video autoPlay loop muted className="object-contain">
              <source src={arqitel} type="video/mp4" />
            </video>
          </motion.div>
          {/*second */}
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: `-${pos}rem` }}
            className="w-full h-full "
          >
            <video autoPlay loop muted className="object-contain">
              <source src={cula} type="video/mp4" />
            </video>
          </motion.div>
          {/* third */}
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: `-${pos}rem` }}
            className="w-full h-full "
          >
            <video autoPlay loop muted className="object-contain">
              <source src={maniv} type="video/mp4" />
            </video>
          </motion.div>
          {/* forth */}
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: `-${pos}rem` }}
            className="w-full h-full bg-sky-400"
          >
            <video autoPlay loop muted className="object-contain">
              <source src={summon} type="video/mp4" />
            </video>
          </motion.div>
          {/* fifth */}
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: `-${pos}rem` }}
            className="w-full h-full bg-sky-100"
          >
            <video autoPlay loop muted className="object-contain">
              <source src={yahoo} type="video/mp4" />
            </video>
          </motion.div>
          {/* sixth */}
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: `-${pos}rem` }}
            className="w-full h-full bg-sky-200"
          >
            <video autoPlay loop muted className="object-contain">
              <source src={weglot} type="video/mp4" />
            </video>
          </motion.div>
          {/* seventh */}
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: `-${pos}rem` }}
            className="w-full h-full bg-sky-300"
          >
            <video autoPlay loop muted className="object-contain">
              <source src={candid} type="video/mp4" />
            </video>
          </motion.div>
          {/* eigth */}
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: `-${pos}rem` }}
            className="w-full h-full bg-sky-400"
          >
            <video autoPlay loop muted className="object-contain">
              <source src={showcase} type="video/mp4" />
            </video>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Products;
