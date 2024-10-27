import { Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import style from "./navbar.module.scss"

export const NavBar = () => {
  return (
    <Navbar className="absolute top-0 left-0 w-full mt-[30px] flex justify-center items-center">
        <Nav className="text-xl gap-24 max-w-[1300px] flex justify-center font-semibold text-secondary">
          <a
          className={style.link}
          href="">About</a>
          <a className={style.link} href="">Tools</a>
          <a className={style.link} href="">Work</a>
          <a
          className={`text-[#161616] bg-[#ffffffe5] flex justify-center items-center w-[90px] h-[34px] rounded-xl -mt-[2px]`} href="">Contact</a>
        </Nav>
    </Navbar>
  );
};
