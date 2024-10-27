import { useState } from "react";
import style from "./desInfoBar.module.scss"
import { PiMagicWandLight, PiStarFour } from "react-icons/pi";


export const DesInfoBar = () => {
    
    const [isActive, setIsActive] = useState(false);

    console.log(isActive);
  
    const mouseEnter = () => {
      return setIsActive(true);
    };
  
    const mouseLeave = () => {
      return setIsActive(false);
    };
    
    
    return (
        <div
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
        className={`${style.bar2} bg-tertiary300 p-5 w-[50%] h-[300px] flex flex-col rounded-3xl relative`}
      >
        <h1 className="text-5xl text-secondary500 font-semibold mt-[10px] text-secondary">
          UX/UI Designer
        </h1>
        <p className="text-2xl w-[90%] mt-[10px] text-secondary500">
          I’m passionate about creating user-friendly designs that focus on
          intuitive navigation and understanding user needs, using every
          project to enhance meaningful digital experiences.
        </p>
        <PiMagicWandLight className="absolute bottom-3 right-5 text-7xl text-customWhite" />
        <PiStarFour
          className={`${style.desBarStars} absolute text-8xl text-customWhite -top-14 left-6 rotate-[20deg]`}
        />
        <PiStarFour
          className={`${style.desBarStars} absolute text-8xl text-customWhite -bottom-8 right-24 rotate-[10deg]`}
        />
        <PiStarFour
          className={`${style.desBarStars} absolute text-6xl text-customWhite top-4 right-10 rotate-[150deg]`}
        />
      </div>
    )
}