import style from "./about.module.scss";
import image1 from "../../../../assets/author-img.png";
import { PiBrain } from "react-icons/pi";
import { PiMagicWandLight } from "react-icons/pi";
import { PiStarFour } from "react-icons/pi";
import { Skills } from "../skills/Skills";
import { Work } from "../work/Work";
import { useState } from "react";
import { DevInfoBar } from "./infoBars/devInfoBar/DevInfoBar";
import { DesInfoBar } from "./infoBars/desInfoBar.tsx/DesInfoBar";
import { AuthorInfoBar } from "./infoBars/authorInfoBar/AuthorInfoBar";

export const About = () => {
  const [isActive, setIsActive] = useState(false);

  console.log(isActive);

  const mouseEnter = () => {
    return setIsActive(true);
  };

  const mouseLeave = () => {
    return setIsActive(false);
  };

  return (
    <div className="flex flex-col justify-center items-center bg-primary500">
      {/* DESCRIPTION TEXT */}
      <div
        id="about-title"
        style={{
          scrollMargin: "80px",
        }}
        className="w-[1300px] my-[100px]"
      >
        <h1 className="text-6xl font-bold uppercase text-primary300">
          Something <br /> About <br /> Me
        </h1>
      </div>
      {/* BARS BODY */}
      <div className={style.barsSection}>
        {/* DEFINITION BARS */}
        <div className="max-w-[1300px] mx-auto flex justify-between gap-10">
          <DevInfoBar />
          <DesInfoBar />
        </div>
        <AuthorInfoBar />
      </div>
      {/* SKILLS SECTION */}
      <Skills />
      {/* WORK SECTION */}
      <Work />
    </div>
  );
};
