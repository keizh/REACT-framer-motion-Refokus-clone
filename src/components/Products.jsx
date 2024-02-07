import Product from "./Product";

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
  return (
    <div className="mt-[10vw] w-full text-zinc-100">
      {products.map((product, index) => (
        <Product
          key={index}
          name={product.name}
          description={product.description}
          live={product.live}
          pcase={product.case}
        />
      ))}
    </div>
  );
}

export default Products;
