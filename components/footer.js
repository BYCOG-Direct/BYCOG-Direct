import Link from 'next/link';

const Footer = () => {
    return (
        <div className="bg-mediumBlack p-12 text-tan justify-center">
            <div className='w-1/2 mx-auto grid lg:grid-cols-4 gap-7 justify-center'>
                <div className='flex flex-col gap-2 justify-start items-end'>
                    <div className='text-xl'>Contact</div>
                    <Link href="" className='text-[16px] font-light mr-2 hover:border-b border-tan max-w-max'>Email</Link>
                    <Link href="" className='text-[16px] font-light mr-2 hover:border-b border-tan max-w-max'>Twitter</Link>
                    <Link href="" className='text-[16px] font-light mr-2 hover:border-b border-tan max-w-max'>Discord</Link>
                    <Link href="" className='text-[16px] font-light mr-2 hover:border-b border-tan max-w-max'>Github</Link>
                </div>
                <div className='order-last lg:order-none col-span-2 text-center'>
                    <div className='text-xl ml-1'>About Us</div>
                    <div className='mt-3 text-sm font-light ml-2'>
                        BYCOG Direct is a behavioural taxonomy and is not currently accepted or recognised in psychology or neuroscience. 
                        BYCOG Direct and BYCOGNITION are both deviations and split offs from the  
                        <Link className='text-logoRed ml-1 transition hover:text-logoYellow' href="https://www.objectivepersonalitysystem.com/" target="_blank">Objective Personality System</Link> started by D. & S. Powers. 
                        The reflexes, stances and many other factors have their concept originate from them, and for that we thank them for sharing such insightful information open source.
                        The modules have their concept originate from
                        <Link className='text-logoRed ml-1 transition hover:text-logoYellow transition' href="https://wikisocion.github.io/content/psychological_types.html" target="_blank">Psychological Types</Link> by C. G. Jung. 
                        Some definitions have shifted, and will not correlate with what Jung intended. To avoid confusion they have been given new names and labels.
                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                    <div className=' text-xl ml-1'>Pages</div>
                    <Link href="/" className=' text-[16px] font-light ml-2 hover:border-b border-tan max-w-max'>Home</Link>
                    <Link href="/album" className=' text-[16px] font-light ml-2 hover:border-b border-tan max-w-max'>Album</Link>
                    <Link href="/learn" className=' text-[16px] font-light ml-2 hover:border-b border-tan max-w-max'>Learn</Link>
                    <Link href="/visualiser" className='text-[16px] font-light ml-2 hover:border-b border-tan max-w-max'>Tools</Link>
                </div>
            </div>
        </div>
    )
}

export default Footer;