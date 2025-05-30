import { Trans, useTranslation } from "react-i18next";
import image1 from "../../../../../../assets/author-img.png";
import image2 from "../../../../../../assets/author2-img.jpg"
import image3 from "../../../../../../assets/author3-img.png";
import { useScreenWidth } from "../../../../../../hooks/useScreenWidth";
import style from "./authorInfoBar.module.scss";

export const AuthorInfoBar = () => {
  const screenWidth = useScreenWidth();

  const {t} = useTranslation()

  return (
    <div className="max-w-[1300px] mx-auto px-2">
      {screenWidth > 930 ? (
        <div
          className={`${style.bar3} w-full flex bg-[#1d1d1d] rounded-3xl my-[40px]`}
        >
          {/* IMAGE */}
          <div className="w-[45%] flex justify-center items-end">
            {screenWidth >= 1024 ? (
              <>
                <img
                  className="object-cover aspect-square xl:w-full w-[95%]"
                  src={image1}
                  alt=""
                />
              </>
            ) : (
              <>
                <img
                  className="object-cover h-full aspect-square w-[95%]"
                  src={image3}
                  alt=""
                />
              </>
            )}
          </div>
          {/* TEXT */}
          <div className="w-[55%] py-10">
            <h1 className="xl:text-4xl text-3xl xl:mt-[60px] mt-[40px] font-bold text-[#ffffffda]">
              <Trans 
              i18nKey={'about.authorMainBar.title'}
              />
            </h1>
            <p className="xl:text-2xl text-xl xl:w-[85%] lg:w-[90%] w-[98%] mt-[10px] text-[#ffffff83]">
              {t('about.authorMainBar.desc')}
            </p>
          </div>
        </div>
      ) : (
        <div className="w-full mt-[42px]">
          {/* IMAGE */}
          <div
          className="mx-auto w-[90%] md:h-[400px] h-[300px]"
          >
            <img
            className="object-cover w-full h-full rounded-2xl"
            src={image2} alt="author-image" />
          </div>
          {/* TEXT */}
          <div
          className="mx-auto md:px-10 px-4"
          >
            <h1 className="w-[90%] md:text-4xl text-3xl sm:mt-[40px] mt-[20px] md:font-medium text-[#ffffffda]">
              <Trans
              i18nKey={'about.authorMainBar.title'}
               />
            </h1>
            <p className="text-lg md:font-normal font-light sm:w-[86%] w-[96%] sm:mt-[30px] mt-[14px] text-[#ffffff83]">
              {t('about.authorMainBar.desc')}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
