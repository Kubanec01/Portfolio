import { project } from "../../../../../data/projects";
import { FiArrowUpRight } from "react-icons/fi";
import style from "./project.module.scss"
import { useHoverStatus } from "../../../../../hooks/useHoverStatus";

export const Projects = () => {

  const {isActive, mouseEnter, mouseLeave} = useHoverStatus()


  const activityStatus = isActive ? style.active : style.inactive;

  return (
    <>
      {project.map((p) => {
        return (
          <div
          onMouseEnter={mouseEnter}
          onMouseLeave={mouseLeave}
           key={p.id}
            className={`${style.barBody} flex justify-center flex-col w-[80%]`}>
            {/* IMAGE */}
            <div
              style={{
                borderRadius: "20px 20px 0 0",
              }}
              className="flex justify-center bg-[#c6c6c6]"
            >
              <img
                className="object-cover"
                src={p.image}
                alt={`${p.title} image`}
              />
            </div>
            {/* TEXT */}
            <div
              style={{
                borderRadius: " 0 0 20px 20px",
              }}
              className="flex justify-between bg-[#292929]"
            >
              <div className="mb-[20px]">
                <h1 className="text-2xl font-semibold text-customWhite mt-[20px] ml-[20px]">
                  {p.title}
                </h1>
                <p className="text-lg font-medium w-[70%] text-primary200 mt-[2px] ml-[20px]">
                  {p.desc}
                </p>
              </div>
              <div className="flex justify-center items-end">
                <a className={`${activityStatus} text-lg flex items-center text-nowrap px-3 py-1 rounded-2xl mb-[20px] mr-4`} href="#">
                  See More
                  <FiArrowUpRight  className="text-xl" />
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
