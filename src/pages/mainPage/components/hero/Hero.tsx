import { IoArrowDownOutline } from "react-icons/io5";
import style from "./hero.module.scss"
import bgImg from "../../../../assets/bg-2-img.jpg"

export const Hero = () => {
  return (
    <div
    // style={{
    //   backgroundImage: `url(${bgImg})`,
    //   backgroundSize: 'cover',
    //   backgroundRepeat: 'no-repeat',
    //   backgroundPosition: 'center',
    // }}
    className="w-full bg-tertiary flex flex-col justify-center items-center h-[100vh]">
      <div className="flex flex-col items-center mb-[140px]">
        <h1 className="text-[11rem] font-semibold text-secondary500 tracking-[-3px]">
          Hi, I'm Jacob.
        </h1>
        {/* pri p texte sa bude menit farba zo sedej na neonovu */}
        <p className="text-5xl text-secondary500 font-semibold tracking-[-1.2px] -mt-2">
          Creative Web Designer.
        </p>
      </div>
      <div
      className={`${style.link} text-4xl rounded-[100%] aspect-square flex justify-center items-center w-[80px] shadow-inner`}
      >
        <a href="#about-title"
        >
          <IoArrowDownOutline />
        </a>
      </div>
    </div>
  );
};
