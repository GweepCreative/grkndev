"use client";
import Image from "next/image";
import { useEffect } from "react";
import Gradient from "./components/gradient";
import EduEx from "./components/eduex";
import Technologies from "./components/tech";
import Project from "./components/project";
import Git from "./components/git";
import Typical from "react-typical";
import Link from "next/link";
import Card from "./components/card";

export default function Home() {
  return (
    <>
      <div className="w-full">
        <Gradient />
        <main className="w-full h-screen flex items-center justify-center">
          <div className="">
            <div className="flex justify-center">
              <div className="w-64 h-72 -mt-1 -ml-1 blur-2xl opacity-5 gradient rounded-full absolute bg-white z-20"></div>
              <Image
                alt="profile"
                width={192}
                height={192}
                className="rounded-full w-48 h-48"
                src="https://pbs.twimg.com/profile_images/1671511978303430658/0fcxWFub_400x400.jpg"
              />
            </div>
            <div className="text-center  flex flex-col justify-center items-center ">
              <h1 className="text-center mt-8 font-semibold text-4xl ">
                Hi, I'm Gürkan 👋🏻
              </h1>
              <h4 className="text-gray-400 text-xl ">
                <Typical
                  steps={[
                    "Backend Developer",
                    4000,
                    "Editor",
                    4000,
                    "Designer",
                    4000,
                    "Gamer",
                    4000,
                  ]}
                  wrapper="p"
                  loop={Infinity}
                />
              </h4>
              <h4 className="max-w-3xl mt-8 text-gray-300">
                "Hello, I am Gürkan, I am someone who deals with software. I
                learn new things and improve myself every day. I have knowledge and skills in object-oriented
                programming, web programming, mobile application development and
                embedded systems."
              </h4>

              <div className="flex flex-wrap gap-y-1 gap-x-5 p-10 items-center justify-center ">
                <Link href={"https://x.com/gweepcreative"} target="_blank">
                  <Card className="flex justify-center items-center gap-x-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      fill="#fff"
                      width="16"
                      height="16"
                      viewBox="0 0 50 50"
                    >
                      <path d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z"></path>
                    </svg>
                    <h1>gweepcreative</h1>
                  </Card>
                </Link>
                <Link href={"https://github.com/gweepcreative"} target="_blank">
                  <Card className="flex justify-center items-center gap-x-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      fill="#fff"
                      width="16"
                      height="16"
                      viewBox="0 0 30 30"
                    >
                      <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                    </svg>
                    <h1>gweepcreative</h1>
                  </Card>
                </Link>

                <Link href={"mailto:info@grkn.dev"}>
                  <Card>
                    <h4>info@grkn.dev</h4>
                  </Card>
                </Link>
                <Card>
                  <p>+9 years of work exp.</p>
                </Card>
                <Card>
                  <p>Turkish, English</p>
                </Card>
              </div>
            </div>
          </div>
        </main>

        <EduEx />

        <Technologies />

        <Project />

        <Git />

        <div>
          <div className="gradient sm:-ml-20 -ml-8 lg:-ml-24  absolute w-full">
            <div className="flex justify-center w-full">
              <div className="sm:w-[30rem] w-[20rem] lg:w-[30rem]   h-14  bg-[#B32BF7] opacity-10 blur-2xl rounded-xl  "></div>
            </div>
          </div>
          <h1 className="text-center text-5xl my-32 font-extrabold italic">
            "If is it works, don't touch it"
          </h1>
        </div>
      </div>
    </>
  );
}
