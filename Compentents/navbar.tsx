

import {useEffect , useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon  } from '@heroicons/react/24/outline'
import Image from 'next/image'
import MoorishLogo from "@/public/moorishtours3white.png"

import Link from 'next/link'




export default function Navbar(props:any) {


  const [scrolled, setScrolled] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Change navbar style after scrolling
      setScrolled(currentScrollY > 50);

      // Hide when scrolling down
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNav(false);
      }

      // Show when scrolling up
      if (currentScrollY < lastScrollY) {
        setShowNav(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const navigation = [
  { name: 'Home', href: "/" },
  { name: 'Tours', href: "tours" },
  { name: 'About us', href: 'about' },
  { name: 'Contact Us', href: 'contact' },
]
   
const pathname = props.pathname;

  

  return (
  
      <header className={`absolute inset-x-0 top-0 z-50`}>
        
     
        <nav role="navigation" aria-label="Global" className={` flex items-center justify-between p-2 lg:px-8 isolate  ${pathname !== '/' ? 'border-b border-gray-200/10 bg-linear-to-br from-amber-500/10 via-orange-400/5 to-red-500/10 backdrop-blur-md' : ''} 
        fixed top-0 left-0 z-50 w-full
        transition-translate duration-300
        ${showNav ? "translate-y-0" : "-translate-y-full"}
        ${
          scrolled
            ? " border-b border-gray-200/10 bg-linear-to-br from-amber-500/10 via-orange-400/5 to-red-500/10 backdrop-blur-md"
            : "bg-transparent "
        }`}>
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Moorish Tour</span>
              <Image
                alt="vv" width={128} height={64}
                src={MoorishLogo}
                className="h-16 w-auto"
                
              />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-200"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href} className={`text-sm/6 font-semibold ${pathname === "/"+item.href || pathname === item.href ? 'text-amber-400' : ''}`}>
                {item.name}
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            
          </div> 
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-100/10">
            <div className="flex items-center justify-between">
              <Link  href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Moorish tour</span>
                 <Image
                alt="vv" width={128} height={64}
                src={MoorishLogo}
                className="h-16 w-auto"
               
              />
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-200"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-white/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link 
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                
              </div>
            </div>
          </DialogPanel>
        </Dialog>
        
      </header>

      
    
  )
}
