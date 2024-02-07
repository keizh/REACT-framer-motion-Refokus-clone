import { dot } from "./NavBarStyles.module.css";
import Button from "./Button";

function NavBar() {
  const tabs = ["Home", "Work", "Careers", "", "News"];
  console.log(dot);
  return (
    <div className="w-full">
      <div className="max-w-screen-xl  mx-auto py-8 border-b-[1px] border-zinc-700 flex  gap-[110px]">
        <div className="REFOKUS_IMAGE">
          <img
            src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
            alt=""
          />
        </div>
        <div className="WEB_TABS flex gap-[70px] mr-auto">
          {tabs.map((tab, index) =>
            tab === "" ? (
              <p
                key={index}
                className="w-[1px]  border-l-2 border-zinc-700"
              ></p>
            ) : (
              <p
                key={index}
                className={`${
                  index == 1 && dot
                } relative text-zinc-100 text-base`}
                id={index}
              >
                {tab}
              </p>
            )
          )}
        </div>
        <Button />
      </div>
    </div>
  );
}

export default NavBar;
