import { IoArrowDownOutline } from "react-icons/io5";
import style from "./hero.module.scss"

export const Hero = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center h-[900px]">
      <div className="flex flex-col items-center mb-[140px]">
        <h1 className="text-[11rem] font-semibold text-secondary500 tracking-[-3px]">
          Hi, I'm Jacob.
        </h1>
        <p className="text-5xl font-semibold tracking-[-1.2px] -mt-2 text-secondary300">
          Creative Web Designer.
        </p>
      </div>
      <div
      className={`${style.link} text-4xl bg-secondary500 rounded-[100%] aspect-square flex justify-center items-center w-[80px] shadow-inner`}
      >
        <a href="#about-title"
        >
          <IoArrowDownOutline />
        </a>
      </div>
    </div>
  );
};
