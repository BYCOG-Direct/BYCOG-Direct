"use client"; // This is a client component
import Link from "next/link"



const TestSuggest = () => {
    return (
        <div className='flex justify-center items-center -mt-16'>
            <div className={"duration-150 bg-white shadow-xl flex flex-wrap w-96 justify-center gap-2 items-center py-4 px-3 rounded-3xl z-20"}>
                <div className="py-1 px-3"> I WANT TO KNOW MY BYCODE</div>
                <Link href="/" className={"duration-150 bg-[#5161F2] hover:bg-[#2D40EE] shadow-xl flex justify-center gap-2 items-center py-2.5 px-2 rounded-xl"}>
                    <div className="flex justify-center divide-x-2 divide-tan text-white text-center font-regular text-3xl">
                        <div className="py-1 px-3"> TAKE THE FREE TEST</div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default TestSuggest;