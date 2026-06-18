import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Abdou from "@/public/abdou-faiz-mBo2EUfJ7sY-unsplash.avif"

const blogs = [
  {
    title: "Best Time to Visit Morocco in 2026",
    slug: "best-time-to-visit-morocco",
    image: Abdou,
    category: "Travel Tips",
    date: "May 12, 2026",
  },
  {
    title: "Ultimate Marrakech Desert Tour Guide",
    slug: "marrakech-desert-tour-guide",
    image: Abdou,
    category: "Desert Tours",
    date: "May 18, 2026",
  },
  {
    title: "10 Places You Must Visit in Morocco",
    slug: "places-to-visit-in-morocco",
    image: Abdou,
    category: "Destinations",
    date: "May 22, 2026",
  },
  {
    title: "Complete Guide to Chefchaouen Blue City",
    slug: "chefchaouen-travel-guide",
    image: Abdou,
    category: "Travel Guide",
    date: "May 29, 2026",
  },
];

export default function BlogSection() {
  return (
    <section className="py-20 sm:px-20">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <div className="mb-10 flex items-center justify-between">
          <div>
            <span className="text-sm font-bold uppercase tracking-wider text-amber-600">
              Travel Blog
            </span>

            <h2 className="mt-3 text-5xl font-bold text-gray-800">
              Latest <span className="text-amber-600"> Morocco Travel</span> Guides
            </h2>

            <p className="mt-3 text-gray-600">
              Discover useful travel tips, destination guides,
              and inspiration for your next Morocco adventure.
            </p>
          </div>

          <Link
            href="/blog"
            className="hidden md:flex items-center gap-2 font-bold group text-amber-600"
          >
            View All Articles
            <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Blog Cards */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {blogs.map((blog) => (
            <article
              key={blog.slug}
              className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-60 overflow-hidden">
                <Image 
                  src={blog.image}
                  alt={blog.title}
                  fill
                  placeholder='blur'
                  loading="lazy"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <div className="mb-3 flex items-center justify-between ">
                  <span className="text-white font-bold bg-amber-600 rounded-lg  px-2 py-1 text-sm">
                    {blog.category}
                  </span>

                  <span className="text-gray-600">
                    {blog.date}
                  </span>
                </div>

                <h3 className="text-xl font-semibold leading-snug text-gray-800">
                  {blog.title}
                </h3>

                <Link
                  href={`/blog/${blog.slug}`}
                  className="mt-6 inline-flex items-center gap-2 text-amber-600 font-bold group/read"
                >
                  Read More

                  <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover/read:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Mobile Button */}
        <div className="mt-8 text-center md:hidden">
          <Link
            href="/blog"
            className="inline-flex rounded-xl bg-amber-600 px-6 py-3 text-white"
          >
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
}