import { IoArrowDownOutline } from "react-icons/io5";

export const Hero = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center h-[600px]">
      <div className="flex flex-col items-center text-secondary my-[140px]">
        <h1 className="text-[11rem] font-semibold tracking-[-3px]">
          Hi, I'm Jacob.
        </h1>
        <p className="text-7xl font-semibold tracking-[-1px]">
          Creative Web Designer.
        </p>
      </div>
      <div
      className="text-5xl text-[#ffffffde] bg-tertiary rounded-[100%] aspect-square flex justify-center items-center w-[100px] shadow-inner"
      >
        <a href="#"
        >
          <IoArrowDownOutline />
        </a>
      </div>
    </div>
  );
};
