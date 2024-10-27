import { motion } from "framer-motion";
import image1 from "../../../../../../assets/author-img.png";
import style from "./authorInfoBar.module.scss"


export const AuthorInfoBar = () => {
    return (
        <div
         className="max-w-[1300px] mx-auto flex justify-between gap-2">
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
              <p className="text-2xl w-[85%] mt-[10px] text-[#ffffff83]">
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
    )
}