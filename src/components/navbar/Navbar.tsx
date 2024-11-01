import { Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import style from "./navbar.module.scss";
import { useScreenWidth } from "../../hooks/useScreenWidth";

export const NavBar = () => {
  const screenWidth = useScreenWidth();

  return (
    <Navbar className="absolute top-0 left-0 w-full mt-[30px] flex justify-center items-center">
      {screenWidth > 640 ? (
        <Nav className="lg:text-xl text-lg 2xl:gap-24 lg:gap-20 gap-16 max-w-[1300px] flex justify-center font-semibold text-secondary">
          <a className={style.link} href="">
            About
          </a>
          <a className={style.link} href="">
            Tools
          </a>
          <a className={style.link} href="">
            Work
          </a>
          <a
            className={`text-[#161616] bg-[#ffffffe5] flex justify-center items-center lg:w-[90px] w-[80px] h-[34px] rounded-xl -mt-[2px]`}
            href=""
          >
            Contact
          </a>
        </Nav>
      ) : (
        ""
      )}
    </Navbar>
  );
};

// ! tu treba dorobit navbar ak je sirka stranky pod 640px
