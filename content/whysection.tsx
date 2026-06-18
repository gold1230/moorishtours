import { MegaphoneIcon, ShieldCheckIcon, Square3Stack3DIcon , MapIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function WhySection() {
const features = [
        {
          title: "Local Expertise",
          desc: "Born and raised in Morocco, we know it best.",
          icon: <MegaphoneIcon className="h-6 w-6 text-amber-600" />,
        },
        {
          title: "Custom Tours",
          desc: "We tailor each tour to your needs and interests.",
          icon: <Square3Stack3DIcon className="h-6 w-6 text-amber-600" />,
        },
        {
          title: "Comfort & Safety",
          desc: "Modern vehicles, professional drivers, full insurance.",
          icon: <ShieldCheckIcon className="h-6 w-6 text-amber-600" />,
        },
        {
          title: "Authentic Experiences",
          desc: "Get off the beaten path and discover real Morocco.",
          icon: <MapIcon className="h-6 w-6 text-amber-600" />,
        },
      ];


  return (
    <section className="rounded-3xl bg-[#faf9f7] sm:mx-10 p-8 lg:p-12">
      <div className="grid gap-8 lg:grid-cols-2">
        
        {/* Left Side */}
        <div className="max-w-lg">
      <span className="text-sm font-semibold uppercase tracking-wider text-amber-600">
        Why Travel With Us
      </span>

      <h2 className="mt-4 text-5xl font-bold leading-tight text-gray-800">
        The <span className="text-amber-600">Moorish Tour</span>
        <br />
        Experience
      </h2>

      <p className="mt-6 mb-6 text-gray-600 leading-8">
        We are a local Moroccan travel operator specialized in
        private and small group tours. We offer authentic
        experiences, handpicked accommodations and 100%
        satisfaction.
      </p>

      <Link href="/about" className=" rounded-md bg-amber-600  px-8 py-4 font-medium text-white transition hover:bg-amber-700">
        Learn More About Us
      </Link>
    </div>

    {/* Right Side */}
    <div className="grid gap-5 sm:grid-cols-2">
      {features.map((item) => (
        <div
          key={item.title}
          className="rounded-2xl bg-white p-8 shadow-sm"
        >
          <div className="flex items-center justify-center mb-4 h-12 w-12 rounded-full border-2 border-amber-600">
            {item.icon}
          </div>

          <h3 className="text-2xl font-semibold text-gray-800">
            {item.title}
          </h3>

          <p className="mt-3 text-gray-600">
            {item.desc}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>  )}