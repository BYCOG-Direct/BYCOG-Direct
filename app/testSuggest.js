import Link from "next/link"



const TestSuggest = () => {
    return (
        <div className='flex justify-center items-center m-9 lg:-mt-16'>
            <div className={"duration-150 bg-white shadow-xl flex-col justify-center gap-2 items-center py-4 px-3 rounded-3xl z-10 text-center"}>
                <div className="py-1 px-3 font-regular text-sm sm:text-xl"> I WANT TO KNOW MY BYCODE</div>
                <Link href="/test" className={"duration-150 bg-[#5161F2] hover:bg-[#2D40EE] shadow-xl flex justify-center gap-2 items-center py-2.5 px-2 rounded-xl"}>
                    <div className="flex justify-center divide-x-2 divide-tan text-center">
                        <div className="py-1 px-3 text-white font-regular text-xl sm:text-3xl"> TAKE THE FREE TEST</div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default TestSuggest;