"use client";
import { NavigationLink } from "@/components/navigation-link";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PROFILES, STORE, TECS } from "@/lib/constants";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import React, { useEffect } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

import { Button } from "@/components/ui/button";
export default function Main() {
  return (
    <div>
      <div className="z-[1] w-full px-6 pb-8 pt-8 lg:px-8 lg:pb-16 lg:pt-24 ">
        <div className=" flex flex-col w-full justify-center items-center my-4 lg:hidden">
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
          <p className="text-justify text-lg">
            Hi 👋 I&apos;m Gürkan, a software engineer, maker, editor, designer,
            jokerman, speaker, and writer. I am passionate about web
            technologies, performance, and accessibility.
          </p>
          <p className="text-justify text-lg">
            I develop things as a Senior Software Engineer. I&apos;m developing
            somethings for Discord and Samsung. I also have expertise and
            experience in embedded systems, web development, object oriented
            programming.
          </p>
        </div>
        <div className="w-full h-1 bg-zinc-200 rounded-full my-8" />
        <div className="justify-center items-center w-full flex flex-col m-4">
          <h1 className="font-bold text-xl justify-center items-center">
            Technologies I am interested in
          </h1>
          <div className="cursor-default  grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-4 my-4">
            {Object.values(TECS).map((tec,index) => (
              <div key={index} className="flex justify-center items-center space-x-2 border border-zinc-300 hover:bg-zinc-200 bg-zinc-100 transition-colors p-2 rounded-xl">
                <img
                  src={tec.icon}
                  className="w-6 h-6"
                  alt=""
                />
                <span className="font-bold">{tec.title}</span>
              </div>
            ))}
          </div>
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

        {/* <div className="mx-auto  mt-4 flex flex-col gap-y-4 justify-center items-center">
          <p className="font-bold text-xl">My Store</p>
          <ScrollArea className="w-full lg:w-1/2 md:w-3/4 h-[450px]">
            <div className="flex flex-col gap-y-4 items-center justify-center">
              {STORE.map((product, index) => (
                <Link
                  key={product.url + index}
                  href={product.url}
                  target="_blank"
                  className="w-full h-full lg:h-3/4 lg:w-full"
                >
                  <Card className="w-full">
                    <CardHeader>
                      <CardTitle>
                        <img
                          className="w-full rounded-md aspect-video"
                          src={product.img}
                        />
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-y-1">
                      <h1 className="font-bold text-md">
                        {product.title.length > 45
                          ? product.title.slice(0, 40) + "..."
                          : product.title}
                      </h1>
                      <p>{product.description.slice(0, 79)}...</p>
                    </CardContent>
                    <CardFooter className=" flex flex-row gap-x-2 justify-between items-start">
                      <div className="flex gap-x-2">
                        {Object.keys(product.priceList).map((item, index) => (
                          <Badge key={index} variant={"outline"}>
                            {item.charAt(0).toLocaleUpperCase() + item.slice(1)}
                          </Badge>
                        ))}
                      </div>
                      <ArrowUpRight className="hidden lg:block" size={24} />
                    </CardFooter>
                  </Card>
                </Link>
              ))}
            </div>
          </ScrollArea>
          <Link
            href={"https://bionluk.com/gweepcreative"}
            target="_blank"
            className="mt-4 w-[200px] xl:w-84"
          >
            <Button className="w-full" variant={"outline"}>
              Show More
            </Button>
          </Link>
        </div> */}
      </div>
    </div>
  );
}
