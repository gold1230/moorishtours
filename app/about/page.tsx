import Image from "next/image";

export default function About() {
    return (
         <section className="relative h-screen flex items-center justify-center">
      
      <Image
        src="/abdou-faiz-mBo2EUfJ7sY-unsplash.jpg"
        alt="Morocco Desert Tour"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 text-white text-center">
        <h1 className="text-5xl font-bold">
          Explore Morocco Tours
        </h1>
      </div>
    </section>
    );
}