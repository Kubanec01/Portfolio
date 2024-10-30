import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { GrFacebookOption } from "react-icons/gr";
import style from "./footer.module.scss";
import Spline from "@splinetool/react-spline";

export const Footer = () => {
  // STYLES
  const link =
    "mb-4 xl:w-[70px] lg:w-[64px] md:w-[54px] w-[48px] xl:text-4xl lg:text-3xl text-2xl aspect-square rounded-xl md:border-[3px] border-[2px] border-secondary500 flex justify-center items-center";

  return (
    <div className={`${style.footer} w-full flex justify-center px-2 py-10 overflow-hidden`}>
      <div className="max-w-[1000px] lg:mt-[60px] mt-[30px]">
        {/* links and robot animation */}
        <div className="w-full flex justify-between items-center lg:h-[600px] md:h-[400px] h-[340px]">
          {/* links */}
          <div className="lg:w-[60%] h-full">
            <h1 className="text-secondary500 lg:text-4xl md:text-4xl sm:text-3xl text-2xl lg:text-left text-center font-medium text-nowrap xl:ml-0 lg:ml-10">
              Thank you for visiting! <br />
              Let’s create amazing things together!
            </h1>
            <ul className="text-4xl text-secondary500 xl:mt-10 lg:mt-7 sm:mt-12 mt-10 lg:block flex justify-center md:gap-7 gap-5 xl:ml-0 lg:ml-10">
              <li className={`${link} ${style.link}`}>
                <a className="" href="#">
                  <FaLinkedinIn />
                </a>
              </li>
              <li className={`${link} ${style.link}`}>
                <a href="https://github.com/Kubanec01" target="_blank">
                  <FaGithub />
                </a>
              </li>
              <li className={`${link} ${style.link}`}>
                <a href="tel:+421903871518">
                  <FaWhatsapp />
                </a>
              </li>
              <li className={`${link} ${style.link}`}>
                <a href="mailto:jakub.z.roman@gmail.com" target="_blank">
                  <MdOutlineEmail   />
                </a>
              </li>
              <li className={`${link} ${style.link}`}>
                <a href="https://www.facebook.com/jakub.roman.351" target="_blank">
                  <GrFacebookOption />
                </a>
              </li>
            </ul>
            <ul className="sm:text-xl text-lg text-secondary500 mt-6 xl:ml-0 lg:ml-10 lg:text-left text-center">
              <li>jakub.z.roman@gmail.com</li>
              <li className="sm:text-lg text-base">+421 903 871 518</li>
            </ul>
          </div>
          {/* robot */}
          <div className="w-[40%] h-full lg:block hidden">
            <Spline
              className="w-full"
              scene="https://prod.spline.design/CZu2-tOKxLnfgn3q/scene.splinecode"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
