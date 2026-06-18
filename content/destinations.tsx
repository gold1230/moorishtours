
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Abdou from "@/public/abdou-faiz-mBo2EUfJ7sY-unsplash.avif"

export default function Destinations() {
  return (
    <section className="relative mt-10  sm:mx-10 overflow-hidden rounded-lg">
  
  {/* Background Image */}
  <Image
    src={Abdou}
    width={1536} height={702}
    alt="morocco desert tour"
    loading="lazy"
    className="absolute inset-0 h-full w-full object-cover"
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/55"></div>

  <div className="relative z-10 p-8 lg:p-12">
    <div className="grid gap-8 lg:grid-cols-[350px_1fr]">

      {/* Left Content */}
      <div className="flex flex-col justify-center">
        <span className="text-sm font-semibold uppercase tracking-wider text-amber-600">
          Top Destinations
        </span>

        <h2 className="mt-4 text-5xl font-bold text-white">
          Explore the Beauty
          <br />
          of <span className="text-amber-600">Morocco</span>
        </h2>

        <Link href="/destinations" className="mt-8 w-fit rounded-xl bg-amber-600 px-8 py-4 text-white transition hover:bg-amber-700">
          Explore Destinations
        </Link>
      </div>

      {/* Destination Cards */}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {[
          {
            title: "Marrakech",
            image: Abdou,
            href: "/destinations/marrakech"
          },
          {
            title: "Casablanca",
            image: Abdou,
            href: "/destinations/casablanca"
          },
          {
            title: "Tangier",
            image: Abdou,
            href: "/destinations/tangier"
          },
          {
            title: "Fes",
            image: Abdou,
            href: "/destinations/fes"
          },
        ].map((place) => (
          <Link href={place.href}
            key={place.title}
            className="group relative h-72 overflow-hidden rounded-3xl"
          >
            <Image
              src={place.image}
              alt={place.title}
              width={229} height={288}
              className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent"></div>

            <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
              <h3 className="text-[20px] font-semibold text-white">
                {place.title}
              </h3>

              <div   className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-600 text-white">
                <ArrowRightIcon className="size-4" aria-hidden="true" /> 
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </div>
</section>
  );
}
