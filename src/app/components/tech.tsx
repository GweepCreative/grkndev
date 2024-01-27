import Image from "next/image";
import { useEffect } from "react";

export default function Technologies() {
  const technologies = [
    {
      tech: "TypeScript",
    },
    {
      tech: "JavaScript",
    },
    {
      tech: "C#",
    },
    {
      tech: "Arduino (C++)",
    },
    {
      tech: "Python",
    },
    {
      tech: "Node.js",
    },
    {
      tech: "React",
    },
    {
      tech: "React Native",
    },
    {
      tech: "Expo",
    },
    {
      tech: "Next.js",
    },
    {
      tech: "Express",
    },
    {
      tech: "HTML",
    },
    {
      tech: "CSS",
    },
    {
      tech: "TailwindCSS",
    },
    {
      tech: "FireBase",
    },
    {
      tech: "MongoDB",
    },
    {
      tech: "SQL",
    },
    {
      tech: "Git",
    },
  ];
  return (
    <>
      <div className="mt-12">
        <h1 className="text-4xl text-center font-semibold">
          Most Preffered Technologies
        </h1>
        <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 lg:grid-cols-5  gap-3 justify-center mt-12 ">
          {technologies.map((techs, index) => (
            <div
              key={index}
              className="border border-[#202020] rounded-md  h-10 flex items-center justify-center px-3  "
            >
              <p>{techs.tech}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
