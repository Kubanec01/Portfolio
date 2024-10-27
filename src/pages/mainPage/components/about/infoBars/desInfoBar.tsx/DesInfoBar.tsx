import style from "./desInfoBar.module.scss";
import { PiMagicWandLight, PiStarFour } from "react-icons/pi";
import { useHoverStatus } from "../../../../../../hooks/useHoverStatus";

export const DesInfoBar = () => {

  const {isActive, mouseEnter, mouseLeave} = useHoverStatus()

  const visibilityStatus = isActive ? style.visible : style.invisible;


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
        intuitive navigation and understanding user needs, using every project
        to enhance meaningful digital experiences.
      </p>
      <PiMagicWandLight className="absolute bottom-3 right-5 text-7xl text-customWhite" />
      <PiStarFour
        className={`${visibilityStatus} absolute text-7xl text-customWhite -top-10 left-6 rotate-[20deg]`}
      />
      <PiStarFour
        className={`${visibilityStatus} absolute text-7xl text-customWhite -bottom-8 right-24 rotate-[10deg]`}
      />
      <PiStarFour
        className={`${visibilityStatus} absolute text-6xl text-customWhite top-4 right-10 rotate-[150deg]`}
      />
      <PiStarFour
        className={`${visibilityStatus} absolute text-4xl text-customWhite bottom-6 left-20 rotate-[-20deg]`}
      />
    </div>
  );
};
