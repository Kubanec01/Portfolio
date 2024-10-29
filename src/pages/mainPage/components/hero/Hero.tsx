import { IoArrowDownOutline } from "react-icons/io5";
import style from "./hero.module.scss";

export const Hero = () => {
  return (
    <div className="w-full bg-tertiary500 flex flex-col justify-center items-center h-[100vh]">
      <div className="flex flex-col items-center mb-[8.75rem]">
        <h1 className="2xl:text-[11rem] lg:text-[8.5rem] sm:text-8xl text-7xl font-semibold text-secondary500 tracking-[-3px]">
          Hi, I'm Jacob.
        </h1>
        <p className="2xl:text-5xl lg:text-4xl sm:text-2xl text-xl text-secondary500 lg:font-semibold font-medium lg:tracking-[-1.2px] lg:-mt-2 ">
          Creative Web Designer.
        </p>
      </div>
      <div
        className={`${style.link} 2xl:text-4xl lg:text-3xl text-2xl rounded-[100%] aspect-square flex justify-center items-center 2xl:w-[80px] lg:w-[70px] w-[60px] shadow-inner`}
      >
        <a href="#about-title">
          <IoArrowDownOutline />
        </a>
      </div>
      {/* STARS */}
    </div>
  );
};
