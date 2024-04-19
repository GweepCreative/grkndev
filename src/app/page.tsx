import { NavigationLink } from "@/components/navigation-link";
import { PROFILES } from "@/lib/constants";
import React from "react";

export default function Main() {
  return (
    <div>
      <div className="z-[1] w-full px-6 pb-8 pt-8 lg:px-8 lg:pb-16 lg:pt-24 ">
        <div className="flex flex-col w-full justify-center items-center my-4 lg:hidden">
          <img
            src="/assets/me.jpg"
            alt="Gürkan Çiloğlu"
            width={100}
            height={100}
            loading="lazy"
            className="rounded-full border shadow-sm w-24 h-24"
          />
          <div className="flex flex-col items-center justify-center mt-2">
            <span className="font-semibold tracking-tight">Gürkan Çiloğlu</span>
            <span className="text-gray-600">Software Engineer</span>
          </div>
        </div>
        <div className=" mx-auto w-full lg:mb-0 lg:max-w-3xl flex flex-col gap-y-10">
          <p className="text-justify">
            Hi 👋 I&apos;m Gürkan, a software engineer, maker, editor, designer,
            jokerman, speaker, and writer. He is passionate about web
            technologies, performance, and accessibility.
          </p>
          <p className="text-justify">
            I develop things as a Senior Software Engineer. Previously, I worked
            as a Senior Backend Software Engineer at Discord, Backend Software
            Engineer at Teknokent R&D Team, Fullstack Software Engineer at RabeL
            Code, Mobile Developer at RabeL Code, and Specialist at Samsung.
          </p>
        </div>
        <div className="my-4 flex flex-col rounded py-3 border-t border-zinc-300 lg:hidden">
          <p className="text-center">Useful Links</p>
          <div className="flex flex-col gap-y-1">
            {Object.values(PROFILES).map((profile) => (
              <NavigationLink
                key={profile.url}
                href={profile.url}
                label={profile.title}
                icon={profile.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
