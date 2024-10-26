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
          <a className={style.link} href="">Skills</a>
          <a className={style.link} href="">Hobbies</a>
          <a className={style.link} href="">Links</a>
        </Nav>
    </Navbar>
  );
};
