import { Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import style from "./navbar.module.scss";
import { useScrollPosition } from "../../hooks/useScrollPosition";

export const NavBar = () => {
  // STYLES
  const coloredBg = "bg-[#ffffff99] backdrop-blur-md";
  const transparentBg = "bg-transparent";
  const transparentBtn = "bg-transparent text-tertiary500";
  const coloredBtn = "bg-[#ffffffe5]";

  const isAtTopPosition = useScrollPosition();

  return (
    <Navbar className="fixed w-full mt-[18px] flex justify-center items-center z-[5000]">
      <Nav
        className={`${
          isAtTopPosition ? transparentBg : coloredBg
        } lg:text-xl md:text-lg lg:gap-20 md:gap-16 gap-12 flex justify-center items-center font-semibold text-secondary
        md:px-8 px-6 md:py-3 py-2 rounded-[30px] duration-300`}
      >
        <a className={style.link} href="#about-title">
          About
        </a>
        <a className={style.link} href="#tools-title">
          Tools
        </a>
        <a className={style.link} href="#work-title">
          Work
        </a>
        <a
          className={`${
            isAtTopPosition ? coloredBtn : transparentBtn
          } text-[#161616] flex justify-center items-center lg:w-[90px] md:w-[80px] w-[70px] h-[34px] rounded-xl -mt-[2px] duration-300`}
          href="mailto:jakub.z.roman@gmail.com"
        >
          Contact
        </a>
      </Nav>
    </Navbar>
  );
};
