import Image from "next/image";

export const PopularTools = () => {
    return (
        <div className="flex flex-wrap justify-center items-center gap-10 mt-16">
            <div className='cursor-pointer duration-300 hover:-translate-y-4 bg-tan text-gray w-80 p-5 rounded-xl shadow-xl ring ring-gray hover:ring-offset-4 ring-offset-2'>
                <Image className='w-full h-[175px] mx-auto rounded-xl object-cover' src="/images/test.jpg" height={0} width={0} sizes="100vw" />
                <div className='mt-2 text-2xl'>Tool Name</div>
                <div className=' mt-1 text-sm font-light'>A brief description of the tool and what it's purpose is. Talk about the unique functionality of it.</div>
            </div>
            <div className='cursor-pointer duration-300 hover:-translate-y-4 bg-tan text-gray w-80 p-5 rounded-xl shadow-xl ring ring-gray hover:ring-offset-4 ring-offset-2'>
                <Image className='w-full h-[175px] mx-auto rounded-xl object-cover' src="/images/test.jpg" height={0} width={0} sizes="100vw" />
                <div className='mt-2 text-2xl'>Tool Name</div>
                <div className=' mt-1 text-sm font-light'>A brief description of the tool and what it's purpose is. Talk about the unique functionality of it.</div>
            </div>
            <div className='cursor-pointer duration-300 hover:-translate-y-4 bg-tan text-gray w-80 p-5 rounded-xl shadow-xl ring ring-gray hover:ring-offset-4 ring-offset-2'>
                <Image className='w-full h-[175px] mx-auto rounded-xl object-cover' src="/images/test.jpg" height={0} width={0} sizes="100vw" />
                <div className='mt-2 text-2xl'>Tool Name</div>
                <div className=' mt-1 text-sm font-light'>A brief description of the tool and what it's purpose is. Talk about the unique functionality of it.</div>
            </div>
        </div>
    )
};

export const PopularProfiles = () => {
    return (
        <div className="flex flex-wrap justify-center items-center gap-5 mt-16">
            <div className='flex gap-3 duration-300 bg-tan text-gray w-80 p-5 rounded-xl shadow-xl ring ring-gray hover:ring-offset-4 ring-offset-2'>
                <Image className='basis-1/3 h-full mx-auto rounded-xl object-cover' src="/images/test.jpg" height={0} width={0} sizes="100vw" />
                <div className="basis-2/3">
                    <div>Hello</div>
                </div>
            </div>
        </div>
    )
}

export const PopularEntries = () => {
    return <div>Popular Entries</div>
}