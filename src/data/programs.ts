import tsLogo from "../assets/Type-Script-logo-img.png"
import reactLogo from "../assets/react-logo-img.png"
import figmaLogo from "../assets/figma-logo-img.png"
import javaScriptLogo from "../assets/JavaScript-logo-img.png"
import nextJsLogo from "../assets/nextJs-logo-img.jpeg"


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
    id: "next-js",
    name: "Next.js",
    image: nextJsLogo,
    className: "react",
  },
  {
    id: "figma",
    name: "Figma",
    image: figmaLogo,
    className: "figma",
  },
];