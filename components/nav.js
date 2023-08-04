"use client"; // This is a client component
import Link from "next/link"
import Image from "next/image";
import {useState} from 'react'



const Nav = () => {
    const [color, setColor] = useState(true)
    const NavColor = () => {
        if (window.scrollY >= 90) {setColor(false)}
        else {setColor(true)}
     }
    window.addEventListener('scroll', NavColor)
    return (
        <div className={color ? "duration-300 fixed flex justify-center gap-2 items-center py-3 px-3 right-20 top-10 z-20 rounded-full" : "duration-300 bg-gray shadow-xl fixed flex justify-center gap-2 items-center py-3 px-3 right-20 top-10 z-20 rounded-full"}>
            <div className="flex justify-center gap-2 divide-x divide-white text-white text-center font-light text-xl">
                <Link href="/" className="py-1 px-3 hover:text-tan">Home</Link>
                <Link href="/database" className="py-1 px-3 hover:text-tan">Database</Link>
                <Link href="/essentials" className="py-1 px-3 hover:text-tan">Courses</Link>
                <Link href="/visualiser" className="py-1 px-3 hover:text-tan">Tools</Link>
            </div>
            <Link href="/">
                <div className="flex justify-center items-center">
                    <Image className='w-10 h-10 rounded-full border-2 border-tan' src="/images/default_pfp.jpg" height={0} width={0} sizes="100vw" />
                </div>
            </Link>
        </div>
    )
}

export default Nav;