import Link from "next/link";
import {CreditCardIcon , MegaphoneIcon , ChevronRightIcon, UserGroupIcon , LifebuoyIcon} from "@heroicons/react/24/solid";
import TripadvisorReview from "@/content/tripadvisorreview";
import Image from "next/image"
import  Abdou from "@/public/abdou-faiz-mBo2EUfJ7sY-unsplash.avif"




export default function BannerHome() {          
    return (     
      <div className="relative  h-[720px] ">     

      <Image
        width={1521} height={720}
        src={Abdou}
        alt="Morocco Desert Tour"   
        title="Morocco Desert Tour"
        fetchPriority="high"
        priority
       
        className="object-cover h-[720px]"
        />  
      <div className="absolute inset-0 bg-black/60" />
        <div className="absolute  inset-0 container mx-auto px-4 h-full block"  >
       
        <div className="mx-auto max-w-2xl  mt-25 mb-5" >
          <div className="hidden sm:mb-5 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3  text-sm/6 text-white ring-1 bg-amber-600 ring-white/10 hover:ring-white/20">
              Get 20% off For Your First Booking!
              <Link href="Offers" className="font-semibold text-white   ml-2">
                <span aria-hidden="true" className="absolute inset-0" />
                 Read more <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl">
              Plan Your Dream Trip to Morocco
            </h1>
            <p className="mt-5 text-lg font-medium text-pretty text-white sm:text-xl/8">
              private & Small Group Tours around Morocco.
              <br />
              Ride a camel in Desert,Night in desert camps, Mountains, Cities and Culture.
            </p>
            <div className="mt-5 flex items-center justify-center gap-x-6">
              <Link
                href="shared-tours"
                className=" group flex  items-center rounded-sm bg-amber-600 px-5 py-2.5 text-[16px]  text-white shadow-xs hover:bg-amber-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-100"
              >
                Shared Tours
                  <ChevronRightIcon className="size-4 ml-2 transition delay-150 duration-300 ease-in-out group-hover:translate-x-1" aria-hidden="true" />

              </Link>
              |

              <Link
                href="private-tours"
                className="group flex  items-center rounded-sm bg-amber-600 px-5 py-2.5 text-[16px]   text-white shadow-xs hover:bg-amber-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-100"
              >
                Private Tours
                <ChevronRightIcon className="size-4 ml-2  transition delay-150 duration-300 ease-in-out group-hover:translate-x-1" aria-hidden="true" />
              </Link>
              
            </div>
          </div>
        </div>
      

      {
      
      
      /*  Section reveiws tripadvisor*/

      }
      

            <div className=" lg:mx-auto max-w-2xl lg:max-w-6xl py-2"  >

              <TripadvisorReview />
         
          
         
            </div>
          <div className="flex justify-center  flex-wrap mx-4 lg:mx-auto max-w-2xl lg:max-w-6xl rounded max-md:p-4 py-4 px-1 bg-[#242b34] sm:justify-start "  >

          <div className="flex justify-start lg:justify-center items-center  w-1/2 lg:w-1/4">
            <CreditCardIcon className=" size-10 bg-amber-600 p-2 rounded-full"  />
            <div className="ml-4">
            <span className="text-[14px] font-medium text-white">
              Best Price Guaranteed
            </span>
            <p className="text-sm text-gray-300">
              No hidden fees.
            </p>
            </div>
          </div>
          <div className="flex justify-start lg:justify-center items-center w-1/2 lg:w-1/4">
            <MegaphoneIcon className=" size-10 bg-amber-600 p-2 rounded-full"  />
            <div className="ml-4">
            <span className="text-[14px] font-medium text-white">
              Local Guides Experts
            </span>
            <p className="text-sm text-gray-300">
              100% Local experience.
            </p>
            </div>
          </div>
         
          <div className="flex lg:justify-center items-center  w-1/2 lg:w-1/4">
            <UserGroupIcon className=" size-10 bg-amber-600 p-2 rounded-full"  />
            <div className="ml-4">
            <span className="text-[14px] font-medium text-white"> 
              Private & Small Groups tours
            </span>
            <p className="text-sm text-gray-300">
              Comfortable & Experience.
            </p>
            </div>
          </div>
           <div className="flex lg:justify-center items-center  w-1/2 lg:w-1/4">
            <LifebuoyIcon className=" size-10 bg-amber-600 p-2 rounded-full"  />
            <div className="ml-4">
            <span className="text-[14px] font-medium text-white">
              24/7 Customer Support
            </span>
            <p className="text-sm text-gray-300">
              Always here to help you.
            </p>
            </div>
          </div>
         </div>
      </div>  
            
      </div>      

    )
}