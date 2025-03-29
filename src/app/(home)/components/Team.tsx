"use client";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { team } from "@/constants/Team";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Team() {
  const [autoplayPlugin, setAutoplayPlugin] = useState(null);

  useEffect(() => {
    // Dynamically import the Autoplay plugin
    import("embla-carousel-autoplay").then((module) => {
      setAutoplayPlugin(module.default({ delay: 2000 }));
    });
  }, []);

  return (
    <section className="flex flex-col justify-center gap-4 py-10 md:py-20 mx-4 md:mx-32">
      <div className="mb-8 text-2xl font-bold sm:text-4xl">Meet the Team</div>

      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
        plugins={autoplayPlugin ? [autoplayPlugin] : []} // Use the plugin only when it's loaded
      >
        <CarouselContent>
          {team
            ?.slice(0, 30)
            ?.map((member, index) => (
              <CarouselItem
                key={index}
                className="basis-1/2 sm:basis-1/3 md:basis-1/3 lg:basis-1/6 px-2"
              >
                <Card className="p-0">
                  <CardContent className="flex flex-col items-center text-center p-2">
                    <Link
                      href={`/team/${member.slug}`}
                      className="flex flex-col items-center text-center"
                    >
                      <Image
                        src={member.image.url}
                        alt={member.name}
                        className="mb-2 aspect-[12/16] w-full rounded-lg object-cover"
                        loading="lazy"
                        width={300}
                        height={400}
                      />
                      <div className="font-bold text-sm sm:text-base">{member.name}</div>
                      <div className="text-xs sm:text-sm line-clamp-2">{member.title}</div>
                    </Link>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}
