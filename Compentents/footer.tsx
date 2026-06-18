import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import Image from "next/image";
import MoorishLogo from "@/public/moorishtours3white.png"



export default function Footer() {

let currentYear = new Date().getFullYear();


  return (
    <footer className="bg-[#0e1014] text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">

          {/* Company */}
          <div>
            <Image
              src={MoorishLogo}
              alt="Moorish Tour logo"
              className="mb-4 text-3xl font-bold"
              placeholder="blur"
              width={150}
              height={100}
              loading="lazy"
            />

            <p className="text-gray-400">
              We are a local Moroccan travel agency based in Marrakech, specialized in private and small group tours. We are passionate about
              offering authentic and unforgettable tours
              around Morocco.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="mb-5 font-semibold">
              Quick Links
            </h4>

            <ul className="space-y-3 text-gray-400">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/tours">Tours</Link></li>
              <li><Link href="/destinations">Destinations</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Tours */}
          <div>
            <h4 className="mb-5 font-semibold">
              Top Tours
            </h4>

            <ul className="space-y-3 text-gray-400">
              <li><Link href="/tours/3-days-desert-tour">3 Days Desert Tour</Link></li>
              <li><Link href="/tours/4-days-marrakech-to-fes">4 Days Marrakech to Fes</Link></li>
              <li><Link href="/tours/5-days-desert-tour">5 Days Desert Tour</Link></li>
              <li><Link href="/tours/essaouira-day-trip">Essaouira Day Trip</Link></li>
              <li><Link href="/custom-tours">Custom Tours</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-5 font-semibold">
              Contact Info
            </h4>

            <div className="space-y-4 text-gray-400">
              <div className="flex gap-3">
                <PhoneIcon className="h-5 w-5" />
                +212 661 00 00 64
              </div>

              <div className="flex gap-3">
                <EnvelopeIcon className="h-5 w-5" />
                moorishtour@gmail.com
              </div>

              <div className="flex gap-3">
                <MapPinIcon className="h-5 w-5" />
                Marrakech, Morocco
              </div>
            </div>
          </div>

          {/* WhatsApp */}
          <div>
            <h4 className="mb-5 font-semibold">
              WhatsApp
            </h4>

            <p className="mb-4 text-gray-400">
              Chat with us on WhatsApp for quick response.
            </p>

            <a
              href="https://wa.me/212600000000"
              className="inline-block rounded-xl bg-amber-500 px-6 py-3 text-white"
            >
              Chat Now
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-gray-500">
          ©  2014 - {currentYear} Moorish Tour. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}