import { AllProjects } from "../../../../../data/AllProjects";
import { FiArrowUpRight } from "react-icons/fi";
import style from "./project.module.scss"
import { useHoverStatus } from "../../../../../hooks/useHoverStatus";
import { useTranslation } from "react-i18next";

export const Projects = () => {

  const {isActive, mouseEnter, mouseLeave} = useHoverStatus()


  const activityStatus = isActive ? style.active : style.inactive;

  const project = AllProjects()

  const {t} = useTranslation()

  return (
    <>
      {project.map((p) => {
        return (
          <div
          onMouseEnter={mouseEnter}
          onMouseLeave={mouseLeave}
           key={p.id}
            className={`${style.barBody} flex justify-center flex-col lg:w-[80%] w-[96%]`}>
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
              <div className="md:mb-[20px] mb-[40px] ">
                <h1 className="sm:text-2xl text-xl font-semibold md:text-left text-center text-customWhite mt-[20px] md:ml-[20px]">
                  {p.title}
                </h1>
                <p className="sm:text-lg sm:font-medium xl:w-[70%] md:w-[85%] md:px-0 sm:px-9 px-2 md:text-left text-center text-primary200 sm:mt-[2px] mt-[6px] md:ml-[20px]">
                  {p.desc}
                </p>
              </div>
              <div className="md:flex hidden justify-center items-end">
                <a className={`${activityStatus} text-lg flex items-center text-nowrap px-3 py-1 rounded-2xl mb-[20px] mr-4`} href="#">
                  {t('work.linkButton')}
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
