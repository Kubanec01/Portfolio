import style from "./about.module.scss";
import { Skills } from "../skills/Skills";
import { Work } from "../work/Work";
import { DevInfoBar } from "./infoBars/devInfoBar/DevInfoBar";
import { DesInfoBar } from "./infoBars/desInfoBar.tsx/DesInfoBar";
import { AuthorInfoBar } from "./infoBars/authorInfoBar/AuthorInfoBar";
import { useTranslation } from "react-i18next";

export const About = () => {

  const {t} = useTranslation()

  return (
    <div className="flex flex-col justify-center items-center bg-primary500">
      {/* DESCRIPTION TEXT */}
      <div
        id="about-title"
        style={{
          scrollMargin: "80px",
        }}
        className="w-[1300px] my-[100px]"
      >
        <h1 className="xl:text-6xl md:text-5xl text-4xl font-medium text-center text-primary300 md:mt-[120px] -mb-4">
        {t('about.title')}
        </h1>
      </div>
      {/* BARS BODY */}
      <div className={style.barsSection}>
        {/* DEFINITION BARS */}
        <div className="max-w-[1300px] mx-auto lg:flex justify-between gap-10 px-2">
          <DevInfoBar />
          <DesInfoBar />
        </div>
        <AuthorInfoBar />
      </div>
      <Skills />
      <Work />
    </div>
  );
};
