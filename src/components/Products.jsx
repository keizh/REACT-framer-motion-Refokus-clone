import Product from "./Product";
import { motion } from "framer-motion";
import { useState } from "react";

function Products() {
  const products = [
    {
      name: "Arqitel",
      description:
        "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into realestate.",
      live: true,
      case: false,
    },
    {
      name: "Cula",
      description:
        "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.",
      live: true,
      case: false,
    },
    {
      name: "Maniv",
      description:
        "A global early-stage venture fund partnering with founders to advance cleaner, safer, and more sustainable movement of people and goods.",
      live: true,
      case: false,
    },
    {
      name: "YIR 2022",
      description:
        "Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate.",
      live: true,
      case: false,
    },
    {
      name: "Yahoo!",
      description:
        "We enhanced the New York Fashion Week, by creating a fully digital AR  fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models  and an integrated web shop.",
      live: true,
      case: true,
    },
    {
      name: "Weglot",
      description:
        "We enhanced the New York Fashion Week, by creating a fully digital AR  fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models  and an integrated web shop.",
      live: true,
      case: true,
    },
    {
      name: "Candid Health",
      description:
        "We enhanced the New York Fashion Week, by creating a fully digital AR  fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models  and an integrated web shop.",
      live: true,
      case: true,
    },
    {
      name: "Showcase",
      description:
        "We enhanced the New York Fashion Week, by creating a fully digital AR  fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models  and an integrated web shop.",
      live: true,
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
        />
      ))}
      <div className="absolute w-full h-full top-0  pointer-events-none">
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: `${pos}rem` }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.4 }}
          className="WINDOW h-[23rem] w-[32rem] absolute bg-sky-100 left-[38%] overflow-hidden rounded-lg"
        >
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: `-${pos}rem` }}
            className="w-full h-full "
          >
            <video autoPlay loop muted className="object-contain">
              <source
                src="src\assets\Arqitel project video 4_3.webm"
                type="video/mp4"
              />
            </video>
          </motion.div>
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: `-${pos}rem` }}
            className="w-full h-full "
          >
            <video autoPlay loop muted className="object-contain">
              <source
                src="src\assets\Cula_promo_new_4_3.mp4"
                type="video/mp4"
              />
            </video>
          </motion.div>
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: `-${pos}rem` }}
            className="w-full h-full bg-sky-300"
          >
            {" "}
            <video autoPlay loop muted className="object-contain">
              <source src="src\assets\Maniv-Compressed.mp4" type="video/mp4" />
            </video>
          </motion.div>
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: `-${pos}rem` }}
            className="w-full h-full bg-sky-400"
          ></motion.div>
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: `-${pos}rem` }}
            className="w-full h-full bg-sky-100"
          ></motion.div>
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: `-${pos}rem` }}
            className="w-full h-full bg-sky-200"
          ></motion.div>
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: `-${pos}rem` }}
            className="w-full h-full bg-sky-300"
          ></motion.div>
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: `-${pos}rem` }}
            className="w-full h-full bg-sky-400"
          ></motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Products;
