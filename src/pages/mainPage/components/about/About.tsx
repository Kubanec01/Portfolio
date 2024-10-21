import style from "./about.module.scss";
import image1 from "../../../../assets/author-img.png";
import { PiBrain } from "react-icons/pi";
import { PiMagicWandLight } from "react-icons/pi";
import { PiStarFour } from "react-icons/pi";
import { Skills } from "../skills/Skills";
import { Work } from "../work/Work";
import { FaGithub } from "react-icons/fa";

export const About = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-slate-200 ">
      {/* DESCRIPTION TEXT */}
      <div className="w-[1300px] my-[100px]">
        <h1 className="text-6xl font-bold uppercase text-[#0000005c]">
          Something <br /> About <br /> Me
        </h1>
      </div>
      {/* BARS SECTION */}
      <div className="max-w-[1300px] flex justify-between gap-10">
        {/* DEVELOPER BAR */}
        <div
          className={`${style.bar1} w-[50%] h-[300px] p-5 flex flex-col rounded-3xl relative`}
        >
          <h1 className="text-5xl font-semibold mt-[10px] text-[#a2fee3]">
            Developer
          </h1>
          <p className="text-xl font-semibold w-[70%] mt-[10px] text-[#e3fcf4]">
            I have a passion for creating clean, responsive websites with unique
            designs and engaging functionality. I transform ideas into smooth
            digital experiences, turning websites into works of art.
          </p>
          <PiBrain className="absolute bottom-3 right-5 text-7xl text-[#e3fcf4]" />
          <PiStarFour
            className={`${style.devBarStars} absolute text-8xl text-white -top-12 left-6 rotate-[20deg]`}
          />
          <PiStarFour
            className={`${style.devBarStars} absolute text-8xl text-white -bottom-8 right-24 rotate-[10deg]`}
          />
          <PiStarFour
            className={`${style.devBarStars} absolute text-6xl text-white top-4 right-10 rotate-[150deg]`}
          />
        </div>
        {/* UX/UI BAR */}
        <div
          className={`${style.bar2} p-5 w-[50%] h-[300px] flex flex-col rounded-3xl relative`}
        >
          <h1 className="text-5xl font-semibold mt-[10px] text-secondary">
            UX/UI Designer
          </h1>
          <p className="text-xl font-bold w-[80%] mt-[10px] text-[#534971]">
            I’m passionate about learning how to create simple, user-friendly
            designs. I focus on understanding user needs and building interfaces
            that feel intuitive and easy to navigate. Every project is a chance
            to improve and grow in delivering meaningful digital experiences.
          </p>
          <PiMagicWandLight className="absolute bottom-3 right-5 text-7xl text-[#534971]" />
          <PiStarFour
            className={`${style.desBarStars} absolute text-8xl text-white -top-14 left-6 rotate-[20deg]`}
          />
          <PiStarFour
            className={`${style.desBarStars} absolute text-8xl text-white -bottom-8 right-24 rotate-[10deg]`}
          />
          <PiStarFour
            className={`${style.desBarStars} absolute text-6xl text-white top-4 right-10 rotate-[150deg]`}
          />
        </div>
      </div>
      {/* AUTHOR BARS */}
      <div className="max-w-[1300px] flex justify-between gap-2">
        {/* AUTHOR BAR */}
        <div
          className={`${style.bar3} w-[90%] flex bg-[#cfcdcd] rounded-3xl my-[40px]`}
        >
          <div className="w-[50%] flex justify-center items-end">
            <img
              className={` object-cover aspect-square`}
              src={image1}
              alt=""
            />
          </div>
          <div className="w-[45%] py-10">
            <h1 className="text-4xl mt-[40px] font-bold text-[#000000d0]">
              Junior Front-End Developer <br /> from Slovakia.
            </h1>
            <p className="text-xl w-[95%] font-semibold mt-[10px] text-[#000000b0]">
              With a strong interest in web design and UX/UI, I love working
              with HTML, CSS, and TypeScript while actively focusing on React
              and modern design technologies such as i18next, Tailwind,
              Bootstrap, Framer Motion, and many others. Currently, I’m
              enhancing my skills in React and gaining more experience in
              front-end development. In my free time, I explore new technologies
              and keep up with trends in design and useful frameworks. You can
              check out my work below or directly on GitHub.
            </p>
          </div>
        </div>
        {/* GITHUB BAR */}
        <div
        className="w-[10%] border border-black bg-[#000000f3] my-[40px] rounded-3xl flex items-center justify-center"
        >
          <h1 
          className="text-6xl font-bold text-center text-[white]"
          >
            S <br />
            E <br />
            E <br />
            M <br />
            <FaGithub />
            R <br />
            E <br />
          </h1>
        </div>
      </div>
      <Skills />
      <Work />
    </div>
  );
};
