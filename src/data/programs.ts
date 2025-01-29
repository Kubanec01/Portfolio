import tsLogo from "../assets/Type-Script-logo-img.png"
import reactLogo from "../assets/react-logo-img.png"
import figmaLogo from "../assets/figma-logo-img.png"
import photoshopLogo from "../assets/Photoshop-logo-img.png"
import procreateLogo from "../assets/Procreate-logo-img.jpg"
import javaScriptLogo from "../assets/JavaScript-logo-img.png"


type Program = {
  id: string;
  name: string;
  image: string;
  className: string;
};

export const programs: Program[] = [
  {
    id: "typeScript",
    name: "TypeScript",
    image: tsLogo,
    className: "typeScript",
  },
  {
    id: "javascript",
    name: "JavaScript",
    image: javaScriptLogo,
    className: "javascript",
  },
  {
    id: "react",
    name: "React",
    image: reactLogo,
    className: "react",
  },
  {
    id: "figma",
    name: "Figma",
    image: figmaLogo,
    className: "figma",
  },
];