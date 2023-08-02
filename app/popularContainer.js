"use client";

import { useState, Children } from "react";

const PopularContainer = ({ children }) => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    const allTypes = ['Tools','Profiles', 'Entries'];


    return (
        <div className='bg-gray text-tan w-full pb-24'>
            <div className='text-center pt-20 py-4 text-4xl font-semibold'>Popular {allTypes[selectedIndex]}</div>
            <div className='text-center font-light text-[17px]'>the most popular {allTypes[selectedIndex].toLowerCase()} on the website</div>
            <div className='mx-auto mt-6 flex justify-center items-center max-w-max border-2 bg-darkGray border-tan text-center rounded-full fisrt:-ml-[2px] first:rounded-l-full last:-mr-[2px] last:rounded-r-full'>
                {allTypes.map((type, i) => (
                    <div className={`px-4 py-1 cursor-pointer hover:bg-tan hover:text-gray duration-150 ${i === 0 && '-ml-[2px] rounded-l-full'} ${i === 2 && '-mr-[2px] rounded-r-full'}
                        ${i === selectedIndex && 'bg-tan text-gray'}`} onClick={() => i != selectedIndex && setSelectedIndex(i)} key={i}>
                    {type}
                    </div>
                ))}
            </div>
            {Children.toArray(children)[selectedIndex]}
        </div>
    )
}

export default PopularContainer;