import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

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
        title2: "Front End Developer",
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
        authorMainBar: {
          title: "Junior Front-End Developer <br /> from Slovakia.",
          desc: "I’m a junior front-end developer who enjoys building intuitive and visually clear interfaces. I focus on transforming design concepts and features into efficient, maintainable code using modern web technologies. What I enjoy working with: React for its structured approach to building user interfaces and the flexibility that comes with hooks. It helps keep code clean and modular. I typically build projects using Vite — it's fast, reliable, and makes the overall development process much smoother and more efficient.",
        },
      },
      skills: {
        title: "Tools I Love <br /> To Work With",
      },
      work: {
        title: "Digital <br /> Creations",
        linkButton: "See More",
        workBars: {
          moneySaverApp: {
            title: "Money Saver App",
            desc: "Money Saver App is a modern tool designed to support personal finance management and effective money-saving habits.Set your budget, categorize your expenses, and track exactly where your money goes — all in a sleek, space-themed environment.",
          },
          goProShoppingPage: {
            title: "Action Camera Store",
            desc: "A project with a darker color palette, focused on a more serious visual design. It features a shopping cart with add/remove functionality, and the cart contents are saved in LocalStorage for a seamless user experience.",
          },
          residentEvil4: {
            title: "Resident Evil 4 Wiki",
            desc: "A vibrant, visually-driven project focused primarily on design and animations. The application presents the story and engaging information about the game Resident Evil 4. From a functional perspective, it also includes a short trivia quiz.",
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
        authorMainBar: {
          title: "Junior front-end developer <br /> zo Slovenska.",
          desc: "Som junior front-end developer, ktorý rád vytvára intuitívne a vizuálne prehľadné rozhrania. Zameriavam sa na premenu dizajnových konceptov a funkcií na efektívny, udržiavateľný kód pomocou moderných webových technológií. Najradšej pracujem s: Reactom pre jeho štruktúrovaný prístup k tvorbe používateľských rozhraní a flexibilitu, ktorú poskytujú hooky. Pomáha udržiavať kód čistý a modulárny. Projekty zvyčajne staviam pomocou Vite — je rýchly, spoľahlivý a celý vývojový proces vďaka nemu prebieha oveľa plynulejšie a efektívnejšie.",
        },
      },
      skills: {
        title: "Nástroje, s ktorými <br /> milujem pracovať",
      },
      work: {
        title: "Digitálne <br /> výtvory",
        linkButton: "Zobraziť viac",
        workBars: {
          goProShoppingPage: {
            title: "Action Camera Store",
            desc: "Projekt s tmavšou farebnou paletou, zameraný na vážnejší vizuálny dizajn. Obsahuje nákupný košík s funkciou pridávania/odstraňovania položiek a obsah košíka sa ukladá do LocalStorage pre plynulý používateľský zážitok.",
          },
          oneySaverApp: {
            title: "(Aktuálne pracujem na:): Money Saver App",
            desc: "Táto aplikácia umožňuje používateľom šetriť peniaze zábavnou formou v vesmírnom prostredí a zároveň mať lepší prehľad o svojich financiách. Zameriava sa na presné výpočty, rozdelenie výdavkov do kategórií a prehľadnosť v číslach a percentách.",
          },
          residentEvil4: {
            title: "Resident Evil 4 Wiki",
            desc: "Vibrantný, vizuálne orientovaný projekt zameraný predovšetkým na dizajn a animácie. Aplikácia prezentuje príbeh a zaujímavé informácie o hre Resident Evil 4. Z funkčného hľadiska obsahuje aj krátky kvíz.",
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
