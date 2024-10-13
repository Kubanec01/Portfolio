import {programs} from "../../../../data/programs"
import image from "../../../../assets/skills-bg-img.jpg"


export const Skills = () => {
  return (
    <div className="border border-red-600 w-[1500px] my-[200px]">
      {/* SKILLS TEXT */}
      <div className="w-[1300px] mx-auto">
        <h1
          className="text-6xl font-bold uppercase text-[#0000005c]"
        >
          What I Love <br /> To Work <br /> With
        </h1>
      </div>
      {/* SKILLS BARS */}
      <div className="border border-green-600 mt-[100px] w-full h-[700px]">
        {programs.map(p => {
            return (
                <div
                key={p.id}
                // style={{
                //     backgroundImage: `url(${image})`,
                //     backgroundRepeat: 'no-repeat',
                //     backgroundSize: 'cover',
                //     backgroundPosition: 'center',
                // }}
                className="w-[300px] h-[90px] flex justify-around rounded-xl mt-2 p-2 bg-[#ff8ec4]">
                    <div className="w-[28%] flex justify-center items-center">
                        <img
                        className="object-cover aspect-square rounded-2xl w-[84%]"
                        src={p.image} alt={`${p.name} logo`} />
                    </div>
                    <div className="w-[72%] flex justify-center items-center">
                        <h1 className="text-white text-xl ">
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
