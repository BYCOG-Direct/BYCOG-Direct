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

      <div className='py-10 text-center max-w-[750px] mx-auto'>
        <p>Below each person’s likes, dislikes, decision making and personality is a	process they impulsively use all the time.</p>
        <p>We call these processes bycodes.</p>
      </div>

      <Testimonials />

      <div className='bg-tan pageClip w-full h-[150px]'></div>
      <div className='-mt-[150px] bg-gray w-full h-[150px]'></div>

      <PopularContainer>
        <PopularEntries/>
        <Courses/>
        <PopularTools/>
        <PopularProfiles/>
      </PopularContainer>

      <Footer />
    </main>
  )
}
