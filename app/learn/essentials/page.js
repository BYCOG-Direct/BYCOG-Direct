import Link from "next/link"
import Footer from '@components/footer';

export default function Page() {
    return (
        <main>
            <div className="flex flex-row justify-center content-center">
                <div className="bg-mediumBlack flex w-screen">
                    <div className="flex flex-col md:flex-row text-center"> 
                    <Link href="/">
                        <img src="/images/BYCOG_Direct_Logo.png" className="w-[205.02px] h-12 mt-9 ml-9 md:m-9 transition"/>
                    </Link>
                    <div className="flex flex-col place-content-center w-screen md:w-auto"> 
                        <p className="text-white text-3xl my-3">Essentials</p>
                    </div>
                    </div>
                </div>
                </div>

            {/* <!-- Attention Hook --> */}
            <div className="flex flex-row content-center justify-center">
                <div id="flex flex-col justify-evenly content-center flex-nowrap w-[calc(32rem+1/6)]">
                <p></p> 
                <p className="text-center text-2xl mb-1 mt-10 p-1 max-w-[750px] mx-auto">
                    Each person has an impulsive process they use all the time. <br/> We call these processes <b>bycodes</b>.
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

            <div className="flex flex-row content-center justify-center">
                <div className="typeExamples"></div>
            </div>
            
            {/* <!-- PRELUDE --> */}
            <div className="flex flex-row content-center justify-center">
                <div id="flex flex-col justify-evenly content-center flex-nowrap w-[calc(32rem+1/6)]">
                    <p></p>
                    <p className="mt-10 text-4xl text-center">
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

            <div>
                <div className="flex flex-row content-center justify-center">
                <div className="flex flex-col content-center justify-center">
                    <div className="w-auto h-0 border-b-2 border-darkGray"> </div>
                    <p className="m-1 text-2xl text-center"> 
                    The <b>modules</b> are the base structure of each bycode. 
                    </p>
                    <div className="w-auto h-0 border-b-2 border-darkGray"> </div>
                    <p className="m-1 text-2xl text-center">
                    The <b>demands</b> are like muscles between the modules. 
                    </p>
                    <div className="w-auto h-0 border-b-2 border-darkGray"> </div>
                    <p className="m-1 text-2xl text-center">
                    And the <b>catch</b> is the big gamble each bycode takes. 
                    </p>
                    <div className="w-auto h-0 border-b-2 border-darkGray"> </div>
                </div>
                </div>
            </div>

            <div className="flex flex-row content-center justify-center">
                <div id="flex flex-col justify-evenly content-center flex-nowrap w-[calc(32rem+1/6)]">
                    <p className="text-center text-2xl m-1 p-1 max-w-[750px] mx-auto">
                        An easy place you could see a person's bycode be used is when they are placed into a new location.
                        You can see a person's bycode in action when they enter a new environment  - do they explore or categorize things? 
                    </p>
                    <p></p>
                </div>
            </div>

            {/* <!-- HOOKS & VOIDS --> */}
            <div className="flex flex-row content-center justify-center">
                <div id="flex flex-col justify-evenly content-center flex-nowrap w-[calc(32rem+1/6)]">
                    <p></p>
                    <p className="mt-10 text-4xl text-center">
                        HOOKS & VOIDS
                    </p>
                    <p className="text-center text-2xl m-1 p-1 max-w-[750px] mx-auto">
                        A single situation won't be enough, but after observing a person for a while, patterns will emerge for what they are compelled to do and what they avoid.<br/>We call these hooks and voids. 
                    </p>
                </div>
            </div>

            <div className="flex flex-row content-center justify-center">
                <div className="flex flex-col content-center justify-center">
                    <div className="w-auto h-0 border-b-2 border-darkGray"> </div>
                    <div className="flex flex-row content-center justify-center">
                        <p className="m-auto text-3xl text-center transition hover:opacity-90">
                            <Link href="/"><font COLOR="#323031">Hook</font></Link><br/><font COLOR="grey" SIZE="4px">Obligated and compulsed</font>
                        </p>
                        <div className="flex flex-col content-center justify-center">
                            <div className="flex flex-row content-center justify-center">
                                <p className="w-24 m-1 text-2xl text-center"> 
                                    1st
                                </p>
                            </div>
                            <div className="w-auto h-0 border-b-2 border-darkGray"> </div>
                            <div className="flex flex-row content-center justify-center">
                                <p className="w-24 m-1 text-2xl text-center"> 
                                    2nd
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-auto h-0 border-b-2 border-darkGray"> </div>
                    <div className="flex flex-row content-center justify-center">
                        <p className="m-auto text-3xl text-center transition hover:opacity-90">
                            <Link href="/"><font COLOR="#323031">Void</font></Link><br/><font COLOR="grey" SIZE="4px">Resisted and deferred</font>
                        </p>
                        <div className="flex flex-col content-center justify-center">
                            <div className="flex flex-row content-center justify-center">
                                <p className="w-24 m-1 text-2xl text-center"> 
                                    3rd
                                </p>
                            </div>
                            <div className="w-auto h-0 border-b-2 border-darkGray"> </div>
                            <div className="flex flex-row content-center justify-center">
                                <p className="w-24 m-1 text-2xl text-center"> 
                                    4th<br/>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-auto h-0 border-b-2 border-darkGray"> </div>
                </div>
            </div>
            
            <div className="flex flex-row content-center justify-center">
                <div id="flex flex-col justify-evenly content-center flex-nowrap w-[calc(32rem+1/6)]">
                    <p className="text-center text-2xl mt-1 mb-10 p-1 max-w-[750px] mx-auto">
                        These hooks and voids are then separated from first to fourth,<br/> which is the order of how much of a hook or void they are.
                    </p><p></p>
                </div>
            </div>

            {/* <!-- MODULES --> */}
            <div className="flex flex-row justify-center content-center bg-mediumBlack text-tan">
                <div id="flex flex-col justify-evenly content-center flex-nowrap w-[calc(32rem+1/6)]">
                    <p></p>
                    <p className="mt-10 text-4xl text-center">
                        <Link href="./courses/modules">THE MODULES</Link>
                    </p>
                    <p className="text-center text-2xl m-1 p-1 max-w-[750px] mx-auto">
                        The modules are the building blocks that make up someone's process. There are 8 modules each with different functions. They work together through the demands.
                    </p>
                    <p className="text-center text-2xl m-1 p-1 max-w-[750px] mx-auto">
                        Each module has a natural opposite in the bycode; pulling one pushes the other, and lifting one lowers the other. <br/>These natural opposites form an axis.<br/><i>(The plural of axis is axes)</i>
                    </p>
                </div>
            </div>

            <div>
                <div className="flex flex-row justify-center content-center bg-mediumBlack text-tan flex-wrap">
                    <div className="flex-row justify-evenly items-center p-5 m-4 w-[44rem] rounded-3xl bg-lightBlack text-tan">  
                        <p className="text-center text-3xl m-auto transition hover:opacity-90">
                            Observer Module Axes<br/>
                            <font COLOR="grey" SIZE="4px">These modules focus on observing unprocessed perceptions.</font> 
                        </p>
                        <p></p>
                        <div className="flex flex-row content-center justify-center">
                            <div className="flex items-center w-[22rem] h-[16.5rem] bg-logoYellow text-gray rounded-l-3xl">
                                <div className="flex-row justify-center w-[40rem] h-60 rounded-2xl items-center absolute p-5 m-3 bg-white text-darkGray"> 
                                    <div className="flex flex-row content-center justify-center">
                                        <div className="flex-row justify-evenly content-center w-[22rem] h-[24rem]">
                                            <p className="m-auto text-3xl text-center transition hover:opacity-90">
                                                <Link href="/"><font COLOR="#323031">Ai - Abstract Intensive</font></Link>
                                            </p>
                                            <p className="m-4 text-lg text-center"> 
                                                Interacting with and refining concepts into a compressed ideal and essential perspective. 
                                            </p>
                                        </div>
                                        <div className="flex-row justify-evenly items-center w-[22rem] h-[22rem]">
                                            <p className="m-auto text-3xl text-center transition hover:opacity-90">
                                                <Link href="/"><font COLOR="#323031">Ce - Concrete Expansive</font></Link>
                                            </p>
                                            <p className="m-4 text-lg text-center"> 
                                                Seeing and contrasting present physical reality and experience for what it is, and how to react to it. 
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center w-[22rem] h-[16.5rem] bg-logoGreen text-gray rounded-r-3xl"></div>
                        </div>
                        <div><font COLOR="#323031" SIZE="4px">.</font></div>
                        <div className="flex flex-row content-center justify-center">
                            <div className="flex items-center w-[22rem] h-[16.5rem] bg-logoGreen text-gray rounded-l-3xl">
                                <div className="flex-row justify-evenly w-[40rem] h-60 rounded-2xl items-center absolute p-5 m-3 bg-white text-darkGray"> 
                                    <div className="flex flex-row content-center justify-center">
                                        <div className="flex-row justify-evenly items-center w-[21.875rem] h-[21.875rem]">
                                            <p className="m-auto text-3xl text-center transition hover:opacity-90">
                                                <Link href="/"><font COLOR="#323031">Ci - Concrete Intensive</font></Link>
                                            </p>
                                            <p className="m-5 text-lg text-center"> 
                                                Interacting with and refining meaning and experiences into reliable and comfortable life systems. 
                                            </p>
                                        </div>
                                        <div className="flex-row justify-evenly items-center w-[21.875rem] h-[21.875rem]">
                                            <p className="m-auto text-3xl text-center transition hover:opacity-90">
                                                <Link href="/"><font COLOR="#323031">Ae - Abstract Expansive</font></Link>
                                            </p>
                                            <p className="m-5 text-lg text-center"> 
                                                Seeing and contrasting possibilities and concepts for what they could be, and what they imply. 
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center w-[22rem] h-[16.5rem] bg-logoYellow text-gray rounded-r-3xl"></div>
                        </div>
                    </div>
                    <div className="flex-row justify-evenly items-center p-5 m-4 w-[44rem] rounded-3xl bg-lightBlack text-tan">  
                        <p className="text-center text-3xl m-auto transition hover:opacity-90">
                            Decider Module Axes<br/><font COLOR="grey" SIZE="4px">These modules focus on resolving unprocessed perceptions.</font> 
                        </p>
                        <p></p>
                        <div className="flex flex-row content-center justify-center">
                            <div className="flex items-center w-[22rem] h-[16.5rem] bg-logoBlue text-gray rounded-l-3xl">
                                <div className="flex-row justify-evenly w-[40rem] h-60 rounded-2xl items-center absolute p-5 m-3 bg-white text-darkGray"> 
                                <div className="flex flex-row content-center justify-center">
                                    <div className="flex-row justify-evenly items-center w-[21.875rem] h-[21.875rem]">
                                        <p className="m-auto text-3xl text-center transition hover:opacity-90">
                                            <Link href="/"><font COLOR="#323031">Ri - Reason Intensive</font></Link>
                                        </p>
                                        <p className="m-5 text-lg text-center"> 
                                            Filtering and refining the interaction with reason by removing falsehoods and contradictions. 
                                        </p>
                                    </div>
                                    <div className="flex-row justify-evenly items-center w-[21.875rem] h-[21.875rem]">
                                        <p className="m-auto text-3xl text-center transition hover:opacity-90">
                                            <Link href="/"><font COLOR="#323031">Ve - Value Expansive</font></Link>
                                        </p>
                                        <p className="m-5 text-lg text-center"> 
                                            Contrasting the spectrum of values in relation to how they harmonise and are feeling to people. 
                                        </p>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="flex items-center w-[22rem] h-[16.5rem] bg-logoRed text-gray rounded-r-3xl"></div>
                        </div>
                        <div><font COLOR="#323031" SIZE="4px">.</font></div>
                        <div className="flex flex-row content-center justify-center">
                            <div className="flex items-center w-[22rem] h-[16.5rem] bg-logoRed text-gray rounded-l-3xl">
                                <div className="flex-row justify-evenly w-[40rem] h-60 rounded-2xl items-center absolute p-5 m-3 bg-white text-darkGray"> 
                                    <div className="flex flex-row content-center justify-center">
                                        <div className="flex-row justify-evenly items-center w-[21.875rem] h-[21.875rem]">
                                            <p className="m-auto text-3xl text-center transition hover:opacity-90">
                                                <Link href="/"><font COLOR="#323031">Vi - Value Intensive</font></Link>
                                            </p>
                                            <p className="m-5 text-lg text-center"> 
                                                Filtering and refining the interaction with value by processing emotion and prioritising. 
                                            </p>
                                        </div>
                                        <div className="flex-row justify-evenly items-center w-[21.875rem] h-[21.875rem]">
                                            <p className="m-auto text-3xl text-center transition hover:opacity-90">
                                                <Link href="/"><font COLOR="#323031">Re - Reason Expansive</font></Link>
                                            </p>
                                            <p className="m-5 text-lg text-center"> 
                                                Contrasting the spectrum of reasons and options in relation to if they work and are functional for people. 
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center w-[22rem] h-[16.5rem] bg-logoBlue text-gray rounded-r-3xl"></div>
                        </div>
                    </div>
                </div>
            </div> 
            
            <div className="flex flex-row justify-center content-center bg-mediumBlack text-tan">
                <div id="flex flex-col justify-evenly content-center flex-nowrap w-[calc(32rem+1/6)]">
                    <p className="text-center text-2xl mt-1 mb-10 p-1 max-w-[750px] mx-auto">
                        To find out more about each model click on them!<br/>
                        Each person has a single observer axis and a single decider axis, meaning them have 4 modules in total. From the 2 two axes each person has, one end will be the hook and the other the void, giving each person 2 hook modules and two void modules.
                    </p>
                    <p></p>
                </div>
            </div>

            {/* <!-- DEMANDS --> */}
            <div className="flex flex-row content-center justify-center">
                <div id="flex flex-col justify-evenly content-center flex-nowrap w-[calc(32rem+1/6)]">
                    <p></p>
                    <p className="mt-10 text-4xl text-center">
                            THE DEMANDS
                    </p>
                    <p className="text-center text-2xl m-1 p-1 max-w-[750px] mx-auto">
                        The demands are the actions that happen when two modules work together. There are 4 demands, each connecting between an observer module and an decider module.
                    </p>
                </div>
            </div>

            <div>
                <div className="flex flex-row justify-center content-center">
                    <div className="flex-row justify-evenly items-center p-5 m-4 w-[32rem] rounded-3xl bg-lightBlack text-tan">
                        <p></p> 
                        <p className="m-auto text-3xl text-center transition hover:opacity-90">
                            <Link href="/"><font COLOR="#D9D7D2">D - Direct</font></Link><br/><font COLOR="grey" SIZE="5px">Ai or Ci with Ve or Re</font>
                        </p>
                        <p className="m-3 text-xl text-center"> 
                            The movement of aligning the tribe with known, and aligning known with the tribe.<br/><br/><i>getting the path known with others</i>
                        </p>
                    </div>
                    <div className="flex-row justify-evenly items-center p-5 m-4 w-[32rem] rounded-3xl bg-lightBlack text-tan">
                        <p></p> 
                        <p className="m-auto text-3xl text-center transition hover:opacity-90">
                            <Link href="/"><font COLOR="#D9D7D2">C - Confer</font></Link><br/><font COLOR="grey" SIZE="5px">Ae or Ce with Ve or Re</font>
                        </p> 
                        <p className="m-3 text-xl text-center">
                            The movement of bouncing new with the tribe, and of the tribe contributing to the new.<br/><br/><i>comparing and sharing paths</i>
                        </p>
                    </div>
                </div>
            </div>

            <div>
                <div className="flex flex-row justify-center content-center">
                    <div className="flex-row justify-evenly items-center p-5 m-4 w-[32rem] rounded-3xl bg-lightBlack text-tan">
                        <p></p> 
                        <p className="m-auto text-3xl text-center transition hover:opacity-90">
                                <Link href="/"><font COLOR="#D9D7D2">R - Revise</font></Link><br/><font COLOR="grey" SIZE="5px">Ai or Ci with Vi or Ri</font>
                        </p>
                        <p className="m-3 text-xl text-center"> 
                            The movement of self reflecting on known, and of known being tweaked by the self.<br/><br/><i>minimising the path taken</i>
                        </p>
                    </div>
                    <div className="flex-row justify-evenly items-center p-5 m-4 w-[32rem] rounded-3xl bg-lightBlack text-tan">
                        <p></p> 
                        <p className="m-auto text-3xl text-center transition hover:opacity-90">
                            <Link href="/"><font COLOR="#D9D7D2">S - Search</font></Link><br/><font COLOR="grey" SIZE="5px">Vi or Ri with Ae or Ce</font>
                        </p> 
                        <p className="m-3 text-xl text-center">
                            The movement of aligning self to the new, and selecting what new to align self to.<br/><br/><i>putting self on the preferred path</i>
                        </p>
                    </div>
                </div>
            </div>
            
            <div className="flex flex-row content-center justify-center">
                <div id="flex flex-col justify-evenly content-center flex-nowrap w-[calc(32rem+1/6)]">
                    <p className="text-center text-2xl m-1 p-1 max-w-[750px] mx-auto">
                        This is where the hooks and voids from before come in; <br/>each bycode has one of these demands 1st, an adjacent demand 2nd, one of the other demands 3rd, and the final demand 4th. <br/>The 1st demand is made from both of the hook modules!
                    </p>
                    <p className="text-center text-2xl m-1 p-1 max-w-[750px] mx-auto">
                            The order of the demands forms a priority queue. When the 1st demand is settled the 2nd demand steps into action, and when the 2nd demand is settled the 3rd demand has a go, and so on. 
                    </p>
                    <p className="text-center text-2xl m-1 p-1 max-w-[750px] mx-auto">
                            This is actually what causes the 4th demand, the biggest void, to be such a void! It is always coming last after other 3, so it hasn't had the chance to grow and get comfortable.
                    </p>
                    <p></p>
                </div>
            </div>

            {/* <!-- CATCH --> */}
            <div className="flex flex-row content-center justify-center">
                <div id="flex flex-col justify-evenly content-center flex-nowrap w-[calc(32rem+1/6)]">
                    <p></p><p></p>
                    <p className="mt-10 text-4xl text-center">
                        THE CATCH
                    </p>
                    <p className="text-center text-2xl m-1 p-1 max-w-[750px] mx-auto">
                        Now, for the catch. Each bycode is disconnected on either their observer or decider axis.<br/>
                        Combined with the 1st demand, this leverages alot of energy into creating an oversized module. 
                    </p>
                    <p className="text-center text-2xl m-1 p-1 max-w-[750px] mx-auto">
                        This module is the one that is both part of the 1st demand, and disconnected along it's axis. This oversized module has a big impact. It is influencing fears, perceived necessities, and incorrectly present itself as the solution when it really isn't.
                    </p>
                    <p className="text-center text-2xl m-1 p-1 max-w-[750px] mx-auto">
                                Although, this big module isn't always a problem. It makes you see the world in ways others don't, telling you to take on challenges where everyone else would run away.
                    </p>
                    <p className="text-center text-2xl m-1 p-1 max-w-[750px] mx-auto">
                        On the other end of the axis, the small module is rather neglected and underdeveloped. 
                        It may be worth investing time into it more!
                    </p>
                </div>
            </div>

            {/* <!-- NEXT --> */}
            <div className="flex flex-row content-center justify-center">
                <div id="flex flex-col justify-evenly content-center flex-nowrap w-[calc(32rem+1/6)]">
                    <p className="mt-10 text-4xl text-center">
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