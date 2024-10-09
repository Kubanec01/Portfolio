import style from "./about.module.scss"
import image1 from "../../../../assets/author-img2.jpg"

export const About = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      {/* BARS SECTION */}
      <div className="max-w-[1300px] flex justify-between gap-10">
        <div
        className={`${style.bar1} w-[50%] h-[300px] flex flex-col items-center rounded-3xl`}>
          <h1 className="text-5xl font-semibold mt-[30px] text-[#3d836c]">Developer</h1>
          <p className="text-center text-xl font-semibold w-[80%] mt-[20px] text-[#478e76]">
            I have a passion for creating clean, responsive websites with unique
            designs and engaging functionality. I transform ideas into smooth
            digital experiences, turning websites into works of art.
          </p>
        </div>
        <div className={`${style.bar2} bg-[#c89af3cf] w-[50%] h-[300px] flex flex-col items-center rounded-3xl`}>
          <h1 className="text-5xl font-semibold mt-[30px] text-secondary">UX/UI Designer</h1>
          <p className="text-center text-xl font-semibold w-[80%] mt-[20px] text-[#534971]">
            I’m passionate about learning how to create simple, user-friendly
            designs. I focus on understanding user needs and building interfaces
            that feel intuitive and easy to navigate. Every project is a chance
            to improve and grow in delivering meaningful digital experiences.
          </p>
        </div>
      </div>
      {/* ABOUT SIZE */}
      <div className="w-[1300px] mt-[300px] mb-[160px]">
        <h1
        className="text-6xl font-bold uppercase text-[#bbebe0]"
        >Something <br /> About <br /> Me</h1>
      </div>
      {/* AUTHOR DESC SECTION */}
      <div
      className="w-[1300px]"
      >
        <div className="w-[50%]">
          <img className={`${style.img} w-[62%] aspect-square`} src={image1} alt="" />
        </div>
        <div className="border">
          <h1></h1>
          <p></p>
        </div>
      </div>
    </div>
  );
};
