import reImg from "../assets/macbook-re4-work-img (1).png";
import goProImg from "../assets/macbook-gopro-work-img.png";
import { useTranslation } from "react-i18next";

type Project = {
  id: string;
  title: string;
  desc: string;
  image: string;
};

export const AllProjects = () => {

  const {t} = useTranslation()

  const project: Project[] = [
    {
      id: "resident-evil-work",
      title: t('work.workBars.residentEvil4.title'),
      desc: t('work.workBars.residentEvil4.desc'),
      image: reImg,
    },
    {
      id: "goPro-shop-work",
      title: t('work.workBars.goProShoppingPage.title'),
      desc: t('work.workBars.goProShoppingPage.desc'),
      image: goProImg,
    },
  ];

  return project
}

