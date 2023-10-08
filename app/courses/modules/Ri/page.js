import Link from "next/link"
import Footer from '@components/footer';

export default function Page() {
    return (
        <main>
            <div className="flex flex-row content-center justify-center">
                <div className="w-screen h-32 bg-darkGray">
                    <div className="flex flex-row text-center"> 
                        <img src="/images/BYCOG_Direct_Logo.png" className="w-auto h-12 transition m-9"/>
                        <p className="mt-10 text-4xl text-white">
                            <Link href="./courses/modules">Modules</Link>
                        </p>
                    </div>
                </div>
            </div>

            {/* CONTENT */}
            <div className="mx-auto my-8 space-y-8 w-fit">

                {/* DEFINITION */}

                <div className="p-4 text-center text-white rounded-md bg-logoBlue">

                    <div className="py-4 text-center bg-white text-gray">

                        <h1 className="text-4xl text-center">Reason Intensive (Ri)</h1>
                        
                        <p className="mx-auto mt-2 text-xl text-gray w-96">Filtering and refining the interaction with reason by removing falsehoods and contradictions.</p>  
                    
                    </div>

                </div>

                {/* ELON MUSK */}

                <div className="p-2 mx-auto rounded-md w-fit bg-gray">

                    <div className="mb-2 text-center text-white">
                        <h1 className="text-3xl">Matt Damon - Rc:scR</h1>
                        <p className="text-xl">The Best Type</p>
                    </div>

                    <div className="pb-4 space-y-4 text-white rounded-md">

                        <div className="flex px-4 space-x-4">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/hNPJhR7qZ4g?si=hiHqJOxKikBwqICk&amp;clip=Ugkx8ytif46JtzATaH9W4-5HLM0Cex_lVLV7&amp;clipt=EJDyCxi_sg8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            <div className="rounded-md w-96">
                                Matt Damon telling a story because I needed a placeholder here.
                            </div>
                        </div>

                        <div className="flex px-4 space-x-4">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/hNPJhR7qZ4g?si=hiHqJOxKikBwqICk&amp;clip=Ugkx8ytif46JtzATaH9W4-5HLM0Cex_lVLV7&amp;clipt=EJDyCxi_sg8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            <div className="rounded-md w-96">
                                The same Matt Damon story.
                            </div>
                        </div>
                        
                    </div>

                </div>

            </div>

            <Footer />
        </main>
    )
}

function ModuleBox ( { name, description, link } ) {

    return <div className="transition-colors bg-white rounded-md shadow-lg cursor-pointer h-44 hover:bg-slate-100 w-96">
            <h4 className="my-4 text-3xl text-center text-darkGray">{name}</h4>
            <p className="text-lg text-center px-7 text-gray">{description}</p>
        </div>

}