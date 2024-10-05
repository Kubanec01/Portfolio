import image from "../../../../assets/author-img.png";
import style from "./hero.module.scss"

export const Hero = () => {
  return (
    <div className="bg-primary w-full h-[780px] flex justify-center items-center">
      <div className=" h-full w-[1400px] max-w-[1400px] flex justify-between">
        {/* TEXT */}
        <div className="w-[50%] text-white flex flex-col justify-center items-center">
          <div 
          className="relative before:w-[30%] before:h-[2px] before:bg-[#ffffff1f] 
          before:absolute before:-top-3 before:left-0 before:rounded-xl
          after:absolute after:-bottom-4 after:right-0 after:w-[60%] after:h-[2px] after:bg-[#ffffff1f]">
            <p className={`${style.greetings} text-xl`}>Hi, I'm</p>
            <h1 className={`${style.name} text-9xl font-medium`}>Jacob</h1>
            <p className={`${style.desc} text-4xl mt-3 mb-2`}>
              Creative <span className="text-5xl">Web Designer</span>
            </p>
          </div>
        </div>
        {/* IMAGE */}
        <div className="w-[50%] flex justify-center relative">
          <img
            className="object-cover opacity-90"
            src={image}
            alt="author-img"
          />
          {/* Treba upravit obrazok v Photoshope */}
        </div>
      </div>
    </div>
  );
};
