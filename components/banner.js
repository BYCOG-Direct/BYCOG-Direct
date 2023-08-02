import Image from 'next/image';

const Banner = () => (
    <>
        <div className="bg-darkGray flex justify-center align-center flex-col pt-40 w-full">
            <Image className='w-[750px] h-full mx-auto' src="/images/BYCOG_Direct_Logo.png" height={0} width={0} sizes="100vw" />
            <div className='mt-32 -mb-1 bg-tan w-full bannerClip h-[150px] z-0'></div>
        </div>
    </>
)

export default Banner;