import style from "./work.module.scss"

export const Work = () => {
  return (
    <div className="w-[1400px] mx-auto my-[170px]">
      {/* WORK TITLE/LINK BUTTON */}
      <div
      className="flex flex-col justify-center items-center"
      >
        <h1 className={`${style.title} text-center text-9xl font-extrabold`}>
          Digital <br /> Creations
        </h1>
        <a className={`${style.linkButton} mt-[50px] text-xl font-normal rounded-[30px] px-[10px] py-[10px] text-[#ffffff]`}
         href="#">
          See More
        </a>
      </div>
      {/* WORK BARS */}
      <div></div>
    </div>
  );
};
