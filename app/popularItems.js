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

export const Courses = () => {
    return (
        <div className="justify-center items-center gap-10 mt-16">
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
            </div>
        </div>
    )
}

export const PopularEntries = () => {
    return <div>Popular Entries</div>
}