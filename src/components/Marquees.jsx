import Marquee from "./Marquee";
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
        {images.map((image, index) => (
          <Marquee key={index} image={image.url} />
        ))}
      </div>
      <div className="w-full overflow-x-hidden flex">
        {images.map((image, index) => (
          <Marquee key={index} image={image.url} />
        ))}
      </div>
    </div>
  );
}

export default Marquees;
