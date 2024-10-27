import style from "./devInfoBar.module.scss"
import { PiBrain, PiStarFour } from "react-icons/pi";
import { useHoverStatus } from "../../../../../../hooks/useHoverStatus";

export const DevInfoBar = () => {
    
  const {isActive, mouseEnter, mouseLeave} = useHoverStatus()

    const visibilityStatus = isActive ? style.visible : style.invisible;

    return(
        <div
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
        className={`${style.bar1} bg-tertiary300 w-[50%] h-[300px] p-5 flex flex-col rounded-3xl relative`}
      >
        <h1 className="text-5xl font-semibold mt-[10px] text-secondary500">
          Developer
        </h1>
        <p className="text-2xl w-[80%] mt-[10px] text-secondary500">
          I have a passion for creating clean, responsive websites with
          unique designs and engaging functionality. I transform ideas into
          smooth digital experiences, turning websites into works of art.
        </p>
        <PiBrain className="absolute bottom-3 right-5 text-7xl text-customWhite" />
        {/* STARS ICONS */}
        <PiStarFour
          className={`${visibilityStatus} absolute text-7xl text-customWhite -top-10 left-6 rotate-[20deg]`}
        />
        <PiStarFour
          className={`${visibilityStatus} absolute text-7xl text-customWhite -bottom-8 right-24 rotate-[10deg]`}
        />
        <PiStarFour
          className={`${visibilityStatus} absolute text-6xl text-customWhite top-4 right-10 rotate-[150deg]`}
        />
      </div>
    )
}