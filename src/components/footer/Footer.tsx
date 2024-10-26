import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { GrFacebookOption } from "react-icons/gr";
import style from "./footer.module.scss"

export const Footer = () => {
  // STYLES
  const link =
    "mb-4 w-[70px] aspect-square rounded-xl border-[3px] border-secondary500 flex justify-center items-center";

  return (
    <div className="w-full h-[800px] flex justify-center px-2 py-10 bg-tertiary">
      <div className="w-[1200px] mt-[60px]">
        {/* links and robot animation */}
        <div className="w-full h-full">
          {/* links */}
          <div className="w-[50%] h-full">
            <h1 className="text-secondary500 text-4xl font-medium">
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
          </div>
          {/* robot */}
          <div>
            
          </div>
        </div>
        {/* phone and mail */}
        <div></div>
      </div>
    </div>
  );
};
