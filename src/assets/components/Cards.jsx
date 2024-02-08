import Card from "./Card";

function Cards() {
  // eslint-disable-next-line no-unused-vars
  const cards = [
    {
      top: "Up Next: News",
      smalltopic: `Insights and behind  the scenes`,
      bottom: "Expore what drives our team.",
      Bigtopic: "",
      button: "",
      width: 32.5,
    },
    {
      top: "Get in Touch",
      smalltopic: `Let's get to it,  together. `,
      bottom: "",
      Bigtopic: "Start a Project",
      button: "contact us",
      width: 62.5,
    },
  ];
  return (
    <div className="w-full mt-[5rem] text-zinc-200 ">
      <div className="max-w-screen-xl mx-auto flex gap-[3px]">
        {cards.map((card, index) => (
          <Card
            key={index}
            top={card.top}
            smalltopic={card.smalltopic}
            bottom={card.bottom}
            Bigtopic={card.Bigtopic}
            button={card.button}
            cardwidth={card.width}
          />
        ))}
      </div>
    </div>
  );
}

export default Cards;
