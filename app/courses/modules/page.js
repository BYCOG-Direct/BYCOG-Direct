import Link from "next/link"
import Footer from '@components/footer';

export default function Page() {
    return (
        <main>
            <div className="flex flex-row content-center justify-center">
                <div className="w-screen h-32 bg-darkGray">
                    <div className="flex flex-row text-center"> 
                        <img src="/images/BYCOG_Direct_Logo.png" className="w-auto h-12 transition m-9"/>
                        <p className="mt-10 text-4xl text-white">Modules</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col my-8 space-y-8">

                <div className="flex flex-col mx-auto justify-evenly flex-nowrap w-fit">
                    <p></p>
                    <p className="text-4xl text-center">
                        THE MODULES
                    </p>
                    <p className="text-center text-2xl m-1 p-1 max-w-[750px] mx-auto">
                        The modules are the building blocks that make up someone's process. There are 8 modules each with different functions. They work together through the demands.
                    </p>
                    <p className="text-center text-2xl m-1 p-1 max-w-[750px] mx-auto">
                        Each module has a natural opposite in the bycode; pulling one pushes the other, and lifting one lowers the other. <br/>These natural opposites form an axis.<br/><i>(The plural of axis is axes)</i>
                    </p>
                </div>

                {/* OBSERVER MODULES */}

                <div className="p-4 mx-auto space-y-4 shadow-xl rounded-xl w-fit bg-gray">

                    {/* HEADING */}

                    <div className="text-center text-white">
                        <h1 className="mb-1 text-3xl">Observer Module Axes</h1>
                        <p className="text-lg text-tan">These modules focus on observing unprocessed perceptions.</p>
                    </div>

                    {/* Ai/Ce */}

                    <div className="flex mx-auto mb-8 w-fit">

                        <ModuleBox name="Ai - Abstract Intensive"
                                description="Interacting with and refining concepts into a compressed ideal and essential perspective."
                                module="abstract"
                                side="left" />

                        <ModuleBox name="Ce - Concrete Expansive"
                                description="Seeing and contrasting present physical reality and experience for what it is, and how to react to it."
                                module="concrete"
                                side="right" />

                    </div>

                    {/* Ci/Ae */}

                    <div className="flex mx-auto mb-8 w-fit">

                        <ModuleBox name="Ci - Concrete Intensive"
                                description="Interacting with and refining meaning and experiences into reliable and comfortable life systems."
                                module="concrete"
                                side="left" />

                        <ModuleBox name="Ae - Abstract Expansive"
                                description="Seeing and contrasting possibilities and concepts for what they could be, and what they imply."
                                module="abstract"
                                side="right" />

                    </div>

                </div>

                {/* DECIDER MODULES */}

                <div className="p-4 mx-auto space-y-4 shadow-xl rounded-xl w-fit bg-gray">

                    {/* HEADING */}

                    <div className="text-center text-white">
                        <h1 className="mb-1 text-3xl">Decider Module Axes</h1>

                        <p className="text-lg text-tan">These modules focus on resolving unprocessed perceptions.</p>
                    </div>

                    {/* Ri/Ve */}

                    <div className="flex mx-auto mb-8 w-fit">

                        <ModuleBox  name="Ri - Reason Intensive"
                                    description="Filtering and refining the interaction with reason by removing falsehoods and contradictions."
                                    link="./courses/modules/Ri"
                                    module="reason"
                                    side="left" />

                        <ModuleBox  name="Ve - Value Expansive"
                                    description="Contrasting the spectrum of values in relation to how they harmonise and are feeling to people."
                                    module="value"
                                    side="right" />

                    </div>

                    {/* Vi/Re */}

                    <div className="flex mx-auto mb-8 w-fit">

                        <ModuleBox  name="Vi - Value Intensive"
                                    description="Filtering and refining the interaction with value by processing emotion and prioritising."
                                    module="value"
                                    side="left" />

                        <ModuleBox  name="Re - Reason Expansive"
                                    description="Contrasting the spectrum of reasons and options in relation to if they work and are functional for people."
                                    module="reason"
                                    side="right" />

                    </div>

                </div>
                
            </div>
            <Footer />
        </main>
    )
}

function ModuleBox ( { name, description, link, module, side } ) {

    let color = "bg-gray";

    if (module == "concrete") color = "bg-logoGreen";
    else if (module == "abstract") color = "bg-logoYellow";
    else if (module == "reason") color = "bg-logoBlue";
    else if (module == "value") color = "bg-logoRed";

    let border = "rounded-lg";

    if (side == "left") border = "rounded-lg rounded-r-none";
    else if (side == "right") border = "rounded-lg rounded-l-none";

    return <div className={`w-fit flex p-3 ${color} ${border}`}>
        <Link className={`transition-colors bg-white rounded-md shadow-lg cursor-pointer h-44 hover:bg-slate-100 w-96`} href={link || "./"}>
            <h4 className="my-4 text-3xl text-center text-darkGray">{name}</h4>
            <p className="text-lg text-center px-7 text-gray">{description}</p>
        </Link>
    </div>

}