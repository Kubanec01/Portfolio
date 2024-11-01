import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import style from "./scrollButton.module.scss";
import { useScrollPosition } from "../../hooks/useScrollPosition";

export const ScrollButton = () => {
  // STYLES
  const visible = "translate-y-[0px]";
  const invisible = "translate-y-[100px]";

  const isScreenOnTop = useScrollPosition();

  return (
    <div>
      <a
        className={`${isScreenOnTop ? invisible : visible} ${
          style.button
        } fixed cursor-pointer duration-200 text-3xl right-[20px] bottom-[20px] rounded-[100%] xl:flex hidden justify-center items-center aspect-square w-[40px]`}
        href="#hero-section"
      >
        <MdOutlineKeyboardArrowUp />
      </a>
    </div>
  );
};
