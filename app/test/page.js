'use client'
import Link from 'next/link';
import Footer from '@components/footer';
import { Slider } from '@material-tailwind/react';
import React, { useState } from 'react';

export function SliderCustomStyles({ id, name, setResponses }) {
  const handleSliderChange = (value) => {
    setResponses((prevResponses) => ({
      ...prevResponses,
      [name]: value,
    }));
  };

  return (
    <div className="w-96">
      <Slider
        size="lg"
        defaultValue={50}
        className="text-black"
        thumbClassName="[&::-moz-range-thumb]:rounded-none [&::-webkit-slider-thumb]:rounded-sm [&::-moz-range-thumb]:-mt-[6px] [&::-webkit-slider-thumb]:-mt-[3px]"
        trackClassName="[&::-webkit-slider-runnable-track]:bg-black rounded-none"
        onChange={handleSliderChange}
      />
    </div>
  );
}

export default function Page() {
  const [responses, setResponses] = useState({});
  const [variable1, setVariable1] = useState(''); // Initialize variable1 state
  const [variable2, setVariable2] = useState(''); // Initialize variable2 state

  const handleSubmit = () => {
    // Calculate categories based on the responses
    const categories = {}; // Store categories for each question here
    // Perform the category calculation logic for each question

    // Calculate O_D based on responses
    const O_D =
      responses.Q01 +
      responses.Q06 +
      responses.Q11 +
      responses.Q16 +
      responses.Q21;
    const S_T = responses.Q02 + responses.Q14 + responses.Q09 + responses.Q17;
    const K_N = responses.Q03 + responses.Q15 + responses.Q10 + responses.Q18;
    const V_R = responses.Q04 + responses.Q12;
    const A_C = responses.Q05 + responses.Q13;
    const ViRe = responses.Q07 + responses.Q19;
    const AiCe = responses.Q08 + responses.Q20;

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
      Vi = -S_T;
      Ri = -S_T;
    } else if (S_T > 0) {
      Ve = S_T;
      Re = S_T;
    }

    // Calculate Ai and Ci based on K_N
    if (K_N < 0) {
      Ai = -K_N;
      Ci = -K_N;
    } else if (K_N > 0) {
      Ae = K_N;
      Ce = K_N;
    }

    // Calculate Vi, Ve, Ri, Re based on V_R
    if (V_R < 0) {
      Vi = -V_R;
      Ve = -V_R;
    } else if (V_R > 0) {
      Ri = V_R;
      Re = V_R;
    }

    // Calculate Vi, Ve, Ri, Re based on A_C
    if (A_C < 0) {
      Vi = -A_C;
      Ve = -A_C;
    } else if (A_C > 0) {
      Ri = A_C;
      Re = A_C;
    }

    // Calculate Vi, Re, Ri, Ve based on ViRe
    if (ViRe < 0) {
      Vi = -ViRe;
      Re = -ViRe;
    } else if (ViRe > 0) {
      Ri = ViRe;
      Ve = ViRe;
    }

    // Calculate Ai, Ce, Ci, Ae based on AiCe
    if (AiCe < 0) {
      Ai = -AiCe;
      Ce = -AiCe;
    } else if (AiCe > 0) {
      Ci = AiCe;
      Ae = AiCe;
    }

    // Calculate variable1 based on O_D
    let calculatedVariable1;
    if (O_D < 0) {
      // Choose the larger of Ai, Ci, Ae, Ce
      if (Ai >= Ci && Ai >= Ae && Ai >= Ce) {
        calculatedVariable1 = 'Ai';
      } else if (Ci >= Ai && Ci >= Ae && Ci >= Ce) {
        calculatedVariable1 = 'Ci';
      } else if (Ae >= Ai && Ae >= Ci && Ae >= Ce) {
        calculatedVariable1 = 'Ae';
      } else {
        calculatedVariable1 = 'Ce';
      }
    } else if (O_D > 0) {
      // Choose the larger of Vi, Ri, Ve, Re
      if (Vi >= Ri && Vi >= Ve && Vi >= Re) {
        calculatedVariable1 = 'Vi';
      } else if (Ri >= Vi && Ri >= Ve && Ri >= Re) {
        calculatedVariable1 = 'Ri';
      } else if (Ve >= Vi && Ve >= Ri && Ve >= Re) {
        calculatedVariable1 = 'Ve';
      } else {
        calculatedVariable1 = 'Re';
      }
    }

    // Calculate variable2 based on O_D
    let calculatedVariable2;
    if (O_D < 0) {
      // Choose the larger of Vi, Ri, Ve, Re
      if (Vi >= Ri && Vi >= Ve && Vi >= Re) {
        calculatedVariable2 = 'Vi';
      } else if (Ri >= Vi && Ri >= Ve && Ri >= Re) {
        calculatedVariable2 = 'Ri';
      } else if (Ve >= Vi && Ve >= Ri && Ve >= Re) {
        calculatedVariable2 = 'Ve';
      } else {
        calculatedVariable2 = 'Re';
      }
    } else if (O_D > 0) {
      // Choose the larger of Ai, Ci, Ae, Ce
      if (Ai >= Ci && Ai >= Ae && Ai >= Ce) {
        calculatedVariable2 = 'Ai';
      } else if (Ci >= Ai && Ci >= Ae && Ci >= Ce) {
        calculatedVariable2 = 'Ci';
      } else if (Ae >= Ai && Ae >= Ci && Ae >= Ce) {
        calculatedVariable2 = 'Ae';
      } else {
        calculatedVariable2 = 'Ce';
      }
    }

    // Set the calculated values of variable1 and variable2
    setVariable1(calculatedVariable1);
    setVariable2(calculatedVariable2);
  };








    return (
        
        <main>
            {/* Render the SliderCustomStyles component with the setResponses prop */}
            <SliderCustomStyles id="sliderQ01" name="Q01" setResponses={setResponses} />
            
            <div className="flex flex-row justify-center content-center">
                <div className="bg-darkGray h-32 w-screen">
                    <div className="flex flex-row text-center"> 
                        <img src="/images/BYCOG_Direct_Logo.png" className="w-auto h-12 m-9 transition"/>
                        <p className="text-white mt-10 text-4xl">Your Free Test</p>
                    </div>
                </div>
            </div>

            {/* <!-- Questions 1 - 10 --> */}
            <div className="flex flex-row justify-center content-center">
                <div id="flex flex-col justify-evenly content-center flex-nowrap w-[calc(32rem+1/6)]">
                    
                    <p className="text-center text-2xl mb-1 mt-10 p-1 max-w-[1000px] mx-auto">
                    More often, do you:
                    <div className="flex flex-row justify-center content-center items-center">
                        <div className="text-2xl mb-1 p-1 max-w-[275px] mx-auto">balance what others want and what you want</div>
                        <SliderCustomStyles id="sliderQ01" name="Q01"/> 
                        <div className="text-2xl mb-1 p-1 max-w-[275px] mx-auto">balance preventing possiblities and exploring possiblities</div>
                    </div></p>

                    <p className="text-center text-2xl mb-1 mt-10 p-1 max-w-[1000px] mx-auto">
                    Are you more often:
                    <div className="flex flex-row justify-center content-center items-center">
                        <div className="text-2xl mb-1 p-1 max-w-[275px] mx-auto">struggling to see what others want</div>
                        <SliderCustomStyles id="sliderQ02" name="Q02"/> 
                        <div className="text-2xl mb-1 p-1 max-w-[275px] mx-auto">over aware of what others want</div>
                    </div></p>

                    <p className="text-center text-2xl mb-1 mt-10 p-1 max-w-[1000px] mx-auto">
                    When you encounter a new challenge do you more often:
                    <div className="flex flex-row justify-center content-center items-center">
                        <div className="text-2xl mb-1 p-1 max-w-[275px] mx-auto">Stick to what you know first</div>
                        <SliderCustomStyles id="sliderQ03" name="Q03"/> 
                        <div className="text-2xl mb-1 p-1 max-w-[275px] mx-auto">try something different</div>
                    </div></p>

                    <p className="text-center text-2xl mb-1 mt-10 p-1 max-w-[1000px] mx-auto">
                    After making a tough decisions, are you more likely to regret:
                    <div className="flex flex-row justify-center content-center items-center">
                        <div className="text-2xl mb-1 p-1 max-w-[275px] mx-auto">not figuring out how it will work soon enough</div>
                        <SliderCustomStyles id="sliderQ04" name="Q04"/> 
                        <div className="text-2xl mb-1 p-1 max-w-[275px] mx-auto">not doing the right thing</div>
                    </div></p>

                    <p className="text-center text-2xl mb-1 mt-10 p-1 max-w-[1000px] mx-auto">
                    when you are solving a problem, do you try to first:
                    <div className="flex flex-row justify-center content-center items-center">
                        <div className="text-2xl mb-1 p-1 max-w-[275px] mx-auto">find what has happened before</div>
                        <SliderCustomStyles id="sliderQ05" name="Q05"/> 
                        <div className="text-2xl mb-1 p-1 max-w-[275px] mx-auto">guess what will happen next</div>
                    </div></p>

                    <p className="text-center text-2xl mb-1 mt-10 p-1 max-w-[1000px] mx-auto">
                    Do you find yourself more often:
                    <div className="flex flex-row justify-center content-center items-center">
                        <div className="text-2xl mb-1 p-1 max-w-[275px] mx-auto">holding a grudge against someone</div>
                        <SliderCustomStyles id="sliderQ06" name="Q06"/> 
                        <div className="text-2xl mb-1 p-1 max-w-[275px] mx-auto">realising you missed an essential piece of information</div>
                    </div></p>

                    <p className="text-center text-2xl mb-1 mt-10 p-1 max-w-[1000px] mx-auto">
                    Do you find that your principles of right and wrong:
                    <div className="flex flex-row justify-center content-center items-center">
                        <div className="text-2xl mb-1 p-1 max-w-[275px] mx-auto">are deeply rooted in your individual values</div>
                        <SliderCustomStyles id="sliderQ07" name="Q07"/> 
                        <div className="text-2xl mb-1 p-1 max-w-[275px] mx-auto">stem from a sense of responsibility towards harmony</div>
                    </div></p>

                    <p className="text-center text-2xl mb-1 mt-10 p-1 max-w-[1000px] mx-auto">
                    When observing the world, are you more likely to:
                    <div className="flex flex-row justify-center content-center items-center">
                        <div className="text-2xl mb-1 p-1 max-w-[275px] mx-auto">work with your experiences to make sense of reality</div>
                        <SliderCustomStyles id="sliderQ08" name="Q08"/> 
                        <div className="text-2xl mb-1 p-1 max-w-[275px] mx-auto">be skeptical of your context, exploring different viewpoints</div>
                    </div></p>

                    <p className="text-center text-2xl mb-1 mt-10 p-1 max-w-[1000px] mx-auto">
                    Do you find yourself more often:
                    <div className="flex flex-row justify-center content-center items-center">
                        <div className="text-2xl mb-1 p-1 max-w-[275px] mx-auto">alienating others opinions and perspectives</div>
                        <SliderCustomStyles id="sliderQ09" name="Q09"/> 
                        <div className="text-2xl mb-1 p-1 max-w-[275px] mx-auto">referencing others opinions and perspectives</div>
                    </div></p>

                    <p className="text-center text-2xl mb-1 mt-10 p-1 max-w-[1000px] mx-auto">
                    Are you more likely to:
                    <div className="flex flex-row justify-center content-center items-center">
                        <div className="text-2xl mb-1 p-1 max-w-[275px] mx-auto">conclude and eliminate</div>
                        <SliderCustomStyles id="sliderQ10" name="Q10"/> 
                        <div className="text-2xl mb-1 p-1 max-w-[275px] mx-auto">embrace new experiences</div>
                    </div></p>
                </div>
            </div>
            <div className="flex flex-row justify-center content-center">
                <button onClick={handleSubmit} className="btn btn-primary mt-4">
                Submit
                </button>
            </div>
            <div className="result">
                {variable1} {variable2}
            </div>

            <div className="flex flex-row justify-center content-center">
                <div className="typeExamples"></div>
            </div>
            
            <Footer />
        </main>
    )
}