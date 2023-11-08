import Image from "next/image";



const Testimonials = () => {
    return (
        <div className='w-full pb-24 flex-col'>
            <div className='text-center text-4xl font-semibold mb-4'>Testimonials</div>
            <div class="flex justify-center">
                <div className="mx-9 columns-1 md:columns-2 lg:columns-3 max-w-[1024px]">
                    <article class="overflow-hidden mb-9 mx-2 px-8 pt-6 pb-8 rounded-lg bg-white text-grey-medium shadow-xl">
                        <div class="flex mb-4">
                        <Image src="/images/image-daniel.jpg" width={500} height={500} alt="Daniel Clifford" class="h-7 w-7 mr-4 rounded-full border-2 border-solid border-violet-light"/>
                        <div>
                            <h2 class="p-0 m-0 text-sm leading-tight">Daniel Clifford</h2>
                            <p class="p-0 m-0 text-xs leading-tight opacity-50">Verified Graduate</p>
                        </div>
                        </div>
                        <p class="mb-10 md:mb-4 text-xl leading-6 font-semibold">I received a job offer mid-course, and the subjects I learned were current, if not more so, 
                        in the company I joined. I honestly feel I got every penny’s worth.</p>
                        <p class="text-sm leading-5 opacity-70">“ I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a 
                        transition and have heard some people who had an amazing experience here. I signed up 
                        for the free intro course and found it incredibly fun! I enrolled shortly thereafter. 
                        The next 12 weeks was the best - and most grueling - time of my life. Since completing 
                        the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup. ”</p>
                    </article>
                    <article class="overflow-hidden my-9 mx-2 px-8 pt-6 pb-8 rounded-lg bg-white text-grey-medium shadow-xl">
                        <div class="flex mb-4">
                        <Image src="/images/image-jonathan.jpg" width={500} height={500} alt="Jonathan Walters" class="h-7 w-7 mr-4 rounded-full"/>
                        <div>
                            <h2 class="p-0 m-0 text-sm leading-tight">Jonathan Walters</h2>
                            <p class="p-0 m-0 text-xs leading-tight opacity-50">Verified Graduate</p>
                        </div>
                        </div>
                        <p class="mb-4 text-xl leading-6 font-semibold">The team was very supportive and kept me motivated</p>
                        <p class="text-sm leading-5 opacity-70">“ I started as a total newbie with virtually no coding skills. I now work as a mobile engineer 
                        for a big company. This was one of the best investments I’ve made in myself. ”</p>
                    </article>
                    <article class="overflow-hidden my-9 mx-2 px-8 pt-6 pb-8 rounded-lg bg-white text-grey-medium shadow-xl">
                        <div class="flex mb-4">
                        <Image src="/images/image-jeanette.jpg" width={500} height={500} alt="Jeanette Harmon" class="h-7 w-7 mr-4 rounded-full"/>
                        <div>
                            <h2 class="p-0 m-0 text-sm leading-tight">Jeanette Harmon</h2>
                            <p class="p-0 m-0 text-xs leading-tight opacity-50">Verified Graduate</p>
                        </div>
                        </div>
                        <p class="mb-4 text-xl leading-6 font-semibold">An overall wonderful and rewarding experience</p>
                        <p class="text-sm leading-5 opacity-70">“ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living 
                        while doing something I love. ”</p>
                    </article>
                    <article class="overflow-hidden my-9 mx-2 px-8 pt-6 pb-8 rounded-lg bg-white text-grey-medium shadow-xl">
                        <div class="flex mb-4">
                        <Image src="/images/image-patrick.jpg" width={500} height={500} alt="Patrick Abrams" class="h-7 w-7 mr-4 rounded-full border-2 border-solid border-violet-light"/>
                        <div>
                            <h2 class="p-0 m-0 text-sm leading-tight">Patrick Abrams</h2>
                            <p class="p-0 m-0 text-xs leading-tight opacity-50">Verified Graduate</p>
                        </div>
                        </div>
                        <p class="mb-4 text-xl leading-6 font-semibold">Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and 
                        learning from their experiences was easy.</p>
                        <p class="text-sm leading-5 opacity-70">“ The staff seem genuinely concerned about my progress which I find really refreshing. The program 
                        gave me the confidence necessary to be able to go out in the world and present myself as a capable 
                        junior developer. The standard is above the rest. You will get the personal attention you need from 
                        an incredible community of smart and amazing people. ”</p>
                    </article>
                    <article class="overflow-hidden my-9 mx-2 px-8 pt-6 pb-8 rounded-lg bg-white text-grey-medium shadow-xl">
                        <div class="flex mb-4">
                        <Image src="/images/image-kira.jpg" width={500} height={500} alt="Kira Whittle" class="h-7 w-7 mr-4 rounded-full"/>
                        <div>
                            <h2 class="p-0 m-0 text-sm leading-tight">Kira Whittle</h2>
                            <p class="p-0 m-0 text-xs leading-tight opacity-50">Verified Graduate</p>
                        </div>
                        </div>
                        <p class="mb-4 text-xl leading-6 font-semibold">Such a life-changing experience. Highly recommended!</p>
                        <p class="text-sm leading-5 opacity-70">“ Before joining the bootcamp, I’ve never written a line of code. I needed some structure from 
                        professionals who can help me learn programming step by step. I was encouraged to enroll by a former 
                        student of theirs who can only say wonderful things about the program. The entire curriculum and staff 
                        did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team 
                        project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial 
                        could ever have. In fact, I’ve often referred to it during interviews as an example of my developent 
                        experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 
                        100% recommend! ”</p>
                    </article>
                </div>
            </div>
        </div>
    )
}

export default Testimonials;