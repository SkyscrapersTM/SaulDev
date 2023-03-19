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
import cv from "./assets/CV-2023.pdf";
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
  const [darkMode, setDarkMode] = useState(true);
  const [isHovering, setIsHovering] = useState(false);

  const handleClick = () => {
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
                  href={cv}
                  target="_blank"
                  rel="noreferrer"
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div
              onMouseOver={() => setIsHovering(true)}
              onMouseOut={() => setIsHovering(false)}
              className="relative"
            >
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src={web1}
                  alt="Netflix Clone App"
                />
              </div>
              <div
                className={
                  isHovering ? "absolute inset-0 bg-black opacity-50" : ""
                }
              ></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className={`${isHovering ? "flex flex-col" : "hidden"}`}>
                  <a
                    href="https://netflix-clone-b4e95.web.app/"
                    target="_blank"
                    class="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2"
                  >
                    <svg
                      class="w-4 h-4 mr-2 -ml-1"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fab"
                      data-icon="google"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 488 512"
                    >
                      <path
                        fill="currentColor"
                        d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                      ></path>
                    </svg>
                    View App
                  </a>
                  <a
                    target="_blank"
                    href="https://github.com/SkyscrapersTM/netflix-clone"
                    class="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2"
                  >
                    <svg
                      class="w-4 h-4 mr-2 -ml-1"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fab"
                      data-icon="github"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 496 512"
                    >
                      <path
                        fill="currentColor"
                        d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                      ></path>
                    </svg>
                    View Repository
                  </a>
                </div>
              </div>
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg"
                alt=""
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
