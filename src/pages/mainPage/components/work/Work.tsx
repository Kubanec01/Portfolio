import { Trans, useTranslation } from "react-i18next";
import { Projects } from "./project/Projects";
import style from "./work.module.scss";

export const Work = () => {

  const {t} = useTranslation()

  return (
    <div className="w-full">
      <div className="max-w-[1400px] w-[96%] mx-auto lg:mt-[100px] md:mt-[100px] mt-[160px] mb-[160px] px-2">
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
            className={`${style.linkButton} md:mt-[50px] mt-[40px] lg:text-lg sm:text-base text-sm font-medium rounded-[30px] sm:px-[10px] px-[9px] sm:py-[10px] py-[8px] text-[#ffffff]`}
            href="https://github.com/Kubanec01" target="_blank"
          >
            {t('work.linkButton')}
          </a>
        </div>
        {/* WORK BARS */}
        <div className="md:mt-[80px] mt-[50px] flex flex-col items-center md:gap-32 gap-16 justify-center">
          <Projects />
        </div>
      </div>
    </div>
  );
};
