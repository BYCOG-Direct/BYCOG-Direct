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
                        Each module has a natural opposite in the bycode; pulling one pushes the other, and lifting one lowers the other. <br/>These natural opposites form an axis.
                    </p>
                </div>

                {/* OBSERVER MODULES */}

                <div className="p-4 mx-auto space-y-4 shadow-xl rounded-xl w-fit bg-gray">

                    {/* HEADING */}

                    <div className="text-center text-white">
                        <h1 className="mb-1 text-3xl">Observer Modules</h1>
                        <p className="text-lg text-tan">These modules focus on observing unprocessed perceptions.</p>
                    </div>

                    {/* CONCRETE MODULES */}

                    <div className="p-3 mx-auto mb-8 rounded-xl bg-logoGreen w-fit">

                        {/* <h2 className="mb-4 text-4xl text-center text-white">Concrete Modules</h2> */}

                        <div className="flex mx-auto w-fit gap-x-3">

                            <ModuleBox name="Ci - Concrete Intensive"
                                    description="Interacting with and refining meaning and experiences into reliable and comfortable life systems." />

                            <ModuleBox name="Ce - Concrete Expansive"
                                    description="Seeing and contrasting present physical reality and experience for what it is, and how to react to it." />

                        </div>

                    </div>

                    {/* ABSTRACT MODULES */}

                    <div className="p-3 mx-auto mb-8 rounded-xl bg-logoYellow w-fit">

                        {/* <h2 className="mb-4 text-4xl text-center text-white">Abstract Modules</h2> */}

                        <div className="flex mx-auto w-fit gap-x-3">

                            <ModuleBox name="Ai - Abstract Intensive"
                                    description="Interacting with and refining concepts into a compressed ideal and essential perspective." />

                            <ModuleBox name="Ae - Abstract Expansive"
                                    description="Seeing and contrasting possibilities and concepts for what they could be, and what they imply." />

                        </div>

                    </div>

                </div>

                {/* DECIDER MODULES */}

                <div className="p-4 mx-auto space-y-4 shadow-xl rounded-xl w-fit bg-gray">

                    {/* HEADING */}

                    <div className="text-center text-white">
                        <h1 className="mb-1 text-3xl">Decider Modules</h1>

                        <p className="text-lg text-tan">These modules focus on resolving unprocessed perceptions.</p>
                    </div>

                    {/* REASONS */}

                    <div className="p-3 rounded-xl bg-logoBlue w-fit">

                        {/* <h2 className="mb-4 text-3xl text-center text-white">Reason Modules</h2> */}

                        <div className="flex mx-auto w-fit gap-x-3">

                            <ModuleBox  name="Ri - Reason Intensive"
                                        description="Filtering and refining the interaction with reason by removing falsehoods and contradictions."
                                        link="./courses/modules/Ri" />

                            <ModuleBox  name="Re - Reason Expansive"
                                        description="Contrasting the spectrum of reasons and options in relation to if they work and are functional for people." />

                        </div>
                        
                    </div>

                    {/* VALUES */}

                    <div className="p-3 mx-auto rounded-xl bg-logoRed w-fit">

                        {/* <h2 className="mb-4 text-3xl text-center text-gray">Value Modules</h2> */}

                        <div className="flex mx-auto w-fit gap-x-3">

                            <ModuleBox name="Vi - Value Intensive"
                                    description="Filtering and refining the interaction with value by processing emotion and prioritising." />

                            <ModuleBox name="Ve - Value Expansive"
                                    description="Contrasting the spectrum of values in relation to how they harmonise and are feeling to people." />

                        </div>

                    </div>

                </div>
                
            </div>
            <Footer />
        </main>
    )
}

function ModuleBox ( { name, description, link } ) {

    return <Link className="transition-colors bg-white rounded-md shadow-lg cursor-pointer h-44 hover:bg-slate-100 w-96" href={link || "./"}>
            <h4 className="my-4 text-3xl text-center text-darkGray">{name}</h4>
            <p className="text-lg text-center px-7 text-gray">{description}</p>
        </Link>

}