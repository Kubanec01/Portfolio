import reImg from "../assets/macbook-re4-work-img (1).png";
import goProImg from "../assets/macbook-gopro-work-img.png";
import artGalleryImg from "../assets/macbook-art-gallery-festival-img.png";
import moneySaverImg from "../assets/money-saver-img..png";
import { useTranslation } from "react-i18next";

type Project = {
  id: string;
  title: string;
  desc: string;
  image: string;
  link: string;
};

export const AllProjects = () => {
  const { t } = useTranslation();

  const project: Project[] = [
    {
      id: "money-saver-app",
      title: t("work.workBars.moneySaverApp.title"),
      desc: t("work.workBars.moneySaverApp.desc"),
      image: moneySaverImg,
      link: "https://kubanec01.github.io/Money_Saver_App/",
    },
    {
      id: "goPro-shop-work",
      title: t("work.workBars.goProShoppingPage.title"),
      desc: t("work.workBars.goProShoppingPage.desc"),
      image: goProImg,
      link: "https://kubanec01.github.io/ActionCam-Store/",
    },
    {
      id: "resident-evil-work",
      title: t("work.workBars.residentEvil4.title"),
      desc: t("work.workBars.residentEvil4.desc"),
      image: reImg,
      link: "https://kubanec01.github.io/ResidentEvil4Wiki/",
    },
    {
      id: "art-gallery-festival",
      title: t("work.workBars.artGalleryFestival.title"),
      desc: t("work.workBars.artGalleryFestival.desc"),
      image: artGalleryImg,
      link: "https://kubanec01.github.io/Art_Gallery_Festival/",
    },
  ];

  return project;
};
