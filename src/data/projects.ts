import reImg from "../assets/macbook-re4-work-img (1).png";
import goProImg from "../assets/macbook-gopro-work-img.png";

type Project = {
  id: string;
  title: string;
  desc: string;
  image: string;
};

export const project: Project[] = [
  {
    id: "resident-evil-work",
    title: "Resident Evil 4 Wiki",
    desc: "A vibrant, visually-driven project focused primarily on design and animations. The application presents the story and engaging information about the game Resident Evil 4. From a functional perspective, it also includes a short trivia quiz.",
    image: reImg,
  },
  //   {
  //     id: "goPro-shop-work",
  //     title: "GoPro Shopping Page",
  //     desc: "lorem ipsum bla bla",
  //     image: goProImg,
  //   },
];
