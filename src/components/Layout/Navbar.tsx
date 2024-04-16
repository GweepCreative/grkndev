import Link from "next/link";

import { NavigationLink } from "@/components/navigation-link";
import { PROFILES, LINKS } from "@/lib/constants";

export default function Navbar() {
  return (
    <div className="flex w-full flex-col text-sm">
      <div className="flex flex-col gap-4">
        <Link href="/" className="link-card inline-flex items-center gap-2 p-2">
          <img
            src="/assets/me.jpg"
            alt="Gürkan Çiloğlu"
            width={40}
            height={40}
            loading="lazy"
            className="rounded-full border shadow-sm"
          />
          <div className="flex flex-col">
            <span className="font-semibold tracking-tight">Gürkan Çiloğlu</span>
            <span className="text-gray-600">Software Engineer</span>
          </div>
        </Link>

        <hr />
        <div className="flex flex-col gap-2 text-sm">
          <span className="px-2 text-xs font-medium leading-relaxed text-gray-600">
            Online
          </span>
          ""
          <div className="flex flex-col gap-1">
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
