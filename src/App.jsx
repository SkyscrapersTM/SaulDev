import { useState } from "react";
// Start Icons
import {
  AiOutlineCoffee,
  AiFillLinkedin,
  AiFillGithub,
  AiFillTwitterCircle,
} from "react-icons/ai";
import {
  BsFillMoonStarsFill,
  BsSun,
  BsFillBootstrapFill,
} from "react-icons/bs";
import { DiPhotoshop, DiReact } from "react-icons/di";
import {
  SiTypescript,
  SiJavascript,
  SiMaterialui,
  SiDjango,
  SiFirebase,
} from "react-icons/si";
import { FaPython, FaWordpress } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";
import { GrMysql } from "react-icons/gr";
import { TbBrandTailwind } from "react-icons/tb";
// End Icons
import "./App.css";
import consulting from "./assets/consulting.png";
import code from "./assets/code.png";
import design from "./assets/design.png";
import saulImageAnimated from "./assets/dev-saul-animated.png";
import web1 from "./assets/web1.png";
import web2 from "./assets/web2.png";
import web3 from "./assets/web3.png";
import web4 from "./assets/web4.png";
import web5 from "./assets/web5.png";
import web6 from "./assets/web6.png";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const handleClick = () => {
    console.log(true);
    setDarkMode(!darkMode);
  };
  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-800">
        <section className="min-h-screen mb-5">
          <nav className="py-10 pb-6 flex justify-between">
            <h1 className="text-xl font-burtons dark:text-white">SaulDev</h1>
            <ul className="flex items-center">
              <li onClick={handleClick}>
                {darkMode ? (
                  <BsSun className="cursor-pointer text-2xl text-yellow-300" />
                ) : (
                  <BsFillMoonStarsFill className="cursor-pointer text-2xl text-gray-800" />
                )}
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white text-sm px-4 py-2 rounded-md ml-8 lg:text-base"
                  href="#"
                >
                  Curriculum vitae
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-semibold md:text-6xl dark:text-teal-300">
              SaulDev
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-white">
              Full Stack Developer <br />
              <span className="flex justify-center items-center gap-1 text-base text-gray-500 md:text-lg dark:text-gray-200">
                more coffe, more code
                <AiOutlineCoffee className="text-yellow-700 dark:text-yellow-600" />
              </span>
            </h3>
            <p className="text-base py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-white">
              Hi, my name is Saul and I&apos;m freelancer providing service for
              programming and design content needs. Join me down bellow and
              let&apos;s get cracking!
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-white">
            <AiFillTwitterCircle />
            <AiFillLinkedin />
            <AiFillGithub />
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-full h-auto mt-20 md:h-96 md:w-96 md:mt-6 md:overflow-hidden dark:from-teal-300">
            <img
              src={saulImageAnimated}
              className="mx-auto"
              alt="Animated Saul Dev"
            />
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 text-gray-800 text-center dark:text-white">
              Services I offer
            </h3>
            <p className="text-base py-2 leading-8 text-gray-800 text-center lg:text-lg lg:w-3/5 lg:mx-auto dark:text-white">
              Since the beginning of my journey as a freelance full stack
              developer, I&apos;ve done remote work for
              <span className="text-teal-500 dark:text-teal-300">
                {" "}
                agencies{" "}
              </span>
              consulted for{" "}
              <span className="text-teal-500 dark:text-teal-300">
                startups{" "}
              </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
          </div>
          <div className="text-base lg:text-lg lg:flex lg:gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 lg:basis-1/3 dark:bg-white">
              <img
                src={code}
                className="mx-auto"
                width={100}
                height={100}
                alt="3d design icon"
              />
              <h3 className="font-semibold pt-8 pb-2 lg:text-2xl">
                Dynamic Interaction
              </h3>
              <p className="py-2">
                Frontend service is the friendly and attractive face your
                application needs to conquer your users.
              </p>
              <h4 className="py-4 text-teal-600 font-semibold">Tools I use:</h4>
              <div className="flex justify-center items-center gap-1 tex">
                <p className="text-gray-800 py-1">React</p>
                <DiReact className="text-sky-500" />
              </div>
              <div className="flex justify-center items-center gap-1">
                <p className="text-gray-800 py-1">Typescript</p>
                <SiTypescript className="text-blue-600" />
              </div>
              <div className="flex justify-center items-center gap-1">
                <p className="text-gray-800 py-1">Javascript</p>
                <SiJavascript className="text-amber-300" />
              </div>
              <div className="flex justify-center items-center gap-1">
                <p className="text-gray-800 py-1">Tailwind</p>
                <TbBrandTailwind className="text-sky-500" />
              </div>
              <div className="flex justify-center items-center gap-1">
                <p className="text-gray-800 py-1">Material UI</p>
                <SiMaterialui className="text-sky-700" />
              </div>
              <div className="flex justify-center items-center gap-1">
                <p className="text-gray-800 py-1">Bootstrap</p>
                <BsFillBootstrapFill className="text-purple-600" />
              </div>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 lg:basis-1/3 dark:bg-white">
              <img
                src={consulting}
                className="mx-auto"
                width={100}
                height={100}
                alt="3d design icon"
              />
              <h3 className="font-semibold pt-8 pb-2 lg:text-2xl">
                Server Programming
              </h3>
              <p className="py-2">
                The server side, is the part of a web or mobile application that
                is responsible for processing and storing data, as well as
                carrying out the logic and functions behind the user interface.
              </p>
              <h4 className="py-4 text-teal-600 font-semibold">Tools I use:</h4>
              <div className="flex justify-center items-center gap-1">
                <p className="text-gray-800 py-1">Python</p>
                <FaPython className="text-amber-400" />
              </div>
              <div className="flex justify-center items-center gap-1">
                <p className="text-gray-800 py-1">Django</p>
                <SiDjango className="text-green-500" />
              </div>
              <div className="flex justify-center items-center gap-1">
                <p className="text-gray-800 py-1">Wordpress</p>
                <FaWordpress className="text-sky-500" />
              </div>
              <div className="flex justify-center items-center gap-1">
                <p className="text-gray-800 py-1">Firebase</p>
                <SiFirebase className="text-yellow-300" />
              </div>
              <div className="flex justify-center items-center gap-1">
                <p className="text-gray-800 py-1">Mysql</p>
                <GrMysql className="text-sky-700" />
              </div>
              <div className="flex justify-center items-center gap-1">
                <p className="text-gray-800 py-1">GitHub</p>
                <AiFillGithub className="text-black" />
              </div>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 lg:basis-1/3 dark:bg-white">
              <img
                src={design}
                className="mx-auto"
                width={100}
                height={100}
                alt="3d design icon"
              />
              <h3 className="text-lg font-semibold pt-8 pb-2 lg:text-2xl">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-teal-600 font-semibold">
                Designs tools I use:
              </h4>
              <div className="flex justify-center items-center gap-1">
                <p className="text-gray-800 py-1">Photoshop</p>
                <DiPhotoshop className="text-sky-500" />
              </div>
              <div className="flex justify-center items-center gap-1">
                <p className="text-gray-800 py-1">Figma</p>
                <FiFigma />
              </div>
            </div>
          </div>
        </section>
        <section className="py-10">
          <h3 className="text-center text-3xl py-1 dark:text-white">
            Portfolio:
          </h3>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <img
                className="rounded-lg w-full h-full object-fill"
                src={web1}
                alt="image of the web project"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <img
                className="rounded-lg w-full h-full object-fill"
                src={web2}
                alt="image of the web project"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <img
                className="rounded-lg w-full h-full object-fill"
                src={web3}
                alt="image of the web project"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <img
                className="rounded-lg w-full h-full object-fill"
                src={web4}
                alt="image of the web project"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <img
                className="rounded-lg w-full h-full object-fill"
                src={web5}
                alt="image of the web project"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <img
                className="rounded-lg w-full h-full object-fill"
                src={web6}
                alt="image of the web project"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
