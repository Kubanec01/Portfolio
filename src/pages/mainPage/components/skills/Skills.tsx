import {programs} from "../../../../data/programs"
import style from "./skills.module.scss"


export const Skills = () => {

  const skillBg1 = "#7E7DE8";
  const skillBg2 = "#EB8AFF";

  return (
    <div className="w-full max-w-[1400px] my-[200px]">
      {/* SKILLS TEXT */}
      <div className="w-full max-w-[1300px] mx-auto">
        <h1
          className="text-6xl font-bold uppercase text-[#0000005c]"
        >
          What I Love <br /> To Work <br /> With
        </h1>
      </div>
      {/* SKILLS BARS */}
      <div
      className="rounded-2xl mt-[100px] w-full h-[700px] bg-[#00000004] relative">
        {programs.map(p => {
            return (
                <div
                key={p.id}
                style={{
                  boxShadow: "5px 5px 20px rgba(0,0,0,0.1)",
                  background: `linear-gradient(43deg, ${skillBg1}, ${skillBg2})`,
                }}
                className={`${style[p.className]} w-[300px] h-[90px] flex justify-around rounded-2xl mt-2 p-2`}>
                    <div className="w-[28%] flex justify-center items-center">
                        <img
                        className="object-cover aspect-square rounded-2xl w-[84%]"
                        src={p.image} alt={`${p.name} logo`} />
                    </div>
                    <div className="w-[72%] flex justify-center items-center">
                        <h1 className="text-[#ffffff] text-xl ">
                            {p.name}
                        </h1>
                    </div>
                </div>
            )
        })}
      </div>
    </div>
  );
};



