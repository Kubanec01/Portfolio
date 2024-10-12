import style from "./about.module.scss";
import image1 from "../../../../assets/author-img2.jpg";

export const About = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      {/* ABOUT SIZE */}
      <div className="w-[1300px] my-[100px]">
        <h1 className={`${style.text} text-6xl font-bold uppercase text-[#bbebe0]`}>
          Something <br /> About <br /> Me
        </h1>
      </div>
      {/* BARS SECTION */}
      <div className="max-w-[1300px] flex justify-between gap-10">
        <div
          className={`${style.bar1} w-[50%] h-[300px] flex flex-col items-center rounded-3xl`}
        >
          <h1 className="text-5xl font-semibold mt-[30px] text-[#3d836c]">
            Developer
          </h1>
          <p className="text-center text-xl font-semibold w-[80%] mt-[20px] text-[#478e76]">
            I have a passion for creating clean, responsive websites with unique
            designs and engaging functionality. I transform ideas into smooth
            digital experiences, turning websites into works of art.
          </p>
        </div>
        <div
          className={`${style.bar2} bg-[#c89af3cf] w-[50%] h-[300px] flex flex-col items-center rounded-3xl`}
        >
          <h1 className="text-5xl font-semibold mt-[30px] text-secondary">
            UX/UI Designer
          </h1>
          <p className="text-center text-xl font-semibold w-[80%] mt-[20px] text-[#534971]">
            I’m passionate about learning how to create simple, user-friendly
            designs. I focus on understanding user needs and building interfaces
            that feel intuitive and easy to navigate. Every project is a chance
            to improve and grow in delivering meaningful digital experiences.
          </p>
        </div>
      </div>
      {/* AUTHOR DESC SECTION */}
      <div className={`${style.bar3} w-[1300px] h-[600px] flex mb-10 bg-[#e5e5e5e8] rounded-3xl mt-[40px]`}>
        <div className="w-[36%] flex justify-center items-center">
          <img
            className={`w-[62%] object-cover rounded-[100%] aspect-square`}
            src={image1}
            alt=""
          />
        </div>
        <div className="w-[64%] flex flex-col justify-center">
          <h1 className="text-5xl font-bold text-[#0000009d]">Junior Front-End Developer <br /> from Slovakia</h1>
          <p className="text-2xl font-semibold w-[80%] mt-[30px] text-[#0000009a]">
            With a strong interest in web design and UX/UI, I love working with
            HTML, CSS, and TypeScript while actively focusing on React and
            modern design technologies such as i18next, Tailwind, Bootstrap, Framer
            Motion, and many others. Currently, I’m enhancing my skills in React
            and gaining more experience in front-end development. In my free
            time, I explore new technologies and keep up with trends in design
            and useful frameworks. You can check out my work below or directly
            on GitHub.
          </p>
        </div>
      </div>
    </div>
  );
};
