import Image from "next/image";
import Link from "next/link";
import Abdou from "@/public/abdou-faiz-mBo2EUfJ7sY-unsplash.avif"

export default function CTABanner() {
return(
<section className="relative overflow-hidden">
  <Image
  width={1536} height={702}
    src={Abdou}
    alt="ff"
    placeholder="blur"
    loading="lazy"
    className="absolute inset-0 h-full w-full object-cover"
  />

  <div className="absolute inset-0 bg-black/55"></div>

  <div className="relative z-10 container mx-auto px-6 py-24">
    <div className="max-w-xl">
      <h2 className="text-5xl font-bold text-white">
        Ready for Your Moroccan Adventure?
      </h2>

      <p className="mt-6 text-lg text-white/80">
        Book your dream tour today and create memories
        that last a lifetime.
      </p>

      <div className="mt-8 flex flex-wrap gap-4">
        <Link
          href="/contact"
          className="rounded-sm bg-amber-600 px-8 py-4 font-medium text-white transition hover:bg-amber-700"
        >
          Book Your Tour Now
        </Link>

        <Link
          href="https://wa.me/212600000000"
          className="rounded-sm border border-white/30 bg-white/10 px-8 py-4 text-white backdrop-blur-md"
        >
          WhatsApp Us
        </Link>
      </div>
    </div>
  </div>
</section>  )}