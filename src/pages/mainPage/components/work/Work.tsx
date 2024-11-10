import { Trans, useTranslation } from "react-i18next";
import { Projects } from "./project/Projects";
import style from "./work.module.scss";

export const Work = () => {

  const {t} = useTranslation()

  return (
    <div className="w-full">
      <div className="max-w-[1400px] mx-auto lg:mt-[100px] mt-[150px] mb-[160px] px-2">
        {/* WORK TITLE/LINK BUTTON */}
        <div
          style={{
            scrollMargin: "180px",
          }}
          id="work-title"
          className="flex flex-col justify-center items-center"
        >
          <h1
            className={`${style.title} text-center lg:text-9xl sm:text-8xl text-6xl 2xl:font-extrabold font-bold`}
          >
            <Trans
            i18nKey={'work.title'}
            />
          </h1>
          <a
            className={`${style.linkButton} mt-[50px] lg:text-lg sm:text-base text-sm font-medium rounded-[30px] sm:px-[10px] px-[9px] sm:py-[10px] py-[8px] text-[#ffffff]`}
            href="#"
          >
            {t('work.linkButton')}
          </a>
        </div>
        {/* WORK BARS */}
        <div className="mt-[80px] flex flex-col items-center md:gap-32 gap-16 justify-center">
          <Projects />
        </div>
      </div>
    </div>
  );
};
