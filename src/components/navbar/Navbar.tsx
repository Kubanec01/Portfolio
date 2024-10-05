import { Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import style from "./navbar.module.scss"

export const NavBar = () => {
  return (
    <Navbar className="w-full h-[60px] bg-primary flex justify-center items-center">
        <Nav className="text-xl gap-40 max-w-[1300px] flex justify-center">
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
