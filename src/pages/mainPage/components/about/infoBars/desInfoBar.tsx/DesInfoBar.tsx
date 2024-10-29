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
      className={`${style.bar2} bg-tertiary300 p-5 lg:w-[50%] rounded-3xl relative`}
    >
      <h1 className="lg:text-5xl sm:text-4xl text-3xl text-secondary500 font-semibold mt-[10px] text-secondary">
        UX/UI Designer
      </h1>
      <p className="sm:text-2xl text-xl w-[90%] mt-[10px] mb-[30px] text-secondary500">
        I’m passionate about creating user-friendly designs that focus on
        intuitive navigation and understanding user needs, using every project
        to enhance meaningful digital experiences.
      </p>
      <PiMagicWandLight className="absolute bottom-3 right-5 md:text-7xl sm:text-6xl text-5xl text-customWhite" />
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
