import { motion } from "framer-motion";
import {programs} from "../../../../data/programs"
import style from "./skills.module.scss"


export const Skills = () => {

  return (
    <div className={`${style.skillsBody} w-full max-w-[1300px] mt-[300px] h-[700px] px-2`}>
      {/* SKILLS TEXT */}
      <div className="w-full mx-auto">
        <h1
          className="text-6xl text-center font-bold uppercase text-[#4731d4c8]"
        >
          Tools I Love <br /> To Work With
        </h1>
      </div>
      {/* SKILLS BARS */}
      <div
      className="rounded-2xl mt-[100px] w-full flex justify-center gap-3 items-top">
        {programs.map((p, index) => {
            return (
                <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.5,
                }}
                transition={{ duration: 0.3 + index * 0.1}}
                variants={{
                  hidden: { opacity: 0, y: 100 },
                  visible: { opacity: 1, y: 0 },
                }}
                key={p.id}
                className={`${style[p.className]} bg-[#2f2f2fda] w-[200px] h-[166px] py-3 flex-col justify-center items-center rounded-2xl mt-2 p-2`}>
                    <div className="flex justify-center items-center">
                        <img
                        className="object-cover aspect-square rounded-2xl w-[44%] opacity-95"
                        src={p.image} alt={`${p.name} logo`} />
                    </div>
                    <div className="flex justify-center items-center mt-[12px]">
                        <h1 className="text-[#ffffff89] text-center font-semibold text-2xl ">
                            {p.name}
                        </h1>
                    </div>
                </motion.div>
            )
        })}
      </div>
    </div>
  );
};



