import Link from "next/link"
import Footer from '@components/footer';

export default function Page() {
    return (
        <main>
            <div className="flex flex-row justify-center content-center">
                <div className="bg-darkGray h-32 w-screen">
                    <div className="flex flex-row text-center"> 
                        <img src="/images/BYCOG_Direct_Logo.png" className="w-auto h-12 m-9 transition"/>
                        <p className="text-white mt-10 text-4xl">Your Free Test</p>
                    </div>
                </div>
            </div>

            {/* <!-- Attention Hook --> */}
            <div className="flex flex-row justify-center content-center">
                <div id="flex flex-col justify-evenly content-center flex-nowrap w-[calc(32rem+1/6)]">
                <p></p> 
                <p className="text-left text-2xl mb-1 mt-10 p-1 max-w-[750px] mx-auto">
                Are you more often taking actions that balance:<br/>A. what others want and what you want <br/>B. preventing possiblities and exploring possiblities<br/>
                <div className="flex flex-row justify-center content-center">
                    <div>A</div>
                    <div><input type="radio" name="Q1" class='m-1.5 transition appearance-none w-5 h-5 border-2 border-black outline-none rounded-sm checked:bg-black checked:text-black'></input></div>
                    <div><input type="radio" name="Q1" class='m-1.5 transition appearance-none w-5 h-5 border-2 border-black outline-none rounded-sm checked:bg-black checked:text-black'></input></div>
                    <div><input type="radio" name="Q1" class='m-1.5 transition appearance-none w-5 h-5 border-2 border-black outline-none rounded-sm checked:bg-black checked:text-black'></input></div>
                    <div><input type="radio" name="Q1" class='m-1.5 transition appearance-none w-5 h-5 border-2 border-black outline-none rounded-sm checked:bg-black checked:text-black'></input></div>
                    <div>B</div>
                </div>
                </p>
                <p className="text-center text-2xl m-1 p-1 max-w-[750px] mx-auto">
                    Understanding bycodes can offer a new perspective on how people process the world. <br/>
                </p>
                <p className="text-center text-2xl m-1 p-1 max-w-[750px] mx-auto">
                    Here you can learn about bycodes, how to use them, and join a growing community exploring this topic.
                </p>
                <p></p>
                </div>
            </div>

            <div className="flex flex-row justify-center content-center">
                <div className="typeExamples"></div>
            </div>
            
            {/* <!-- PRELUDE --> */}
            <div className="flex flex-row justify-center content-center">
                <div id="flex flex-col justify-evenly content-center flex-nowrap w-[calc(32rem+1/6)]">
                    <p></p>
                    <p className="text-center text-4xl mt-10">
                        PRELUDE
                    </p>
                    <p className="text-center text-2xl m-1 p-1 max-w-[750px] mx-auto">
                        You already know that there are differences in the way people process.  BYCOG Direct can help you track, compare, and support these different processes. 
                    </p>
                    <p className="text-center text-2xl m-1 p-1 max-w-[750px] mx-auto">
                        People give away the process going on in their mind (what we call their bycode) by how they interact with the world. So if you know what to look out for you can quickly understand what makes someone tick. 
                    </p>
                    <p className="text-center text-2xl m-1 p-1 max-w-[750px] mx-auto">
                        A bycode is not a physical part of someone's body, rather an abstracted model of their repeated themes.<br/>Each bycode is built from 3 layers:
                    </p>
                </div>
            </div>
            
            {/* <!-- NEXT --> */}
            <div className="flex flex-row justify-center content-center">
                <div id="flex flex-col justify-evenly content-center flex-nowrap w-[calc(32rem+1/6)]">
                    <p className="text-center text-4xl mt-10">
                        WHERE TO NEXT?
                    </p>
                    <p className="text-center text-2xl m-1 p-1 max-w-[750px] mx-auto">
                        Well, that's all the essentials!<br/>
                        We hope you able to get a brief rundown on what BYCOG Direct is all about.
                    </p>
                    <p className="text-center text-2xl mt-1 mb-10 p-1 max-w-[750px] mx-auto">
                        You are probably wondering what your bycode is, or want to learn more! BYCOG Direct has many other resources like a database, and a bunch of tools. To learn more in depth about bycodes, and to even find out your own, click courses! Otherwise, click the box you are interested in below!
                    </p>
                </div>
            </div>
            <Footer />
        </main>
    )
}