"use client"
import Image from 'next/image';
import { useEffect, useState } from "react";

const Banner = () => {
  const [scrollOpacity, setScrollOpacity] = useState(1);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const maxScroll = 300; // Adjust this value as needed
    const opacity = 1 - scrollPosition / maxScroll;

    // Make sure opacity never goes below 0
    setScrollOpacity(Math.max(0, opacity));
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className="bg-darkGray flex justify-center align-center flex-col pt-40 w-full">
        {/* <div className="flex justify-end w-full"> <div className="relative bg-black w-[438px] h-[64px] right-20 -top-[132px] rounded-full"> </div> </div> */}
        <Image
          className='w-[750px] h-full mx-auto'
          src="/images/BYCOG_Direct_Logo.png"
          height={0}
          width={0}
          sizes="100vw"
          style={{ opacity: scrollOpacity }} // Set the opacity using inline style
        />
        <div className='mt-32 -mb-1 bg-tan w-full bannerClip h-[150px] z-0'></div>
      </div>
    </>
  );
}

export default Banner;

/* import Image from 'next/image';
import {useEffect} from "react";

const Banner = () => (
    <>
        <div className="bg-darkGray flex justify-center align-center flex-col pt-40 w-full">
            <Image className='w-[750px] h-full mx-auto' src="/images/BYCOG_Direct_Logo.png" height={0} width={0} sizes="100vw" />
            <div className='mt-32 -mb-1 bg-tan w-full bannerClip h-[150px] z-0'></div>
        </div>
    </>
)

export default Banner;*/