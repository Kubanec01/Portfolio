import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { desc } from "framer-motion/client";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      navbar: {
        about: "About",
        tools: "Tools",
        work: "Work",
        contact: "Contact",
      },
      footer: {
        title:
          "Thank you for visiting! <br/> Let's create amazing things together!",
      },
      hero: {
        title: "Hi, I'm Jacob.",
        title2: "Creative Web Designer",
      },
      about: {
        title: "About Me",
        devBar: {
          title: "Developer",
          desc: "I have a passion for creating clean, responsive websites with unique designs and engaging functionality. I transform ideas into smooth digital experiences, turning websites into works of art.",
        },
        desBar: {
          title: "UX/UI Designer",
          desc: "I’m passionate about creating user-friendly designs that focus on intuitive navigation and understanding user needs, using every project to enhance meaningful digital experiences.",
        },
        authorBar: {
          title: "Junior Front-End Developer <br/> from Slovakia.",
          desc: "With a deep passion for web design and UX/UI, I focus on modern technologies and frameworks. I am currently enhancing my skills in React and gaining valuable experience in front-end development. I continuously seek out new frameworks and design styles that can elevate the user experience and make my projects stand out. In my free time, I explore emerging technologies and keep up with the latest trends in design. You can check out my projects below or directly on GitHub.",
        },
      },
      skills: {
        title: "Tools I Love <br /> To Work With",
      },
      work: {
        title: "Digital <br /> Creations",
        linkButton: "See More",
        workBars: {
          residentEvil4: {
            title: "Resident Evil 4 Wiki",
            desc: "A vibrant, visually-driven project focused primarily on design and animations. The application presents the story and engaging information about the game Resident Evil 4. From a functional perspective, it also includes a short trivia quiz.",
          },
          goProShoppingPage: {
            title: "Action Camera Store",
            desc: "A project with a darker color palette, focused on a more serious visual design. It features a shopping cart with add/remove functionality, and the cart contents are saved in LocalStorage for a seamless user experience.",
          },
          artGalleryFestival: {
            title: "Art Gallery Festival",
            desc: "The Art Gallery Festival is a project focused on visual design and the blending of genres, with an emphasis on flexibility. The design combines modern aesthetics with functionality, prioritizing user experience and seamless interaction.",
          },
        },
      },
    },
  },
  sk: {
    translation: {
      navbar: {
        about: "O mne",
        tools: "Nástroje",
        work: "Projekty",
        contact: "Kontakt",
      },
      footer: {
        title: "Ďakujem za návštevu! <br/> Poďme spolu tvoriť úžasné veci!",
      },
      hero: {
        title: "Ahoj, ja som Jakub.",
        title2: "Kreatívny Webový Dizajnér.",
      },
      about: {
        title: "O Mne",
        devBar: {
          title: "Developer",
          desc: "Mám vášeň pre vytváranie čistých, responzívnych webových stránok s jedinečnými dizajnmi a zaujímavou funkčnosťou. Premením nápady na plynulé digitálne zážitky, pričom webové stránky mením na dielo umenia.",
        },
        desBar: {
          title: "UX/UI Designer",
          desc: "Som nadšený pre vytváranie užívateľsky prívetivých dizajnov, ktoré sa zameriavajú na intuitívne navigovanie a pochopenie potrieb užívateľov, pričom každým projektom sa snažím zlepšiť zmysluplné digitálne zážitky.",
        },
        authorBar: {
          title: "Junior Front-End Developer <br/> zo Slovenska.",
          desc: "S hlbokým záujmom o webový dizajn a UX/UI sa zameriavam na moderné technológie a frameworky. Aktuálne posilňujem svoje zručnosti v Reacte a získavam cenné skúsenosti vo front-end vývoji. Neustále vyhľadávam nové frameworky a dizajnové štýly, ktoré môžu zvýšiť používateľskú skúsenosť a poskytnúť mojim projektom jedinečnosť. Vo voľnom čase objavujem nové technológie a sledujem najnovšie trendy v dizajne. Moje projekty si môžete pozrieť nižšie alebo priamo na GitHub.",
        },
      },
      skills: {
        title: "Nástroje, s ktorými <br /> milujem pracovať",
      },
      work: {
        title: "Digitálne <br /> výtvory",
        linkButton: "Zobraziť viac",
        workBars: {
          residentEvil4: {
            title: "Resident Evil 4 Wiki",
            desc: "Vibrantný, vizuálne orientovaný projekt zameraný predovšetkým na dizajn a animácie. Aplikácia prezentuje príbeh a zaujímavé informácie o hre Resident Evil 4. Z funkčného hľadiska obsahuje aj krátky kvíz.",
          },
          goProShoppingPage: {
            title: "Action Camera Store",
            desc: "Projekt s tmavšou farebnou paletou, zameraný na vážnejší vizuálny dizajn. Obsahuje nákupný košík s funkciou pridávania/odstraňovania položiek a obsah košíka sa ukladá do LocalStorage pre plynulý používateľský zážitok.",
          },
          artGalleryFestival: {
            title: "Art Gallery Festival",
            desc: "Art Gallery Festival je projekt zameraný na vizuálny dizajn a prepájanie žánrov s dôrazom na flexibilitu. Kombinuje modernú estetiku s funkčnosťou a kladie dôraz na užívateľský zážitok a plynulosť.",
          },
        },
      },
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    fallbackLng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },

    detection: {
      order: ["navigator"],
      caches: ["localStorage"],
    },
  });

export default i18n;
