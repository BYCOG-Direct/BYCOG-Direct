import Banner from '@components/banner';
import Footer from '@components/footer';
import Testimonials from '@components/testimonials';
import Image from 'next/image';
import TestSuggest from './testSuggest';
import PopularContainer from './popularContainer';
import { PopularEntries, Courses, PopularTools, PopularProfiles } from './popularItems';

export default function Home() {
  
  return (
    <main>
      
      <Banner />

      <TestSuggest />

      <div className='mt-9 mx-9 mb-5 text-center'>
        <p>Below each person’s likes, dislikes, decision making and personality is a	process they impulsively use all the time.</p>
        <p>We call these processes bycodes.</p>
      </div>

      <Testimonials />

      {/*<div className='mt-32 -mb-1 bg-tan w-full bannerClip z-0 h-[7.5vw]'></div>*/}
      <div className='bg-tan pageClip w-full lg:h-[7.6vw]'></div>
      <div className='bg-darkGray w-full lg:h-[7.5vw] lg:-mt-[7.5vw]'></div>

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
