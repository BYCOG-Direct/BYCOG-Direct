import Banner from '@components/banner';
import Footer from '@components/footer';
import Testimonials from '@components/testimonials';
import Template from '@components/bycodeDescriptions/template';
import Link from "next/link"
import Image from 'next/image';
import TestSuggest from './testSuggest';
import PopularContainer from './popularContainer';
import { PopularEntries, Courses, PopularTools, PopularProfiles } from './popularItems';

export default function Home() {
  
  return (
    <main>
      
      <div className="flex flex-row justify-center content-center">
          <div className="bg-mediumBlack flex w-screen">
            <div className="flex flex-col md:flex-row text-center"> 
              <Link href="/">
                <img src="/images/BYCOG_Direct_Logo.png" className="w-auto h-10 m-10 ml-9 sm:m-9 sm:h-12 md:m-9 transition"/>
              </Link>
            </div>
          </div>
        </div>

        {/* <Banner /> */}

      <TestSuggest />

      <div className='mt-9 mx-9 mb-5 text-center'>
        <p>Below each person’s likes, dislikes, decision making and personality is a	process they impulsively use all the time.</p>
        <p>We call these processes bycodes.</p>
      </div>

      <Template/>

      <Testimonials />

      {/*<div className='mt-32 -mb-1 bg-tan w-full bannerClip z-0 h-[7.5vw]'></div>*/}
      <div className='bg-hwite pageClip w-full lg:h-[7.6vw]'></div>
      <div className='bg-mediumBlack w-full lg:h-[7.5vw] lg:-mt-[7.5vw]'></div>

      {/*<PopularContainer>
        <PopularEntries/>
        <Courses/>
        <PopularTools/>
        <PopularProfiles/>
      </PopularContainer>*/}

      <Footer />
    </main>
  )
}
