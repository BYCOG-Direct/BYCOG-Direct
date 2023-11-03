'use client'
import Link from 'next/link';
import Footer from '@components/footer';
import { Slider, Button } from '@material-tailwind/react';
import React, { useState, useEffect } from 'react';

export function SliderCustomStyles({ name, setResponses, responses }) {
    const handleSliderChange = (event) => {
        const rawValue = event.target.value
        const adjustedValue = rawValue - 50;
        console.log("Value of",name,":", adjustedValue); // Log the value parameter
        setResponses((prevResponses) => ({
          ...prevResponses,
          [name]: adjustedValue,
        }));
    };
  
    const defaultValue = responses.hasOwnProperty(name) ? responses[name] + 50 : 50;

    return (
      <div className="w-96">
        <Slider
          size="lg"
          defaultValue={defaultValue}
          className="text-black"
          thumbClassName="[&::-moz-range-thumb]:rounded-none [&::-webkit-slider-thumb]:rounded-sm [&::-moz-range-thumb]:-mt-[6px] [&::-webkit-slider-thumb]:-mt-[3px]"
          trackClassName="[&::-webkit-slider-runnable-track]:bg-black rounded-none"
          onChange={handleSliderChange}
        />
      </div>
    );
}

export default function Page() {
    const [currentSet, setCurrentSet] = useState(1);
    const [responses, setResponses] = useState({});
    const [variable1, setVariable1] = useState(''); // Initialize variable1 state
    const [variable2, setVariable2] = useState(''); // Initialize variable2 state
    const [variable3, setVariable3] = useState(''); // Initialize variable3 state

    useEffect(() => {
        // This code will run when variable1, variable2 or variable3 changes
        console.log("variable1:", variable1);
        console.log("variable2:", variable2);
        console.log("variable3:", variable3);
      }, [variable1, variable2, variable3]
    );

    const isBrowser = () => typeof window !== 'undefined'; //The approach recommended by Next.js

    function scrollToTop() {
        if (!isBrowser()) return;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    const handleNextSet = () => {
        setCurrentSet(currentSet + 1);
    };

    const handlePreviousSet = () => {
        setCurrentSet(currentSet - 1);
    };
    const handleSubmit = () => {

    // Calculate based on responses
    const O_D = responses.Q01 + responses.Q06 + responses.Q11 + responses.Q16 + responses.Q21;
    console.log("O_D:", O_D.toString());

    const S_T = responses.Q02 + responses.Q14 + responses.Q09 + responses.Q17;
    console.log("S_T:", S_T.toString());

    const K_N = responses.Q03 + responses.Q15 + responses.Q10 + responses.Q18;
    console.log("K_N:", K_N.toString());

    const V_R = responses.Q04 + responses.Q12;
    console.log("V_R:", V_R.toString());

    const A_C = responses.Q05 + responses.Q13;
    console.log("A_C:", A_C.toString());

    const ViRe = responses.Q07 + responses.Q19;
    console.log("ViRe:", ViRe.toString());

    const AiCe = responses.Q08 + responses.Q20;
    console.log("AiCe:", AiCe.toString());

    let Vi = 0,
      Ri = 0,
      Ai = 0,
      Ci = 0,
      Ve = 0,
      Re = 0,
      Ae = 0,
      Ce = 0;

    // Calculate Vi and Ri based on S_T
    if (S_T < 0) {
        Vi += -S_T;
        Ri += -S_T;
      } else if (S_T > 0) {
        Ve += S_T;
        Re += S_T;
      }


    // Calculate Ai and Ci based on K_N
    if (K_N < 0) {
        Ai += -K_N;
        Ci += -K_N;
      } else if (K_N > 0) {
        Ae += K_N;
        Ce += K_N;
      }

    // Calculate Vi, Ve, Ri, Re based on V_R
    if (V_R < 0) {
      Vi += -V_R;
      Ve += -V_R;
    } else if (V_R > 0) {
      Ri += V_R;
      Re += V_R;
    }

    // Calculate Ci, Ce, Ai, Ae based on A_C
    if (A_C < 0) {
      Ai += -A_C;
      Ae += -A_C;
    } else if (A_C > 0) {
      Ci += A_C;
      Ce += A_C;
    }

    // Calculate Vi, Re, Ri, Ve based on ViRe
    if (ViRe < 0) {
      Vi += -ViRe;
      Re += -ViRe;
    } else if (ViRe > 0) {
      Ri += ViRe;
      Ve += ViRe;
    }
    console.log("Vi:", Vi);
    console.log("Ri:", Ri);
    console.log("Ve:", Ve);
    console.log("Re:", Re);

    // Calculate Ai, Ce, Ci, Ae based on AiCe
    if (AiCe < 0) {
      Ai += -AiCe;
      Ce += -AiCe;
    } else if (AiCe > 0) {
      Ci += AiCe;
      Ae += AiCe;
    }
    console.log("Ai:", Ai);
    console.log("Ci:", Ci);
    console.log("Ae:", Ae);
    console.log("Ce:", Ce);

    // Calculate variable1 based on O_D
    let calculatedVariable1;
    if (O_D < 0) {
    // Choose the larger of Ai, Ci, Ae, Ce
    if (Ai >= Ci && Ai >= Ae && Ai >= Ce) {
        calculatedVariable1 = 'A';
    } else if (Ci >= Ai && Ci >= Ae && Ci >= Ce) {
        calculatedVariable1 = 'C';
    } else if (Ae >= Ai && Ae >= Ci && Ae >= Ce) {
        calculatedVariable1 = 'A';
    } else {
        calculatedVariable1 = 'C';
    }
    } else if (O_D > 0) {
    // Choose the larger of Vi, Ri, Ve, Re
    if (Vi >= Ri && Vi >= Ve && Vi >= Re) {
        calculatedVariable1 = 'V';
    } else if (Ri >= Vi && Ri >= Ve && Ri >= Re) {
        calculatedVariable1 = 'R';
    } else if (Ve >= Vi && Ve >= Ri && Ve >= Re) {
        calculatedVariable1 = 'V';
    } else {
        calculatedVariable1 = 'R';
    }
    }
    console.log("calculatedVariable1:", calculatedVariable1);

    // Calculate variable2 based on O_D
    let calculatedVariable2;
    if (O_D < 0) {
    // Choose the larger of Vi, Ri, Ve, Re
    if (Vi >= Ri && Vi >= Ve && Vi >= Re) {
        calculatedVariable2 = 'v';
    } else if (Ri >= Vi && Ri >= Ve && Ri >= Re) {
        calculatedVariable2 = 'r';
    } else if (Ve >= Vi && Ve >= Ri && Ve >= Re) {
        calculatedVariable2 = 'v';
    } else {
        calculatedVariable2 = 'r';
    }
    } else if (O_D > 0) {
    // Choose the larger of Ai, Ci, Ae, Ce
    if (Ai >= Ci && Ai >= Ae && Ai >= Ce) {
        calculatedVariable2 = 'a';
    } else if (Ci >= Ai && Ci >= Ae && Ci >= Ce) {
        calculatedVariable2 = 'c';
    } else if (Ae >= Ai && Ae >= Ci && Ae >= Ce) {
        calculatedVariable2 = 'a';
    } else {
        calculatedVariable2 = 'c';
    }
    }
    console.log("calculatedVariable2:", calculatedVariable2);

    let calculatedVariable3;
    // Check if Ve or Re is bigger than Vi and Ri, and Ci or Ai is bigger than Ce and Ae
    if (Math.max(Ve,Re) > Math.max(Vi,Ri) && (Math.max(Ci,Ai) > Math.max(Ce,Ae))) {
        calculatedVariable3 = 'd';
    } 
    // Check if Vi or Ri is bigger than Ve and Re, and Ci or Ai is bigger than Ce and Ae
    else if (Math.max(Vi,Ri) > Math.max(Ve,Re) && (Math.max(Ci,Ai) > Math.max(Ce,Ae))) {
        calculatedVariable3 = 'r';
    } 
    // Check if Ve or Re is bigger than Vi and Ri, and Ce or Ae is bigger than Ci and Ai
    else if (Math.max(Ve,Re) > Math.max(Vi,Ri) && (Math.max(Ce,Ae) > Math.max(Ci,Ai))) {
        calculatedVariable3 = 'c';
    } 
    // If none of the above conditions are met, assign 's' to calculatedVariable3
    else {
        calculatedVariable3 = 's';
    }

    // Set the calculated values of variable1, variable2 & variable3
    setVariable1(calculatedVariable1);
    setVariable2(calculatedVariable2);
    setVariable3(calculatedVariable3);
  };








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

            <div className="flex flex-row justify-center content-center text-8xl mb-7">
                <p className="text-center text-2xl mb-1 mt-10 p-1 max-w-[1000px] mx-auto">
                Answer honestly about yourself; try to reflect on your actions and how you behaved when you were younger. Focus on the trends of your life, rather than specific events.
                </p>
            </div>
            
            <div className="flex flex-row justify-center content-center">
                {/* Conditional rendering based on the current set */}

                {currentSet === 1 && (
                    // Render questions 1-7
                    <div id="flex flex-col justify-evenly content-center flex-nowrap w-[calc(32rem+1/6)]">
                        <hr class="h-px my-7 border-0 bg-black"></hr>
                        <p className="text-center text-2xl mb-1 mt-10 p-1 max-w-[1000px] mx-auto">
                        More often, do you struggle:
                        <div className="flex flex-row justify-center content-center items-center">
                            <div className="text-2xl mb-1 p-1 max-w-[275px] mx-auto">balancing what others want and what you want</div>
                            <SliderCustomStyles name="Q01" setResponses={setResponses} responses={responses}/> 
                            <div className="text-2xl mb-1 p-1 max-w-[275px] mx-auto">balancing security and exploration</div>
                        </div></p>
                        <hr class="h-px my-7 border-0 bg-black"></hr>
                        <p className="text-center text-2xl mb-1 mt-10 p-1 max-w-[1000px] mx-auto">
                        Are you more often:
                        <div className="flex flex-row justify-center content-center items-center">
                            <div className="text-2xl mb-1 p-1 max-w-[275px] mx-auto">struggling to see what others want</div>
                            <SliderCustomStyles name="Q02" setResponses={setResponses} responses={responses}/> 
                            <div className="text-2xl mb-1 p-1 max-w-[275px] mx-auto">over aware of what others want</div>
                        </div></p>
                        <hr class="h-px my-7 border-0 bg-black"></hr>
                        <p className="text-center text-2xl mb-1 mt-10 p-1 max-w-[1000px] mx-auto">
                        When you encounter a new challenge do you more often:
                        <div className="flex flex-row justify-center content-center items-center">
                            <div className="text-2xl mb-1 p-1 max-w-[275px] mx-auto">Stick to what you know first</div>
                            <SliderCustomStyles name="Q03" setResponses={setResponses} responses={responses}/> 
                            <div className="text-2xl mb-1 p-1 max-w-[275px] mx-auto">try something different</div>
                        </div></p>
                        <hr class="h-px my-7 border-0 bg-black"></hr>
                        <p className="text-center text-2xl mb-1 mt-10 p-1 max-w-[1000px] mx-auto">
                        Completing a task, are you more likely to:
                        <div className="flex flex-row justify-center content-center items-center">
                            <div className="text-2xl mb-1 p-1 max-w-[275px] mx-auto">dismissing how it is done; do what makes people happy</div>
                            <SliderCustomStyles name="Q04" setResponses={setResponses} responses={responses}/> 
                            <div className="text-2xl mb-1 p-1 max-w-[275px] mx-auto">dismissing how people feel about; do what is best for them</div>
                        </div></p>
                        <hr class="h-px my-7 border-0 bg-black"></hr>
                        <p className="text-center text-2xl mb-1 mt-10 p-1 max-w-[1000px] mx-auto">
                        when you are solving a problem, do you first:
                        <div className="flex flex-row justify-center content-center items-center">
                            <div className="text-2xl mb-1 p-1 max-w-[275px] mx-auto">find what has happened before</div>
                            <SliderCustomStyles name="Q05" setResponses={setResponses} responses={responses}/> 
                            <div className="text-2xl mb-1 p-1 max-w-[275px] mx-auto">guess what will happen next</div>
                        </div></p>
                        <hr class="h-px my-7 border-0 bg-black"></hr>
                        <p className="text-center text-2xl mb-1 mt-10 p-1 max-w-[1000px] mx-auto">
                        Would you say your life has changed more from:
                        <div className="flex flex-row justify-center content-center items-center">
                            <div className="text-2xl mb-1 p-1 max-w-[275px] mx-auto">realising you missed an essential piece of information</div>
                            <SliderCustomStyles name="Q06" setResponses={setResponses} responses={responses}/> 
                            <div className="text-2xl mb-1 p-1 max-w-[275px] mx-auto">relationship trouble</div>
                        </div></p>
                        <hr class="h-px my-7 border-0 bg-black"></hr>
                        <p className="text-center text-2xl mb-1 mt-10 p-1 max-w-[1000px] mx-auto">
                        Do you find that your principles of right and wrong:
                        <div className="flex flex-row justify-center content-center items-center">
                            <div className="text-2xl mb-1 p-1 max-w-[275px] mx-auto">are deeply rooted in your individual values</div>
                            <SliderCustomStyles name="Q07" setResponses={setResponses} responses={responses}/> 
                            <div className="text-2xl mb-1 p-1 max-w-[275px] mx-auto">come from a responsibility towards harmony</div>
                        </div></p>
                        <hr class="h-px my-7 border-0 bg-black"></hr>
                        <div className="flex flex-row justify-center content-center">
                            
                            <Link href="/" className='flex'><Button variant="outlined" className="text-2xl mx-4 font-light rounded-full normal-case">Home</Button></Link>
                            <button onClick={() => { handleNextSet(); scrollToTop(); }}><Button variant="outlined" className="text-2xl mx-4 font-light rounded-full normal-case">Next</Button></button>
                        </div>
                    </div>
                )}

                {currentSet === 2 && (
                    // Render questions 8-14
                    <div id="flex flex-col justify-evenly content-center flex-nowrap w-[calc(32rem+1/6)]"> 
                        <hr class="h-px my-7 border-0 bg-black"></hr>
                        <p className="text-center text-2xl mb-1 mt-10 p-1 max-w-[1000px] mx-auto">
                        When observing the world, are you more likely to:
                        <div className="flex flex-row justify-center content-center items-center">
                            <div className="text-2xl mb-1 p-1 max-w-[275px] mx-auto">work with your experiences to make sense of reality</div>
                            <SliderCustomStyles name="Q08" setResponses={setResponses} responses={responses}/> 
                            <div className="text-2xl mb-1 p-1 max-w-[275px] mx-auto">be skeptical of your context, exploring different viewpoints</div>
                        </div></p>
                        <hr class="h-px my-7 border-0 bg-black"></hr>
                        <p className="text-center text-2xl mb-1 mt-10 p-1 max-w-[1000px] mx-auto">
                        Do you find yourself more often:
                        <div className="flex flex-row justify-center content-center items-center">
                            <div className="text-2xl mb-1 p-1 max-w-[275px] mx-auto">oblivious to others opinions and perspectives</div>
                            <SliderCustomStyles name="Q09" setResponses={setResponses} responses={responses}/> 
                            <div className="text-2xl mb-1 p-1 max-w-[275px] mx-auto">referencing others opinions and perspectives</div>
                        </div></p>
                        <hr class="h-px my-7 border-0 bg-black"></hr>
                        <p className="text-center text-2xl mb-1 mt-10 p-1 max-w-[1000px] mx-auto">
                        Are you more likely to:
                        <div className="flex flex-row justify-center content-center items-center">
                            <div className="text-2xl mb-1 p-1 max-w-[275px] mx-auto">conclude and eliminate</div>
                            <SliderCustomStyles name="Q10" setResponses={setResponses} responses={responses}/> 
                            <div className="text-2xl mb-1 p-1 max-w-[275px] mx-auto">embrace new experiences</div>
                        </div></p>
                        <hr class="h-px my-7 border-0 bg-black"></hr>
                        <p className="text-center text-2xl mb-1 mt-10 p-1 max-w-[1000px] mx-auto">
                        Reflecting on yourself, do you have big leaps between:
                        <div className="flex flex-row justify-center content-center items-center">
                            <div className="text-2xl mb-1 p-1 max-w-[275px] mx-auto">either controlling your life & unexpected events happening to you</div>
                            <SliderCustomStyles name="Q11" setResponses={setResponses} responses={responses}/> 
                            <div className="text-2xl mb-1 p-1 max-w-[275px] mx-auto">either sacrificing for others & disengaging from them</div>
                        </div></p>
                        <hr class="h-px my-7 border-0 bg-black"></hr>
                        <p className="text-center text-2xl mb-1 mt-10 p-1 max-w-[1000px] mx-auto">
                        When you were younger, were you pulled towards:
                        <div className="flex flex-row justify-center content-center items-center">
                            <div className="text-2xl mb-1 p-1 max-w-[275px] mx-auto">what you found significant</div>
                            <SliderCustomStyles name="Q12" setResponses={setResponses} responses={responses}/> 
                            <div className="text-2xl mb-1 p-1 max-w-[275px] mx-auto">how things work</div>
                        </div></p>
                        <hr class="h-px my-7 border-0 bg-black"></hr>
                        <p className="text-center text-2xl mb-1 mt-10 p-1 max-w-[1000px] mx-auto">
                        When you explain topics to others do you:
                        <div className="flex flex-row justify-center content-center items-center">
                            <div className="text-2xl mb-1 p-1 max-w-[275px] mx-auto">start with the point</div>
                            <SliderCustomStyles name="Q13" setResponses={setResponses} responses={responses}/> 
                            <div className="text-2xl mb-1 p-1 max-w-[275px] mx-auto">build up to the conclusion with facts</div>
                        </div></p>
                        <hr class="h-px my-7 border-0 bg-black"></hr>
                        <p className="text-center text-2xl mb-1 mt-10 p-1 max-w-[1000px] mx-auto">
                        Are you more comfortable:
                        <div className="flex flex-row justify-center content-center items-center">
                            <div className="text-2xl mb-1 p-1 max-w-[275px] mx-auto">knowing and forming your own opinions</div>
                            <SliderCustomStyles name="Q14" setResponses={setResponses} responses={responses}/> 
                            <div className="text-2xl mb-1 p-1 max-w-[275px] mx-auto">involving others in your decision-making process</div>
                        </div></p>
                        <hr class="h-px my-7 border-0 bg-black"></hr>
                        <div className="flex flex-row justify-center content-center">
                            <button onClick={() => { handlePreviousSet(); scrollToTop(); }}><Button variant="outlined" className="text-2xl mx-4 font-light rounded-full normal-case">Back</Button></button>
                            <button onClick={() => { handleNextSet(); scrollToTop(); }}><Button variant="outlined" className="text-2xl mx-4 font-light rounded-full normal-case">Next</Button></button>
                        </div>
                    </div>
                )}

                {currentSet === 3 && (
                    // Render questions 15-21
                    <div id="flex flex-col justify-evenly content-center flex-nowrap w-[calc(32rem+1/6)]">
                        <hr class="h-px my-7 border-0 bg-black"></hr>
                        <p className="text-center text-2xl mb-1 mt-10 p-1 max-w-[1000px] mx-auto">
                        When you explain topics out loud to people do you:
                        <div className="flex flex-row justify-center content-center items-center">
                            <div className="text-2xl mb-1 p-1 max-w-[275px] mx-auto">present with clear separations</div>
                            <SliderCustomStyles name="Q15" setResponses={setResponses} responses={responses}/> 
                            <div className="text-2xl mb-1 p-1 max-w-[275px] mx-auto">jump from one topic to another</div>
                        </div></p>
                        <hr class="h-px my-7 border-0 bg-black"></hr>
                        <p className="text-center text-2xl mb-1 mt-10 p-1 max-w-[1000px] mx-auto">
                        Do you feel more relief:
                        <div className="flex flex-row justify-center content-center items-center">
                            <div className="text-2xl mb-1 p-1 max-w-[275px] mx-auto">finding the information you have been missing</div>
                            <SliderCustomStyles name="Q16" setResponses={setResponses} responses={responses}/> 
                            <div className="text-2xl mb-1 p-1 max-w-[275px] mx-auto">resolving disagreements with others</div>
                        </div></p>
                        <hr class="h-px my-7 border-0 bg-black"></hr>
                        <p className="text-center text-2xl mb-1 mt-10 p-1 max-w-[1000px] mx-auto">
                        When making decisions do you more often:
                        <div className="flex flex-row justify-center content-center items-center">
                            <div className="text-2xl mb-1 p-1 max-w-[275px] mx-auto">prioritize your personal standards and what you want</div>
                            <SliderCustomStyles name="Q17" setResponses={setResponses} responses={responses}/> 
                            <div className="text-2xl mb-1 p-1 max-w-[275px] mx-auto">seek input from others, consider their opinions</div>
                        </div></p>
                        <hr class="h-px my-7 border-0 bg-black"></hr>
                        <p className="text-center text-2xl mb-1 mt-10 p-1 max-w-[1000px] mx-auto">
                        Is your gut reaction to new experiences:
                        <div className="flex flex-row justify-center content-center items-center">
                            <div className="text-2xl mb-1 p-1 max-w-[275px] mx-auto">contempt</div>
                            <SliderCustomStyles name="Q18" setResponses={setResponses} responses={responses}/> 
                            <div className="text-2xl mb-1 p-1 max-w-[275px] mx-auto">excitement</div>
                        </div></p>
                        <hr class="h-px my-7 border-0 bg-black"></hr>
                        <p className="text-center text-2xl mb-1 mt-10 p-1 max-w-[1000px] mx-auto">
                        In decision-making, do you lean towards:
                        <div className="flex flex-row justify-center content-center items-center">
                            <div className="text-2xl mb-1 p-1 max-w-[275px] mx-auto">practicality in the solution</div>
                            <SliderCustomStyles name="Q19" setResponses={setResponses} responses={responses}/> 
                            <div className="text-2xl mb-1 p-1 max-w-[275px] mx-auto">ensuring logical consistency</div>
                        </div></p>
                        <hr class="h-px my-7 border-0 bg-black"></hr>
                        <p className="text-center text-2xl mb-1 mt-10 p-1 max-w-[1000px] mx-auto">
                        When faced with a challenging problem, do you usually:
                        <div className="flex flex-row justify-center content-center items-center">
                            <div className="text-2xl mb-1 p-1 max-w-[275px] mx-auto">focus on finding a core solution that simplifies the issue</div>
                            <SliderCustomStyles name="Q20" setResponses={setResponses} responses={responses}/> 
                            <div className="text-2xl mb-1 p-1 max-w-[275px] mx-auto">delve into the intricacies of the problem, considering multiple facets</div>
                        </div></p>
                        <hr class="h-px my-7 border-0 bg-black"></hr>
                        <p className="text-center text-2xl mb-1 mt-10 p-1 max-w-[1000px] mx-auto">
                        Are you more inclined to focus on:
                        <div className="flex flex-row justify-center content-center items-center">
                            <div className="text-2xl mb-1 p-1 max-w-[275px] mx-auto">things, information, and worldviews</div>
                            <SliderCustomStyles name="Q21" setResponses={setResponses} responses={responses}/> 
                            <div className="text-2xl mb-1 p-1 max-w-[275px] mx-auto">people, fairness, and interpersonal dynamics</div>
                        </div></p>
                        <hr class="h-px my-7 border-0 bg-black"></hr>
                        <div className="flex flex-row justify-center content-center">
                            <button onClick={() => { handlePreviousSet(); scrollToTop(); }}><Button variant="outlined" className="text-2xl mx-4 font-light rounded-full normal-case">Back</Button></button>
                            <button onClick={handleSubmit}><Button variant="outlined" className="text-2xl mx-4 font-light rounded-full normal-case">Submit</Button></button>
                        </div>
                    </div>
                )}

            </div>
            

            <div className="flex flex-row justify-center content-center text-8xl mb-7">
                {variable1}{variable2}:{variable3}
            </div>

            <div className="flex flex-row justify-center content-center">
                <div className="typeExamples"></div>
            </div>
            
            <Footer />
        </main>
    )
}
