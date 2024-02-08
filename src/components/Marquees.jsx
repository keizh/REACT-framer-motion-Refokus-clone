import Marquee from "./Marquee";

import { motion } from "framer-motion";
function Marquees() {
  const images = [
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d275e12177716cb3f2ea_basf.svg",
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d27505e3a120466b87aa_singularity.svg",
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d275c2fcf540272672ef_intenseeye.svg",
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d27518bb52e4d642644e_bcgp.svg",
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d2756e8df24e52915c71_flowcode.svg",
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2ce14e6c85b010c2e1e3c_Logo%20White%201.svg",
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d275e1d5aa08ccc379dd_ypo.svg",
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d275909535ff431975cf_lavender.svg",
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d275f0442508aceaec02_accel.svg",
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d275ff2309d9d743ec75_doxel.svg",
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d275af18668cfbd759bc_webflow.svg",
    },
  ];

  return (
    <div className="w-full flex flex-col gap-[4rem] mt-[300px] mb-[250px]">
      <div className="w-full overflow-x-hidden flex">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
            ease: "linear",
            duration: 30,
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="flex shrink-0"
        >
          {images.map((image, index) => (
            <Marquee key={index} image={image.url} />
          ))}
        </motion.div>
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
            ease: "linear",
            duration: 30,
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="flex shrink-0"
        >
          {images.map((image, index) => (
            <Marquee key={index} image={image.url} />
          ))}
        </motion.div>
      </div>
      <div
        style={{
          background:
            "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(13,13,13,0.75) 7%, rgba(32,32,33,0.5) 17%, rgba(0,0,0,0) 34%, rgba(0,0,0,0) 64%, rgba(0,0,0,0) 65%, rgba(0,0,0,0.5) 84%, rgba(0,0,0,0.75) 94%, rgba(0,0,3,1) 100%)",
        }}
        className="w-full overflow-x-hidden flex"
      >
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{
            ease: "linear",
            duration: 30,
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="flex shrink-0"
        >
          {images.map((image, index) => (
            <Marquee key={index} image={image.url} />
          ))}
        </motion.div>
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{
            ease: "linear",
            duration: 30,
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="flex shrink-0"
        >
          {images.map((image, index) => (
            <Marquee key={index} image={image.url} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Marquees;
