const educations = [
  {
    name: "Private Antakya Teknokent Collage High School",
    level: "High School",
  },
];

const experiences = [
  {
    name: "Founder & CEO",
    level: "RabeL Development & RabeL Code Startup",
    join: "2022",
    out: "Current",
  },
  {
    name: "Teknokent Collages",
    level: "R&D Chairman of the Board - R&D Director",
    join: "2022",
    out: "Current",
  },
  {
    name: "T.C Tarım ve Orman Bakanlığı Bilgi İşlem Dairesi",
    level: "Intern",
    join: "2023",
    out: "2023",
  },
  {
    name: "Discord Inc",
    level: "Intern",
    join: "2022",
    out: "2023",
  },
];

export default function EduEx() {
  return (
    <>
      <div className="grid mt-12 gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        <div className="flex  justify-center h-96">
          <div>
            <h1 className="text-4xl text-center font-semibold">Education</h1>
            <div className="flex flex-col gap-y-7 mt-10">
              {educations.map((education, index) => (
                <div key={index}>
                  <h1 className="text-lg text-gray-100 font-semibold">
                    {education.name}
                  </h1>
                  <h4 className="text-gray-400 text-sm">{education.level}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex  justify-center h-96">
          <div>
            <h1 className="text-4xl text-center font-semibold">Experience</h1>
            <div className="flex flex-col gap-y-7 mt-10">
              {experiences.map((experience, index) => (
                <div key={index}>
                  <h1 className="text-lg text-gray-100 font-semibold">
                    {experience.name}
                  </h1>
                  <h4 className="text-gray-400 text-sm">
                    {experience.level} | {experience.join} - {experience.out}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
