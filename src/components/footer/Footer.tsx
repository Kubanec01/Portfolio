import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { GrFacebookOption } from "react-icons/gr";
import style from "./footer.module.scss";
import Spline from "@splinetool/react-spline";

export const Footer = () => {
  // STYLES
  const link =
    "mb-4 w-[70px] aspect-square rounded-xl border-[3px] border-secondary500 flex justify-center items-center";

  return (
    <div className={`${style.footer} w-full flex justify-center px-2 py-10 overflow-hidden`}>
      <div className="w-[1000px] mt-[60px]">
        {/* links and robot animation */}
        <div className="w-full flex justify-between items-center h-[600px]">
          {/* links */}
          <div className="w-[60%] h-full">
            <h1 className="text-secondary500 text-4xl font-medium text-nowrap">
              Thank you for visiting! <br />
              Let’s create amazing things together!
            </h1>
            <ul className="text-4xl text-secondary500 mt-10">
              <li className={`${link} ${style.link}`}>
                <a className="" href="#">
                  <FaLinkedinIn />
                </a>
              </li>
              <li className={`${link} ${style.link}`}>
                <a href="#">
                  <FaGithub />
                </a>
              </li>
              <li className={`${link} ${style.link}`}>
                <a href="#">
                  <FaWhatsapp />
                </a>
              </li>
              <li className={`${link} ${style.link}`}>
                <a href="#">
                  <FaInstagram />
                </a>
              </li>
              <li className={`${link} ${style.link}`}>
                <a href="#">
                  <GrFacebookOption />
                </a>
              </li>
            </ul>
            <ul className="text-xl text-secondary500 mt-6">
              <li>jakub.z.roman@gmail.com</li>
              <li className="text-lg">+421 903 871 518</li>
            </ul>
          </div>
          {/* robot */}
          <div className="w-[40%] h-full">
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
