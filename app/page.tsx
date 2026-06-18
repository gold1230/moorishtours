import BannerHome from "@/content/bannerhome";
import Card from "@/content/card";
import Destinations from "@/content/destinations";
import TestimonialsSection from "@/content/testimonialsection";
import WhySection from "@/content/whysection";
import CtaBanner from "@/content/ctabanner";
import BlogSection from "@/content/blogsection";

 
 const title ="Moorish Tours - Unforgettable Travel Experiences";

 const description ="Explore the Sahara Desert from Marrakech to Merzouga.";
 const imageUrl = "usePathname()";

 
 export const metadata = {
    title: title,
    description: description,
     openGraph: {
    title: title,
    description: description,
    url: "https://moorishtour.com/tours/3-days-marrakech-desert-tour",
    images: [
      {
        url: imageUrl,
        width: 1200,
        height: 630,
        alt: "3 Days Marrakech Desert Tour",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: title,
    description: description,
    images: [imageUrl],
  },
  }



export default  function Home() {

return (
    <div className="bg-white">
   <BannerHome />
   {/* 
   card tour
   */}
    
   <Card />
   
   <Destinations />
   
   <TestimonialsSection />
   <WhySection />
   <BlogSection />
   <CtaBanner />
   </div>
);


}
