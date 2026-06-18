import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, StarIcon } from "@heroicons/react/24/solid";
import Abdou from "@/public/abdou-faiz-mBo2EUfJ7sY-unsplash.avif"

const tours = [
  {
    title: "3 Days Marrakech to Merzouga Desert Tour",
    href: "/tours/3-days-marrakech-desert-tour",
    image: Abdou,
    days: "3 DAYS",
    price: "On Request",
    rating: "4.9",
    reviews: "320",
    description:
      "Explore Ait Ben Haddou, Dades Valley and the Sahara Desert.",
  },
  {
    title: "4 Days Marrakech to Fes Tour via Chefchaouen",
      href: "/tours/4-days-marrakech-fes-tour",
    image: Abdou,
    days: "4 DAYS",
    price: "On Request",
    rating: "4.9",
    reviews: "210",
    description:
      "Discover the Blue City, Volubilis and the imperial city of Fes.",
  },
  {
    title: "5 Days Desert Tour from Marrakech",
    href: "/tours/5-days-desert-tour-marrakech",
    image: Abdou,
    days: "5 DAYS",
    price: "On Request",
    rating: "4.8",
    reviews: "180",
    description:
      "Explore the Sahara, Todra Gorge, Dades Valley and more.",
  },
  {
    title: "Essaouira Day Trip from Marrakech",
    href: "/tours/essaouira-day-trip-marrakech",
    image: Abdou,
    days: "1 DAY",
    price: "On Request",
    rating: "4.7",
    reviews: "150",
    description:
      "Visit the beautiful coastal city of Essaouira and enjoy the sea breeze.",
  },
];

export default function PopularTours() {
  return (
    <section className=" sm:py-50 py-52">
      <div className="container mx-auto sm:px-30 px-6">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-4xl font-bold text-gray-800" >
              Popular <span className="text-amber-600">Morocco</span> Tours
            </h2>

            <p className="mt-2 text-gray-800">
              Handpicked tours to get you started on your adventure
            </p>
          </div>

          <Link
            href="/tours"
            className="group hidden md:flex items-center gap-2  text-amber-600 font-bold"
          >
            View All Tours
            <ArrowRightIcon className=" h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {tours.map((tour) => (
            <Link
              href={tour.href}
              key={tour.title}
              className="overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative h-56">
                <Image
                  src={tour.image}
                  alt={tour.title}
                 width={301} height={201}
                 placeholder="blur"
                 loading="lazy"
                  className="object-cover w-full "
                />

                <div className="absolute left-4 bottom-3 rounded-lg bg-amber-600 px-3 py-1 text-xs font-semibold text-white shadow">
                  {tour.days}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="line-clamp-2 text-xl font-semibold text-gray-800">
                  {tour.title}
                </h3>

                <p className="mt-3 line-clamp-2 text-sm text-gray-600">
                  {tour.description}
                </p>

                <div className="mt-5 flex items-center justify-between">
                  <div>
                    <span className="text-sm font-bold text-gray-800">
                      Price : {" "}
                      
                    </span>
                    <span className="font-bold text-amber-600 ">
                       {tour.price}
                    </span>
                    
                  </div>

                  <div className="flex items-center gap-1">
                    <StarIcon className="h-4 w-4 text-amber-500" />
                    <span className="font-medium text-amber-600">{tour.rating}</span>
                    <span className="text-sm text-gray-600">
                      ({tour.reviews})
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile button */}
        <div className="mt-8 text-center md:hidden">
          <Link
            href="/tours"
            className="inline-flex items-center gap-2 rounded-xl bg-amber-500 px-6 py-3 font-medium text-white"
          >
            View All Tours
          </Link>
        </div>
      </div>
    </section>
  );
}