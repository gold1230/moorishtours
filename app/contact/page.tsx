
import Hero from "@/Compentents/contact/hero";
import ContactCards from "@/Compentents/contact/ContactCards";
// import ContactForm from "@/Compentents/contact/ContactForm";

import FAQ from "@/Compentents/contact/FAQ";
import CTABanner from "@/content/ctabanner";
import { LifebuoyIcon } from "@heroicons/react/24/solid";

export default function Contact() {
  return (
    <div className="bg-white">
    
      <Hero />
  
      <section className="container mx-auto px-4 ">
        <ContactCards />

        <div className="grid lg:grid-cols-2 gap-12 py-20 sm:px-20">
          {/* <ContactForm /> */}
           <div className="bg-stone-50 rounded-3xl p-8 border grid-row-start-2">
      <div className="w-16 h-16 rounded-full border-amber-300  flex items-center justify-center mb-6">
        <LifebuoyIcon className="size-6 text-amber-600"/>
      </div>

      <h3 className="text-2xl font-bold mb-4">
        Need more help?
      </h3>

      <p className="text-gray-600 mb-6">
        Our Morocco travel experts are ready to help
        you plan the perfect trip.
      </p>

      <a
        href="https://wa.me/212661163564"
        target="_blank"
        className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-xl"
      >
        Chat on WhatsApp
      </a>
    </div>
        </div>

        <section className="py-20">
  <div className="grid lg:grid-cols-3 gap-8">

    <div className="lg:col-span-2">
      <FAQ />
    </div>

   

  </div>
</section>
      </section>

      <CTABanner/>
    </div>
  );
}