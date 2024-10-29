import { Projects } from "./project/Projects";
import style from "./work.module.scss"

export const Work = () => {
  return (
      <div
      className="w-full"
      >

    <div className="max-w-[1400px] mx-auto sm:mt-[100px] mb-[160px] px-2">
      {/* WORK TITLE/LINK BUTTON */}
      <div
      className="flex flex-col justify-center items-center"
      >
        <h1
        className={`${style.title} text-center lg:text-9xl sm:text-8xl text-7xl 2xl:font-extrabold font-bold`}>
          Digital <br /> Creations
        </h1>
        <a
         className={`${style.linkButton} mt-[50px] lg:text-lg sm:text-base text-sm font-medium rounded-[30px] px-[10px] py-[10px] text-[#ffffff]`}
         href="#">
          See More
        </a>
      </div>
      {/* WORK BARS */}
      <div
      className="mt-[80px] flex flex-col items-center md:gap-32 gap-16 justify-center">
        <Projects />
      </div>
    </div>
        </div>
  );
};
