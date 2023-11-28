"use client"; // This is a client component
import Link from "next/link"
import Image from "next/image";
import {useState, useEffect} from 'react'

const Nav = () => {
  const [navHeight, setNavHeight] = useState(true);
  const [displayLongNav, setDisplayLongNav] = useState(true); // State to handle the display of the long nav
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= [15]) {
        setNavHeight(false);
      } else {
        setNavHeight(true);
      }
    };

    // Add event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // The empty dependency array ensures that the effect is applied only once on mount
  
  const handleNavClick = () => {
    setDisplayLongNav(!displayLongNav);
    setDisplayProfile(true);
    console.log( displayLongNav, navHeight );
  };

  const [displayProfile, setDisplayProfile] = useState(true);
  const profileClick = () => {
    setDisplayProfile(!displayProfile);
  };

  return (
    <div>
      <div>
        <div 
          className={displayLongNav 
            ? "fixed top-0 left-0 w-full h-full z-40 bg-opacity-0 transition-all duration-500 pointer-events-none" 
            : "fixed top-0 left-0 w-full h-full z-40 bg-mediumBlack bg-opacity-50 transition-all duration-500 "} 
          onClick={displayLongNav ? undefined : handleNavClick}
        ></div>
      </div>
      <div className={navHeight 
        ? "ring-inset ring-0 ring-white/0 bg-mediumBlack backdrop-filter backdrop-blur-lg bg-opacity-70 hidden lg:inline-flex duration-500 fixed justify-center gap-2 items-center p-3 mx-20 my-7 right-0 z-50 rounded-full" 
        : "ring-inset ring-1 ring-white/20 bg-lightBlack backdrop-filter backdrop-blur-lg bg-opacity-70 hidden lg:inline-flex duration-150 fixed justify-center gap-2 items-center p-3 mx-20 my-5 right-0 z-50 rounded-full drop-shadow-xl"
      }>
        <div className="flex justify-center divide-x-2 divide-tan text-white text-center font-light text-xl">
          <Link href="/" className="py-1 px-3 hover:text-tan">Home</Link>
          <Link href="/bycodex" className="py-1 px-3 hover:text-tan">Bycodex</Link>
          <Link href="/learn/essentials" className="py-1 px-3 hover:text-tan">Learn</Link>
          <Link href="/visualiser" className="py-1 pl-3 pr-1.5 hover:text-tan">Tools</Link>
        </div>
        <div className='w-10 h-10'>
          <div className={displayProfile
            ? 'transition-all duration-300 absolute right-8 top-4 rounded-full z-[51] drop-shadow-xl bg-mediumBlack ring-inset ring-1 ring-white/20 flex flex-col items-center'
            : 'transition-all duration-300 absolute right-1 top-1 rounded-full z-[51] drop-shadow-xl bg-mediumBlack ring-inset ring-1 ring-white/20 flex flex-col items-center'
          }>
            <div className={displayProfile
            ? 'transition-all duration-300 pt-0 pb-0 w-0 h-auto flex flex-col items-center justify-items-center text-center text-zero'
            : 'transition-all duration-300 pt-12 pb-3 w-14 h-auto gap-2 flex flex-col items-center justify-items-center text-center text-white text-sm'
          }>

              <div></div>
              <Link href="/" className="hover:text-tan">Sign<br/>Up</Link>
              <Link href="/" className="hover:text-tan">Log<br/>In</Link>
              <Link href="/learn/essentials" className="hover:text-tan">View</Link>
              <Link href="/visualiser" className="hover:text-tan">Edit</Link>
              <div></div>
            </div>
          </div>

          <button onClick={profileClick}>
            <div className="flex justify-center items-center z-[52]">
              <Image className='w-10 h-10 rounded-full border-2 border-tan z-[52]' src="/images/default_pfp.jpg" height={0} width={0} sizes="100vw" />
            </div>
          </button>
        </div>
        
      </div>
      
      <div className={
        navHeight 
        // Top of screen nav bar closed
        ? (displayLongNav 
          ? "ring-inset ring-0 ring-white/0 backdrop-filter backdrop-blur-lg bg-opacity-70 lg:hidden transition-all duration-500 bg-mediumBlack fixed flex justify-center gap-2 items-center p-3 mx-5 my-6 right-0 z-50 rounded-full"
          : "ring-inset ring-1 ring-white/20 backdrop-filter backdrop-blur-lg bg-opacity-70 lg:hidden transition-all duration-300 bg-lightBlack drop-shadow-xl fixed flex justify-center gap-2 items-center p-5 m-3 right-0 z-50 rounded-full")
        // Top of screen nav bar Open
        : (displayLongNav 
          ? "ring-inset ring-1 ring-white/20 backdrop-filter backdrop-blur-lg bg-opacity-70 lg:hidden transition-all duration-150 bg-lightBlack drop-shadow-xl fixed flex justify-center gap-2 items-center p-3 m-5 right-0 z-50 rounded-full"
          : "ring-inset ring-1 ring-white/20 backdrop-filter backdrop-blur-lg bg-opacity-70 lg:hidden transition-all duration-300 bg-lightBlack drop-shadow-xl fixed flex justify-center gap-2 items-center p-5 m-3 right-0 z-50 rounded-full") 
      }>
        <div className={
          displayLongNav
            ? "flex flex-col items-center h-auto w-12"
            : "flex flex-col items-center text-white font-light h-auto w-12 top-0"
        }
        // Conditionally include onClick only when displayLongNav is true
        { ...(displayLongNav ? { onClick: handleNavClick } : {}) }
        >
          <Link href="/" className={displayLongNav ? " text-zero transition-all duration-300" : "mt-2 hover:text-tan transition-all duration-300"}>Home</Link>
          <div className={displayLongNav ? "w-7 h-[2px] bg-tan mx-[6px] my-[11px] transition-all duration-300" : "w-7 h-[2px] bg-tan mx-[6px] my-[10px] transition-all duration-300"}></div>
          <Link href="/bycodex" className={displayLongNav ? "text-zero transition-all duration-300" : "hover:text-tan transition-all duration-300"}>Bycodex</Link>
          <div className={displayLongNav ? "w-7 h-[2px] bg-tan mx-[6px] my-[-1px] transition-all duration-300" : "w-7 h-[2px] bg-tan mx-[6px] my-[10px] transition-all duration-300"}></div>
          <Link href="/learn/essentials" className={displayLongNav ? "text-zero transition-all duration-300" : "hover:text-tan transition-all duration-300"}>Learn</Link>
          <div className={displayLongNav ? "w-7 h-[2px] bg-tan mx-[6px] my-[11px] transition-all duration-300" : "w-7 h-[2px] bg-tan mx-[6px] my-[10px] transition-all duration-300"}></div>                
          <Link href="/visualiser" className={displayLongNav ? "text-zero transition-all duration-300" : "mb-2 hover:text-tan transition-all duration-300"}>Tools</Link>
          <div className={displayLongNav ? 'transition-all duration-300 w-0 h-0': 'transition-all duration-300 w-10 h-10 mb-2'}>
            <div className={displayProfile
              ? 'transition-all duration-300 absolute right-11 top-[228px] rounded-full z-[51] drop-shadow-xl bg-mediumBlack ring-inset ring-1 ring-white/20 flex flex-col items-center'
              : 'transition-all duration-300 absolute right-4 top-[218px] rounded-full z-[51] drop-shadow-xl bg-mediumBlack ring-inset ring-1 ring-white/20 flex flex-col items-center'
            }>
              <div className=
              {displayProfile
                ? 'transition-all duration-300 pt-0 pb-0 w-0 h-auto flex flex-col items-center justify-items-center text-center text-zero'
                : 'transition-all duration-300 pt-12 pb-3 w-14 h-auto gap-2 flex flex-col items-center justify-items-center text-center text-white text-sm'
              }>
                <div></div>
                <Link href="/" className="hover:text-tan">Sign<br/>Up</Link>
                <Link href="/" className="hover:text-tan">Log<br/>In</Link>
                <Link href="/profile" className="hover:text-tan">View</Link>
                <Link href="/visualiser" className="hover:text-tan">Edit</Link>
                <div></div>
              </div>
            </div>

            <button onClick={profileClick}>
              <div className="transition-all duration-300 flex justify-center items-center z-[52]">
                <Image className={displayLongNav 
                  ? 'transition-all duration-300 w-0 h-0 rounded-full border-0 z-[52]'
                  : 'transition-all duration-300 w-10 h-10 rounded-full border-2 border-tan z-[52] m-1'
                } src="/images/default_pfp.jpg" height={0} width={0} sizes="100vw" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>    
  )
}

export default Nav;