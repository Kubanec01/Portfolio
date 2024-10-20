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
    desc: "lorem ipsum bla bla",
    image: reImg,
  },
//   {
//     id: "goPro-shop-work",
//     title: "GoPro Shopping Page",
//     desc: "lorem ipsum bla bla",
//     image: goProImg,
//   },
];
