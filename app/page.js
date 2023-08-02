import Banner from '@components/banner';
import Footer from '@components/footer';
import Image from 'next/image';
import PopularContainer from './popularContainer';
import { PopularEntries, PopularProfiles, PopularTools } from './popularItems';

export default function Home() {
  
  return (
    <main>
      <Banner />

      <div className='py-10 text-center max-w-[600px] mx-auto'>
        <p>Below each person’s likes, dislikes, decision making and personality is a	process they impulsively use all the time.</p>
        <p>We call these processes <span className='border-b border-orange text-orange'>bycodes</span>.</p>
      </div>

      <div className='text-center py-4 text-4xl font-semibold'>Top Courses</div>
      <div className='text-center font-light text-[17px]'>the most used courses on this website</div>
      <div className='mt-10 flex flex-wrap justify-center items-center gap-10'>
        <div className='duration-300 hover:-translate-y-4 bg-gray w-80 p-5 rounded-xl shadow-xl ring ring-gray hover:ring-offset-4 ring-offset-2'>
          <Image className='w-full h-[175px] mx-auto rounded-xl object-cover' src="/images/test.jpg" height={0} width={0} sizes="100vw" />
          <div className='mt-2 text-2xl text-tan'>Course Name</div>
          <div className=' mt-1 text-sm text-tan font-light'>A brief description of the course and its contents. Talk about whatever it is about and what the purpose of it is.</div>
          <div className='mt-2 flex justify-start items-center gap-2'>
            <div className='px-2 rounded-full text-sm bg-tan text-gray'>22 topics</div>
            <div className='px-2 rounded-full text-sm bg-tan text-gray'>Advanced</div>
          </div>
          <div className='flex justify-end items-center mt-2'>
            <div className='bg-gray duration-150 hover:bg-tan hover:text-gray px-5 rounded-full text-tan border border-tan cursor-pointer'>
              Open
            </div>
          </div>
        </div>
        <div className='duration-300 hover:-translate-y-4 bg-gray w-80 p-5 rounded-xl shadow-xl ring ring-gray hover:ring-offset-4 ring-offset-2'>
          <Image className='w-full h-[175px] mx-auto rounded-xl object-cover' src="/images/test.jpg" height={0} width={0} sizes="100vw" />
          <div className='mt-2 text-2xl text-tan'>Course Name</div>
          <div className=' mt-1 text-sm text-tan font-light'>A brief description of the course and its contents. Talk about whatever it is about and what the purpose of it is.</div>
          <div className='mt-2 flex justify-start items-center gap-2'>
            <div className='px-2 rounded-full text-sm bg-tan text-gray'>22 topics</div>
            <div className='px-2 rounded-full text-sm bg-tan text-gray'>Advanced</div>
          </div>
          <div className='flex justify-end items-center mt-2'>
            <div className='bg-gray duration-150 hover:bg-tan hover:text-gray px-5 rounded-full text-tan border border-tan cursor-pointer'>
              Open
            </div>
          </div>
        </div>
        <div className='duration-300 hover:-translate-y-4 bg-gray w-80 p-5 rounded-xl shadow-xl ring ring-gray hover:ring-offset-4 ring-offset-2'>
          <Image className='w-full h-[175px] mx-auto rounded-xl object-cover' src="/images/test.jpg" height={0} width={0} sizes="100vw" />
          <div className='mt-2 text-2xl text-tan'>Course Name</div>
          <div className=' mt-1 text-sm text-tan font-light'>A brief description of the course and its contents. Talk about whatever it is about and what the purpose of it is.</div>
          <div className='mt-2 flex justify-start items-center gap-2'>
            <div className='px-2 rounded-full text-sm bg-tan text-gray'>22 topics</div>
            <div className='px-2 rounded-full text-sm bg-tan text-gray'>Advanced</div>
          </div>
          <div className='flex justify-end items-center mt-2'>
            <div className='bg-gray duration-150 hover:bg-tan hover:text-gray px-5 rounded-full text-tan border border-tan cursor-pointer'>
              Open
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-center items-center mt-10'>
        <div className='z-10 bg-gray border border-tan text-tan cursor-pointer duration-150 hover:bg-tan hover:text-gray hover:border-gray rounded-full px-5 py-1'>
          View All
        </div>
      </div>

      <div className='mt-12 bg-tan pageClip w-full h-[150px]'></div>
      <div className='-mt-[150px] bg-gray w-full h-[150px]'></div>

      <PopularContainer>
        <PopularTools/>
        <PopularProfiles/>
        <PopularEntries/>
      </PopularContainer>

      <Footer />
    </main>
  )
}
