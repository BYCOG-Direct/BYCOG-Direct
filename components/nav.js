"use client"; // This is a client component
import Link from "next/link"
import Image from "next/image";
import {useState} from 'react'
import {useEffect} from "react";



const Nav = () => {
    const [color, setColor] = useState(true);
  
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY >= 90) {
          setColor(false);
        } else {
          setColor(true);
        }
      };
  
      // Add event listener when the component mounts
      window.addEventListener('scroll', handleScroll);
  
      // Remove the event listener when the component unmounts
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []); // The empty dependency array ensures that the effect is applied only once on mount
    return (
        <div className={color ? "duration-500 fixed flex justify-center gap-2 items-center py-3 px-3 right-20 top-7 z-20 rounded-full" : "duration-150 bg-gray shadow-xl fixed flex justify-center gap-2 items-center py-3 px-3 right-20 top-4 z-20 rounded-full"}>
            <div className="flex justify-center divide-x-2 divide-tan text-white text-center font-light text-xl">
                <Link href="/" className="py-1 px-3 hover:text-tan">Home</Link>
                <Link href="/database" className="py-1 px-3 hover:text-tan">Database</Link>
                <Link href="/courses/essentials" className="py-1 px-3 hover:text-tan">Courses</Link>
                <Link href="/visualiser" className="py-1 pl-3 pr-1.5 hover:text-tan">Tools</Link>
            </div>
            <Link href="/profile">
                <div className="flex justify-center items-center">
                    <Image className='w-10 h-10 rounded-full border-2 border-tan' src="/images/default_pfp.jpg" height={0} width={0} sizes="100vw" />
                </div>
            </Link>
        </div>
    )
}

export default Nav;