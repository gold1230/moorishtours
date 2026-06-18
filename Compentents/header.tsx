'use client';
import Navbar from "@/Compentents/navbar";

import { usePathname } from "next/navigation";


export default function Header() {
     const pathname = usePathname();
     
    return (

        
       
        <Navbar pathname={pathname}/>  

        
        
            
            
           
        
    
    )
}           