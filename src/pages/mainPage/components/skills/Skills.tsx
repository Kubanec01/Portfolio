import { motion } from "framer-motion";
import {programs} from "../../../../data/programs"
import style from "./skills.module.scss"
import { Trans } from "react-i18next";


export const Skills = () => {


  return (
    <div className={`${style.skillsBody} w-full max-w-[1300px] md:mt-[300px] mt-[150px] lg:h-[700px] h-[500px] px-2`}>
      {/* SKILLS TEXT */}
      <div
      style={{
        scrollMargin: "260px",
      }}
      id="tools-title"
      className="w-full mx-auto">
        <h1
          className="xl:text-6xl sm:text-5xl text-4xl text-center font-bold uppercase text-[#4731d4c8]"
        >
          <Trans
          i18nKey={'skills.title'}
          />
        </h1>
      </div>
      {/* SKILLS BARS */}
      <div
      className="rounded-2xl lg:mt-[100px] md:mt-[60px] mt-[30px] w-full flex flex-wrap justify-center gap-3">
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
                className={`${style[p.className]} bg-[#2f2f2fda] xl:w-[200px] md:w-[160px] w-[130px] xl:h-[166px] md:h-[146px] h-[126px] py-3 flex-col justify-center items-center rounded-2xl mt-2 p-2`}>
                    <div className="flex justify-center items-center">
                        <img
                        className="object-cover aspect-square rounded-2xl w-[44%] opacity-95"
                        src={p.image} alt={`${p.name} logo`} />
                    </div>
                    <div className="flex justify-center items-center mt-[12px]">
                        <h1 className="text-[#ffffff89] text-center font-semibold xl:text-2xl md:text-xl text-lg ">
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



