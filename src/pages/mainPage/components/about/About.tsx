import style from "./about.module.scss";
import image1 from "../../../../assets/author-img.png";
import { PiBrain } from "react-icons/pi";
import { PiMagicWandLight } from "react-icons/pi";
import { PiStarFour } from "react-icons/pi";
import { Skills } from "../skills/Skills";
import { Work } from "../work/Work";

export const About = () => {
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
          {/* DEVELOPER BAR */}
          <div
            className={`${style.bar1} bg-tertiary w-[50%] h-[300px] p-5 flex flex-col rounded-3xl relative`}
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
            <PiStarFour
              className={`${style.devBarStars} absolute text-8xl text-customWhite -top-12 left-6 rotate-[20deg]`}
            />
            <PiStarFour
              className={`${style.devBarStars} absolute text-8xl text-customWhite -bottom-8 right-24 rotate-[10deg]`}
            />
            <PiStarFour
              className={`${style.devBarStars} absolute text-6xl text-customWhite top-4 right-10 rotate-[150deg]`}
            />
          </div>
          {/* UX/UI BAR */}
          <div
            className={`${style.bar2} bg-tertiary p-5 w-[50%] h-[300px] flex flex-col rounded-3xl relative`}
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
        </div>
        {/* AUTHOR BAR */}
        <div className="max-w-[1300px] mx-auto flex justify-between gap-2">
          <div
            className={`${style.bar3} w-full flex bg-[#1d1d1d] rounded-3xl my-[40px]`}
          >
            <div className="w-[45%] flex justify-center items-end">
              <img
                className={` object-cover aspect-square`}
                src={image1}
                alt=""
              />
            </div>
            <div className="w-[55%] py-10">
              <h1 className="text-4xl mt-[60px] font-bold text-[#ffffffda]">
                Junior Front-End Developer <br /> from Slovakia.
              </h1>
              <p className="text-2xl w-[85%] font-medium mt-[10px] text-[#ffffff83]">
                With a strong interest in web design and UX/UI, I love working
                with HTML, CSS, and TypeScript while actively focusing on React
                and modern design technologies such as i18next, Tailwind,
                Bootstrap, Framer Motion, and many others. Currently, I’m
                enhancing my skills in React and gaining more experience in
                front-end development. In my free time, I explore new
                technologies and keep up with trends in design and useful
                frameworks. You can check out my work below or directly on
                GitHub.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Skills />
      <Work />
    </div>
  );
};
