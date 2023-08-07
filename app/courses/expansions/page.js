export default function Page() {
    return (
        <main>
            {/* <!-- STANCES --> */}
            <div className="flex flex-row justify-center content-center">
                <div id="flex flex-col justify-evenly content-center flex-nowrap w-[calc(32rem+1/6)]">
                    <p></p>
                    <p className="text-center text-4xl mt-10">
                        THE STANCES
                    </p>
                    <p className="text-center text-2xl m-1 p-1 max-w-[750px] mx-auto">
                        The stances provide some more detail to the way each bycode use their modules. The stances attach onto an axis, making one side solid and the opposite side fluid.
                    </p>
                </div>
            </div>

            <div>
                <div className="flex flex-row justify-center content-center">
                    <div className="flex-row justify-evenly items-center p-5 m-4 w-[32rem] rounded-3xl bg-gray text-tan">
                        <p></p> 
                        <p className="text-center text-3xl m-auto transition hover:opacity-90">
                                <Link href="/"><font COLOR="#D9D7D2">F - Fluid</font></Link><font COLOR="grey">ifying</font>
                        </p>
                        <p className="text-center text-xl m-3"> 
                            Strengthens itself by increasing flexibility.<br/>Any contention or challenge can be dodged around and allowed to pass through, rather than itself being destroyed.<br/><br/><i>an unsinkable buoyant</i>
                        </p>
                    </div>
                    <div className="flex-row justify-evenly items-center p-5 m-4 w-[32rem] rounded-3xl bg-gray text-tan">
                        <p></p> 
                        <p className="text-center text-3xl m-auto transition hover:opacity-90">
                            <Link href="/"><font COLOR="#D9D7D2">S - Solid</font></Link><font COLOR="grey">ifying</font>
                        </p> 
                        <p className="text-center text-xl m-3">
                            Strengthens itself by decreasing flexibility. Any contention or challenge can be blocked and destroyed through sheer force, rather than itself being destroyed.<br/><br/><i>an immovable anchor</i>
                        </p>
                    </div>
                </div>
            </div>
        </main>
    )
}