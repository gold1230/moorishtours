import { ArrowRightIcon, StarIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import Image from "next/image"; 
import  tripadvisor from "@/public/images/tripadvisor-desert-trips.png"


const reviews = [
  {
    name: "Sarah J.",
    country: "United States",
    
    review:
      "Amazing experience with Moorish Tour! Everything was perfect, our driver was very friendly and professional.",
  },
  {
    name: "Marco R.",
    country: "Italy",
    
    review:
      "Best trip of our life! The desert camp was incredible and the service was top level. Highly recommended.",
  },
  {
    name: "Lisa M.",
    country: "Canada",
    
    review:
      "We did a 3 days desert tour from Marrakech and it was unforgettable. Thank you Moorish Tour!",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 sm:px-20">
      <div className="container mx-auto px-4">
        <div className="mb-10 flex items-center justify-between">
          <div>
            <h2 className="text-5xl font-bold text-gray-800">
              What Our <span className="text-amber-600">Travelers</span> Say
            </h2>

            <p className="mt-2 text-gray-500">
              Real reviews from our happy customers  
            </p>
          </div>

          <Link
            href="https://www.tripadvisor.com/Attraction_Review-g293733-d27417833-Reviews-Moorish_Tour-Fez_Fez_Meknes.html"
            className=" group hidden md:flex items-center gap-2 text-amber-600 font-bold hover:text-amber-700"
          >
            View All Reviews 
             <ArrowRightIcon className=" h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm"
            >
              <div className="mb-4 flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="h-5 w-5" />
                ))}
              </div>

              <p className="mb-8 text-lg text-gray-700">
                {review.review}
              </p>

              <div className="flex items-center gap-4">
                <Image
                  src= {tripadvisor}
                  alt="fgfg"
                  width={48}
                  height={48}
                  placeholder='blur'
                  loading="lazy"
                  className="h-12 w-12 rounded-full object-cover"
                />

                <div>
                  <h4 className="font-semibold text-gray-700">
                    {review.name}
                  </h4>

                  <p className="text-sm text-gray-500">
                    {review.country}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}