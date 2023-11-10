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
      <div className="w-[275px]">
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

    // Calculate Vi, Ve, Ri, Re based on A_C
    if (A_C < 0) {
      Vi += -A_C;
      Ve += -A_C;
    } else if (A_C > 0) {
      Ri += A_C;
      Re += A_C;
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
                <div className="bg-mediumBlack flex w-screen">
                    <div className="flex flex-col md:flex-row text-center"> 
                    <Link href="/">
                        <img src="/images/BYCOG_Direct_Logo.png" className="w-[205.02px] h-12 mt-9 ml-9 md:m-9 transition"/>
                    </Link>
                    <div className="flex flex-col place-content-center w-screen md:w-auto"> 
                        <p className="text-white text-3xl my-3">Your Free Test</p>
                    </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-row justify-center content-center text-8xl mb-7">
                <p className="text-center text-base lg:text-2xl mt-10 px-10 max-w-[1000px] mx-auto">
                Answer honestly about yourself; try to reflect on your actions and how you behaved when you were younger. Focus on the trends of your life, rather than specific events.
                </p>
            </div>
            
            <div className="flex flex-row justify-center content-center text-base lg:text-2xl">
                {/* Conditional rendering based on the current set */}

                {currentSet === 1 && (
                    // Render questions 1-7
                    <div class="flex flex-col justify-evenly content-center overflow-hidden">
                        <hr class="h-px mt-3 border-0 bg-black"></hr>
                        <p className="text-center mb-1 lg:mt-10 p-5 mx-auto">
                        More often, do you struggle:
                        <div className="flex flex-col lg:flex-row items-center justify-center">
                            <div className="flex flex-row mx-auto my-4 items-center">
                                <div className="max-w-[275px] lg:w-[275px] mb-1 py-1 px-4">balancing what others want and what you want</div>
                                <div className="p-4 lg:hidden">or</div>
                                <div className="max-w-[275px] lg:w-[275px] lg:hidden mb-1 px-4">balancing security and exploration</div>
                            </div>
                            <SliderCustomStyles name="Q01" setResponses={setResponses} responses={responses}/> 
                            <div className="hidden lg:inline-block mb-1 p-4 w-[275px] mx-auto">balancing security and exploration</div>
                        </div>
                        </p>
                        <hr class="h-px mt-3 border-0 bg-black"></hr>
                        <p className="text-center mb-1 lg:mt-10 p-5 mx-auto">
                        Are you more often:
                        <div className="flex flex-col lg:flex-row items-center justify-center">
                            <div className="flex flex-row mx-auto my-4 items-center">
                                <div className="max-w-[275px] lg:w-[275px] mb-1 py-1 px-4">struggling to see what others want</div>
                                <div className="p-4 lg:hidden">or</div>
                                <div className="max-w-[275px] lg:w-[275px] lg:hidden mb-1 py-1 px-4">over aware of what others want</div>
                            </div>
                            <SliderCustomStyles name="Q02" setResponses={setResponses} responses={responses}/> 
                            <div className="hidden lg:inline-block mb-1 p-4 w-[275px] mx-auto">over aware of what others want</div>
                        </div>
                        </p>
                        <hr class="h-px mt-3 border-0 bg-black"></hr>
                        <p className="text-center mb-1 lg:mt-10 p-5 mx-auto">
                        When you encounter a new challenge do you more often:
                        <div className="flex flex-col lg:flex-row items-center justify-center">
                            <div className="flex flex-row mx-auto my-4 items-center">
                                <div className="max-w-[275px] lg:w-[275px] mb-1 py-1 px-4">Apply a solution you know</div>
                                <div className="p-4 lg:hidden">or</div>
                                <div className="max-w-[275px] lg:w-[275px] lg:hidden mb-1 py-1 px-4">explore alternative solutions</div>
                            </div>
                            <SliderCustomStyles name="Q03" setResponses={setResponses} responses={responses}/> 
                            <div className="hidden lg:inline-block mb-1 p-4 w-[275px] mx-auto">explore alternative solutions
                            </div>
                        </div>
                        </p>
                        <hr class="h-px mt-3 border-0 bg-black"></hr>
                        <p className="text-center mb-1 lg:mt-10 p-5 mx-auto">
                        Completing a task, are you more likely to:
                        <div className="flex flex-col lg:flex-row items-center justify-center">
                            <div className="flex flex-row mx-auto my-4 items-center">
                                <div className="max-w-[275px] lg:w-[275px] mb-1 py-1 px-4">dismissing how it is done; do what makes people happy</div>
                                <div className="p-4 lg:hidden">or</div>
                                <div className="max-w-[275px] lg:w-[275px] lg:hidden mb-1 py-1 px-4">dismissing how people feel about; do what is best for them</div>
                            </div>
                            <SliderCustomStyles name="Q02" setResponses={setResponses} responses={responses}/> 
                            <div className="hidden lg:inline-block mb-1 p-4 w-[275px] mx-auto">dismissing how people feel about; do what is best for them</div>
                        </div>
                        </p>
                        <hr class="h-px mt-3 border-0 bg-black"></hr>
                        <p className="text-center mb-1 lg:mt-10 p-5 mx-auto">
                        When you are solving a problem, do you first:
                        <div className="flex flex-col lg:flex-row items-center justify-center">
                            <div className="flex flex-row mx-auto my-4 items-center">
                                <div className="max-w-[275px] lg:w-[275px] mb-1 py-1 px-4">find what has happened before</div>
                                <div className="p-4 lg:hidden">or</div>
                                <div className="max-w-[275px] lg:w-[275px] lg:hidden mb-1 py-1 px-4">guess what will happen next</div>
                            </div>
                            <SliderCustomStyles name="Q05" setResponses={setResponses} responses={responses}/> 
                            <div className="hidden lg:inline-block mb-1 p-4 w-[275px] mx-auto">guess what will happen next</div>
                        </div>
                        </p>
                        <hr class="h-px mt-3 border-0 bg-black"></hr>
                        <p className="text-center mb-1 lg:mt-10 p-5 mx-auto">
                        Would you say your life has changed more from:
                        <div className="flex flex-col lg:flex-row items-center justify-center">
                            <div className="flex flex-row mx-auto my-4 items-center">
                                <div className="max-w-[275px] lg:w-[275px] mb-1 py-1 px-4">realising you missed an essential piece of information</div>
                                <div className="p-4 lg:hidden">or</div>
                                <div className="max-w-[275px] lg:w-[275px] lg:hidden mb-1 py-1 px-4">a social feud with other people</div>
                            </div>
                            <SliderCustomStyles name="Q06" setResponses={setResponses} responses={responses}/> 
                            <div className="hidden lg:inline-block mb-1 p-4 w-[275px] mx-auto">a social feud with other people</div>
                        </div>
                        </p>
                        <hr class="h-px mt-3 border-0 bg-black"></hr>
                        <p className="text-center mb-1 lg:mt-10 p-5 mx-auto">
                        Do you find that your principles of right and wrong:
                        <div className="flex flex-col lg:flex-row items-center justify-center">
                            <div className="flex flex-row mx-auto my-4 items-center">
                                <div className="max-w-[275px] lg:w-[275px] mb-1 py-1 px-4">are deeply rooted in your individual values</div>
                                <div className="p-4 lg:hidden">or</div>
                                <div className="max-w-[275px] lg:w-[275px] lg:hidden mb-1 py-1 px-4">come from a responsibility towards harmony</div>
                            </div>
                            <SliderCustomStyles name="Q07" setResponses={setResponses} responses={responses}/> 
                            <div className="hidden lg:inline-block mb-1 p-4 w-[275px] mx-auto">come from a responsibility towards harmony</div>
                        </div>
                        </p>
                        <hr class="h-px mt-3 border-0 bg-black"></hr>
                        <div className="flex flex-row justify-center content-center">
                            <Link href="/" className='flex'><Button variant="outlined" className="text-2xl mx-4 my-7 font-light rounded-full normal-case">Home</Button></Link>
                            <button onClick={() => { handleNextSet(); scrollToTop(); }}><Button variant="outlined" className="text-2xl mx-4 my-7 font-light rounded-full normal-case">Next</Button></button>
                        </div>
                    </div>
                )}

                {currentSet === 2 && (
                    // Render questions 8-14
                    <div className="flex flex-col justify-evenly content-center overflow-hidden">
                        <hr class="h-px mt-3 border-0 bg-black"></hr>
                        <p className="text-center mb-1 lg:mt-10 p-5">
                        When observing the world, are you more likely to:
                        <div className="flex flex-col lg:flex-row items-center justify-center">
                            <div className="flex flex-row mx-auto my-4 items-center">
                                <div className="max-w-[275px] lg:w-[275px] mb-1 py-1 px-4">work with your experiences to make sense of reality</div>
                                <div className="p-4 lg:hidden">or</div>
                                <div className="max-w-[275px] lg:w-[275px] lg:hidden mb-1 px-4">be skeptical of your context, exploring different viewpoints</div>
                            </div>
                            <SliderCustomStyles name="Q08" setResponses={setResponses} responses={responses}/> 
                            <div className="hidden lg:inline-block mb-1 p-4 w-[275px] mx-auto">be skeptical of your context, exploring different viewpoints</div>
                        </div>
                        </p>
                        <hr class="h-px mt-3 border-0 bg-black"></hr>
                        <p className="text-center mb-1 lg:mt-10 p-5">
                        Do you find yourself more often:
                        <div className="flex flex-col lg:flex-row items-center justify-center">
                            <div className="flex flex-row mx-auto my-4 items-center">
                                <div className="max-w-[275px] lg:w-[275px] mb-1 py-1 px-4">oblivious to others opinions and perspectives</div>
                                <div className="p-4 lg:hidden">or</div>
                                <div className="max-w-[275px] lg:w-[275px] lg:hidden mb-1 px-4">referencing others opinions and perspectives</div>
                            </div>
                            <SliderCustomStyles name="Q09" setResponses={setResponses} responses={responses}/> 
                            <div className="hidden lg:inline-block mb-1 p-4 w-[275px] mx-auto">referencing others opinions and perspectives</div>
                        </div>
                        </p>
                        <hr class="h-px mt-3 border-0 bg-black"></hr>
                        <p className="text-center mb-1 lg:mt-10 p-5">
                        Are you more likely to:
                        <div className="flex flex-col lg:flex-row items-center justify-center">
                            <div className="flex flex-row mx-auto my-4 items-center">
                                <div className="max-w-[275px] lg:w-[275px] mb-1 py-1 px-4">eliminate potential options</div>
                                <div className="p-4 lg:hidden">or</div>
                                <div className="max-w-[275px] lg:w-[275px] lg:hidden mb-1 px-4">embrace new experiences</div>
                            </div>
                            <SliderCustomStyles name="Q10" setResponses={setResponses} responses={responses}/> 
                            <div className="hidden lg:inline-block mb-1 p-4 w-[275px] mx-auto">embrace new experiences</div>
                        </div>
                        </p>
                        <hr class="h-px mt-3 border-0 bg-black"></hr>
                        <p className="text-center mb-1 lg:mt-10 p-5">
                        Reflecting on yourself, do you have big leaps between:
                        <div className="flex flex-col lg:flex-row items-center justify-center">
                            <div className="flex flex-row mx-auto my-4 items-center">
                                <div className="max-w-[275px] lg:w-[275px] mb-1 py-1 px-4">either controlling your life & unexpected events happening to you</div>
                                <div className="p-4 lg:hidden">or</div>
                                <div className="max-w-[275px] lg:w-[275px] lg:hidden mb-1 px-4">either sacrificing for others & disengaging from them</div>
                            </div>
                            <SliderCustomStyles name="Q11" setResponses={setResponses} responses={responses}/> 
                            <div className="hidden lg:inline-block mb-1 p-4 w-[275px] mx-auto">either sacrificing for others & disengaging from them</div>
                        </div>
                        </p>
                        <hr class="h-px mt-3 border-0 bg-black"></hr>
                        <p className="text-center mb-1 lg:mt-10 p-5">
                        When you were younger, were you pulled towards:
                        <div className="flex flex-col lg:flex-row items-center justify-center">
                            <div className="flex flex-row mx-auto my-4 items-center">
                                <div className="max-w-[275px] lg:w-[275px] mb-1 py-1 px-4">what you found significant</div>
                                <div className="p-4 lg:hidden">or</div>
                                <div className="max-w-[275px] lg:w-[275px] lg:hidden mb-1 px-4">how things work</div>
                            </div>
                            <SliderCustomStyles name="Q12" setResponses={setResponses} responses={responses}/> 
                            <div className="hidden lg:inline-block mb-1 p-4 w-[275px] mx-auto">how things work</div>
                        </div>
                        </p>
                        <hr class="h-px mt-3 border-0 bg-black"></hr>
                        <p className="text-center mb-1 lg:mt-10 p-5">
                        When you explain topics to others do you:
                        <div className="flex flex-col lg:flex-row items-center justify-center">
                            <div className="flex flex-row mx-auto my-4 items-center">
                                <div className="max-w-[275px] lg:w-[275px] mb-1 py-1 px-4">start with the main point</div>
                                <div className="p-4 lg:hidden">or</div>
                                <div className="max-w-[275px] lg:w-[275px] lg:hidden mb-1 px-4">build up to the conclusion with facts</div>
                            </div>
                            <SliderCustomStyles name="Q13" setResponses={setResponses} responses={responses}/> 
                            <div className="hidden lg:inline-block mb-1 p-4 w-[275px] mx-auto">build up to the conclusion with facts</div>
                        </div>
                        </p>
                        <hr class="h-px mt-3 border-0 bg-black"></hr>
                        <p className="text-center mb-1 lg:mt-10 p-5">
                        Are you more comfortable:
                        <div className="flex flex-col lg:flex-row items-center justify-center">
                            <div className="flex flex-row mx-auto my-4 items-center">
                                <div className="max-w-[275px] lg:w-[275px] mb-1 py-1 px-4">knowing and forming your own opinions</div>
                                <div className="p-4 lg:hidden">or</div>
                                <div className="max-w-[275px] lg:w-[275px] lg:hidden mb-1 px-4">involving others in your decision-making process</div>
                            </div>
                            <SliderCustomStyles name="Q14" setResponses={setResponses} responses={responses}/> 
                            <div className="hidden lg:inline-block mb-1 p-4 w-[275px] mx-auto">involving others in your decision-making process</div>
                        </div>
                        </p>
                        <hr class="h-px mt-3 border-0 bg-black"></hr>
                        <div className="flex flex-row justify-center content-center">
                            <button onClick={() => { handlePreviousSet(); scrollToTop(); }}><Button variant="outlined" className="text-2xl mx-4 my-7 font-light rounded-full normal-case">Back</Button></button>
                            <button onClick={() => { handleNextSet(); scrollToTop(); }}><Button variant="outlined" className="text-2xl mx-4 my-7 font-light rounded-full normal-case">Next</Button></button>
                        </div>
                    </div>
                )}

                {currentSet === 3 && (
                    // Render questions 15-21
                    <div className="flex flex-col justify-evenly content-center overflow-hidden">
                        <hr class="h-px mt-3 border-0 bg-black"></hr>
                        <p className="text-center mb-1 lg:mt-10 p-5 mx-auto">
                        When you explain topics out loud to people do you:
                        <div className="flex flex-col lg:flex-row items-center justify-center">
                            <div className="flex flex-row mx-auto my-4 items-center">
                                <div className="max-w-[275px] lg:w-[275px] mb-1 py-1 px-4">present with clear separations</div>
                                <div className="p-4 lg:hidden">or</div>
                                <div className="max-w-[275px] lg:w-[275px] lg:hidden mb-1 px-4">jump from one topic to another</div>
                            </div>
                            <SliderCustomStyles name="Q15" setResponses={setResponses} responses={responses}/> 
                            <div className="hidden lg:inline-block mb-1 p-4 w-[275px] mx-auto">jump from one topic to another</div>
                        </div>
                        </p>
                        <hr class="h-px mt-3 border-0 bg-black"></hr>
                        <p className="text-center mb-1 lg:mt-10 p-5 mx-auto">
                        Do you feel more relief:
                        <div className="flex flex-col lg:flex-row items-center justify-center">
                            <div className="flex flex-row mx-auto my-4 items-center">
                                <div className="max-w-[275px] lg:w-[275px] mb-1 py-1 px-4">finding the information you have been missing</div>
                                <div className="p-4 lg:hidden">or</div>
                                <div className="max-w-[275px] lg:w-[275px] lg:hidden mb-1 px-4">resolving disagreements with others</div>
                            </div>
                            <SliderCustomStyles name="Q16" setResponses={setResponses} responses={responses}/> 
                            <div className="hidden lg:inline-block mb-1 p-4 w-[275px] mx-auto">resolving disagreements with others</div>
                        </div>
                        </p>
                        <hr class="h-px mt-3 border-0 bg-black"></hr>
                        <p className="text-center mb-1 lg:mt-10 p-5 mx-auto">
                        When making decisions do you more often:
                        <div className="flex flex-col lg:flex-row items-center justify-center">
                            <div className="flex flex-row mx-auto my-4 items-center">
                                <div className="max-w-[275px] lg:w-[275px] mb-1 py-1 px-4">prioritize your personal standards and what you want</div>
                                <div className="p-4 lg:hidden">or</div>
                                <div className="max-w-[275px] lg:w-[275px] lg:hidden mb-1 px-4">seek input from others, consider their opinions</div>
                            </div>
                            <SliderCustomStyles name="Q17" setResponses={setResponses} responses={responses}/> 
                            <div className="hidden lg:inline-block mb-1 p-4 w-[275px] mx-auto">seek input from others, consider their opinions</div>
                        </div>
                        </p>
                        <hr class="h-px mt-3 border-0 bg-black"></hr>
                        <p className="text-center mb-1 lg:mt-10 p-5 mx-auto">
                        Is your gut reaction to new experiences:
                        <div className="flex flex-col lg:flex-row items-center justify-center">
                            <div className="flex flex-row mx-auto my-4 items-center">
                                <div className="max-w-[275px] lg:w-[275px] mb-1 py-1 px-4">contempt</div>
                                <div className="p-4 lg:hidden">or</div>
                                <div className="max-w-[275px] lg:w-[275px] lg:hidden mb-1 px-4">excitement</div>
                            </div>
                            <SliderCustomStyles name="Q18" setResponses={setResponses} responses={responses}/> 
                            <div className="hidden lg:inline-block mb-1 p-4 w-[275px] mx-auto">excitement</div>
                        </div>
                        </p>
                        <hr class="h-px mt-3 border-0 bg-black"></hr>
                        <p className="text-center mb-1 lg:mt-10 p-5 mx-auto">
                        In decision-making, do you lean towards:
                        <div className="flex flex-col lg:flex-row items-center justify-center">
                            <div className="flex flex-row mx-auto my-4 items-center">
                                <div className="max-w-[275px] lg:w-[275px] mb-1 py-1 px-4">practicality in the solution</div>
                                <div className="p-4 lg:hidden">or</div>
                                <div className="max-w-[275px] lg:w-[275px] lg:hidden mb-1 px-4">ensuring logical consistency</div>
                            </div>
                            <SliderCustomStyles name="Q19" setResponses={setResponses} responses={responses}/> 
                            <div className="hidden lg:inline-block mb-1 p-4 w-[275px] mx-auto">ensuring logical consistency</div>
                        </div>
                        </p>
                        <hr class="h-px mt-3 border-0 bg-black"></hr>
                        <p className="text-center mb-1 lg:mt-10 p-5 mx-auto">
                        When faced with a challenging problem, do you usually:
                        <div className="flex flex-col lg:flex-row items-center justify-center">
                            <div className="flex flex-row mx-auto my-4 items-center">
                                <div className="max-w-[275px] lg:w-[275px] mb-1 py-1 px-4">focus on finding a core solution that simplifies the issue</div>
                                <div className="p-4 lg:hidden">or</div>
                                <div className="max-w-[275px] lg:w-[275px] lg:hidden mb-1 px-4">delve into the intricacies of the problem, considering multiple facets</div>
                            </div>
                            <SliderCustomStyles name="Q20" setResponses={setResponses} responses={responses}/> 
                            <div className="hidden lg:inline-block mb-1 p-4 w-[275px] mx-auto">delve into the intricacies of the problem, considering multiple facets</div>
                        </div>
                        </p>
                        <hr class="h-px mt-3 border-0 bg-black"></hr>
                        <p className="text-center mb-1 lg:mt-10 p-5 mx-auto">
                        Are you more inclined to focus on:
                        <div className="flex flex-col lg:flex-row items-center justify-center">
                            <div className="flex flex-row mx-auto my-4 items-center">
                                <div className="max-w-[275px] lg:w-[275px] mb-1 py-1 px-4">things, information, and worldviews</div>
                                <div className="p-4 lg:hidden">or</div>
                                <div className="max-w-[275px] lg:w-[275px] lg:hidden mb-1 px-4">people, fairness, and interpersonal dynamics</div>
                            </div>
                            <SliderCustomStyles name="Q21" setResponses={setResponses} responses={responses}/> 
                            <div className="hidden lg:inline-block mb-1 p-4 w-[275px] mx-auto">people, fairness, and interpersonal dynamics</div>
                        </div>
                        </p>
                        <hr class="h-px mt-3 border-0 bg-black"></hr>
                        <div className="flex flex-row justify-center content-center">
                            <button onClick={() => { handlePreviousSet(); scrollToTop(); }}><Button variant="outlined" className="text-2xl mx-4 my-7 font-light rounded-full normal-case">Back</Button></button>
                            <button onClick={handleSubmit}><Button variant="outlined" className="text-2xl mx-4 my-7 font-light rounded-full normal-case">Submit</Button></button>
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
