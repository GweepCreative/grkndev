import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    name: "Personel Website",
    description: "Şuanda görmekte olduğunuz websitesi.",
    technologies: ["Next.js", "TailwindCSS"],
    image: "/proje.png",
  },
];
export default function Project() {
  return (
    <>
      <div className="mt-32">
        <h1 className="text-4xl text-center font-semibold">Projects</h1>

        <div className="grid gap-5 md:grid-cols-2 grid-cols-1   lg:grid-cols-3 mt-16">
          {projects.map((project, index) => (
            <Link href="" key={index}>
              <div
                style={{ backgroundImage: `url(${project.image})` }}
                className=" h-44 background border hover:border-white border-[#202020] rounded-md overflow-hidden"
              >
                <div className="h-full text-end flex justify-end p-4 w-full bg-gradient-to-l from-black/70 from-60% via-transparent to-transparent">
                  <div className="h-full grid content-between ">
                    <div>
                      <h1 className="font-semibold text-xl">{project.name}</h1>
                      <h4 className="max-w-[15rem] text-sm">
                        {project.description}
                      </h4>
                    </div>
                    <div className="flex flex-row flex-wrap justify-end gap-3">
                      {project.technologies.map((tech, index) => (
                        <div
                          key={index}
                          className="border border-[#202020] bg-black/50 py-1 px-2 rounded-md"
                        >
                          <h1>{tech}</h1>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
