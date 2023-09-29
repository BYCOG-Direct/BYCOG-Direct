"use client"
import Image from 'next/image';
import React, { useState } from 'react'
import Script from 'next/script'

const emptyType = {
    // Convert to OPS
    opsType: false,
    textType1: false,
    textType2: false,

    // Left checkbox status
    identifierModule: false,
    selfModule: false,
    knownModule: false,
    valueModule: false,
    abstractModule: false,
    intermediateModule: false,
    developerModule: false,

    // Right checkbox status
    evaluatorModule: false,
    othersModule: false,
    newsModule: false,
    reasonModule: false,
    concreteModule: false,
    extremeModule: false,
    navigatorModule: false,

    // Solid checkbox status
    solidSelfModule: false,
    solidKnownModule: false,
    solidOthersModule: false,
    solidNewModule: false,
}

const Module = () => {
    const [type, setType] = useState(emptyType);

    const handleCheckboxChange = (event) => {
        // Get ID of the checkbox
        const checkboxName = event.target.id;
        // Get ID of the counterpart checkbox
        const counterpartBoxName = event.target.getAttribute('data-uncheck');

        setType({
            ...type,                                // Copy the old fields
            [counterpartBoxName]: false,            // Falsify the counterpart field
            [checkboxName]: event.target.checked,   // Trueify the current field
        });

        drawModules();
    };

    const drawModules = () => {
        // Others, Self, New, Known
        const osnk = [0,0,0,0];

        setCrossTetherStyle("opacity-[0] rotate-[0deg]")
        
        // Add numbers to osnk array depending on what is true/false in type!

        // Evaluator or Identifier
        if (type['evaluatorModule']) {
            osnk[0] += 3;
            osnk[1] += 3;
            setCrossTetherStyle("opacity-[1] rotate-[0deg]")
        } else if (type['identifierModule']) {
            osnk[2] += 3;
            osnk[3] += 3;
            setCrossTetherStyle("opacity-[1] rotate-[90deg]")
        }

        // Others or Self
        if (type['othersModule']) {
            osnk[0] += 1;
            osnk[1] -= 1;
        } else if (type['selfModule']) {
            osnk[1] += 1;
            osnk[0] -= 1;
        }

        // New or Known
        if (type['newsModule']) {
            osnk[2] += 1;
            osnk[3] -= 1;
        } else if (type['knownModule']) {
            osnk[3] += 1;
            osnk[2] -= 1;
        }

        console.log(osnk);

        // Others styling, that is osnk[0]
        switch (osnk[0]) {
            case 4: // Major Hook
                setOthersBorder("shadow-[0_0px_0px_17.11274px_rgba(0,0,0,1)] scale-[1.31481]");
                break;
            case 3: // Intermediate-stage Major Hook
                setOthersBorder("shadow-[0_0px_0px_12.65625px_rgba(0,0,0,1)] scale-[1.185185185]");
                break;
            case 2: // Major Void
                setOthersBorder("shadow-[0_0px_0px_23.8235px_rgba(0,0,0,1)] scale-[0.62963]");
                break;
            case 1: // Minor Hook
                setOthersBorder("shadow-[0_0px_0px_23.8235px_rgba(0,0,0,1)] scale-[0.94444]");
                // document.getElementById(toType.get(i)+"LeftLetter"+n).style.scale = "1.058828";
				// document.getElementById(toType.get(i)+"MainLetter"+n).style.scale = "1.058828";
				// document.getElementById(toType.get(i)+"RightLetter"+n).style.scale = "1.058828";
                break;
            case -1: // Minor Void
                setOthersBorder("shadow-[0_0px_0px_15px_rgba(0,0,0,1)] scale-[1]");
                break;
        } 

        // Iterate through onsk and apply border and scale styling according to the value, e.g. 2 = Major void

        // Solid or Fluid
        if (type['solidOthersModule']) {
            setOthersLeftLetter("S");
            setSelfLeftLetter("F");
        } else if (type['solidSelfModule']) {
            setOthersLeftLetter("F");
            setSelfLeftLetter("S");
        }

        if (type['solidNewsModule']) {
            setNewsLeftLetter("S");
            setKnownLeftLetter("F");
        } else if (type['solidKnownModule']) {
            setNewsLeftLetter("F");
            setKnownLeftLetter("S");
        }
    }

    const changeType = (event) => {
        const moduleName = event.target.id;
        setType(prevType => ({
            ...prevType,
            [moduleName]: event.target.value
        }));
    }

    // Module Dynamic Styles
    const defaultModuleBorder = "shadow-[0_0px_0px_15px_rgba(0,0,0,1)] scale-[1]";
    const [othersBorder,setOthersBorder] = useState(defaultModuleBorder);
    const [selfBorder,setSelfBorder] = useState(defaultModuleBorder);
    const [newsBorder,setNewBorder] = useState(defaultModuleBorder);
    const [knownBorder,setKnownBorder] = useState(defaultModuleBorder);

    // Module Letters Dynamic Styles
    const [othersLeftLetter, setOthersLeftLetter] = useState("?");
    const [selfLeftLetter, setSelfLeftLetter] = useState("?");
    const [newsLeftLetter, setNewsLeftLetter] = useState("?");
    const [knownLeftLetter, setKnownLeftLetter] = useState("?");

    // Reflex Dynamic Styles
    const defaultReflexBorder = "shadow-[0_0px_0px_15px_rgba(255,255,255,1)]";
    const [directBorder,setDirectBorder] = useState(defaultReflexBorder);

    // Tether Dynamic Styles
    const [crossTetherStyle,setCrossTetherStyle] = useState("opacity-0")
    const [savageTetherStyle,setSavageTetherStyle] = useState("opacity-0")

    // Static Styles
    const letterHost = "flex justify-center items-center flex-row flex-wrap rotate-[-45deg] transition duration-300 ease-in-out";
    const others = "absolute top-[-67.5px] left-[132.5px] w-[135px] h-[135px] rotate-[45deg] bg-[#D0D0D0]";
    const self = "absolute top-[332.5px] left-[132.5px] w-[135px] h-[135px] rotate-[45deg] bg-[#D0D0D0]";
    const news = "absolute top-[132.5px] left-[332.5px] w-[135px] h-[135px] rotate-[45deg] bg-[#D0D0D0]";
    const known = "absolute top-[132.5px] left-[-67.5px] w-[135px] h-[135px] rotate-[45deg] bg-[#D0D0D0]";

    const middleCover = "absolute top-[37.5px] left-[37.5px] w-[325px] h-[325px] z-[-1] bg-[#FFF]";

    const direct = "absolute top-[30px] left-[30px] w-[140px] h-[140px] z-[-2]";

    const left = "text-[41.06px] font-bold text-black";
    const main = "text-[82.12px] font-bold text-black";
    const right = "text-[41.06px] font-bold text-black";

    const tetherStyle = "absolute w-[1000px] h-[1000px] max-w-none left-[-300px] top-[-300px]  transition duration-300 ease-in-out";

    // Clear type / Reset to empty type
    const clear = () => {
        setType(emptyType);
    };

    // Copy bycode to clipboard
    const copyText = () => {
        navigator.clipboard.writeText(`${textType1}:${textType2}`);
    };


    // const newEmpty = (event) => {
    //     empty(event.currentTarget.id);
    // };

    // const newDuplicate = (event) => {
    //     duplicate(event.currentTarget.id);
    // };

  return (
    <>
        {/* Container holds the component */}
        <div className="container bg-white w-[500px] h-full max-w-[90%] max-h-[60%] rounded-[50px] relative flex justify-evenly items-center flex-col flex-wrap  mt-[50px]" id="container1">
            
            {/* Output is the display (everything on the actual image) */}
                <div className="output flex justify-center items-center w-[400px] h-[400px] scale-[0.4] m-0 mt-[50px]">
                        
                        {/* The bycode background image */}
                        <img src="/images/visualiser/bg.png" className="background absolute z-[-3] w-[1000px] h-[1000px] max-w-none left-[-300px] top-[-300px] rounded-[10%]"/>
                        
                        {/* The cross tethers */}
                        <img src="/images/visualiser/main.png" className={`${tetherStyle} ${crossTetherStyle}`} id="crossTethers"/>
                        <img src="/images/visualiser/sub.png" className={`${tetherStyle} ${savageTetherStyle}`} id="savageTethers"/>

                        {/* The arrow that exenuates your lead function */}
                        <div className="othersArrow" id="othersArrow"></div>
                        <div className="newsArrow" id="newsArrow"></div>
                        <div className="selfArrow" id="selfArrow"></div>
                        <div className="knownArrow" id="knownArrow"></div>
                        
                        {/* The four functions. Each is rotated 45 degrees, and then the internals are rotated back 45 degrees so that the square is rotated but the text isn't. */}
                        <div className={`${othersBorder} ${others} ${letterHost}`} id="others">
                            <div className={letterHost}>
                                <p className={left} id="othersLeftLetter">{othersLeftLetter}</p>
                                <p className={main} id="othersMainLetter">D</p>
                                <p className={right} id="othersRightLetter">E</p>
                            </div>
                        </div>

                        <div className={`${newsBorder} ${news} ${letterHost}`} id="news">
                            <div className={letterHost}>
                                <p className={left} id="newsLeftLetter">{newsLeftLetter}</p>
                                <p className={main} id="newsMainLetter">O</p>
                                <p className={right} id="newsRightLetter">E</p>
                            </div>
                        </div>

                        <div className={`${selfBorder} ${self} ${letterHost}`} id="self">
                            <div className={letterHost}>
                                <p className={left} id="selfLeftLetter">{selfLeftLetter}</p>
                                <p className={main} id="selfMainLetter">D</p>
                                <p className={right} id="selfRightLetter">I</p>
                            </div>
                        </div>

                        <div className={`${knownBorder} ${known} ${letterHost}`} id="known">
                            <div className={letterHost}>
                                <p className={left} id="knownLeftLetter">{knownLeftLetter}</p>
                                <p className={main} id="knownMainLetter">O</p>
                                <p className={right} id="knownRightLetter">I</p>
                            </div>
                        </div>

                        {/* A white square that covers the unwanted sections of the reflex borders. */}
                        <div className={middleCover}></div>

                        {/* The reflex lines */}
                        <div className={`${directBorder} ${direct}`} id="direct"></div>
                        <div className="conferLine" id="confer"></div>
                        <div className="seekLine" id="seek"></div>
                        <div className="reviseLine" id="revise"></div>
                </div>

                <div className="extraextra">
                    <div className="extras">
                        <img src="/images/visualiser/bin.png" id="binImg" className="clipboard" title="Clear" onClick={clear}/>
                        <img src="/images/visualiser/clipboard.png" id="clipboardImg" className="clipboard" title="Copy to Clipboard" onClick={copyText}/>
                        <div className="textModule">
                            <input className="textType textType1" id="textType1" maxLength="2" value={type.textType1} onChange={changeType} />
                            <input className="colon" placeholder=":" readOnly></input>
                            <input className="textType textType2" id="textType2" maxLength="3" value={type.textType2} onChange={changeType} />
                        </div>
                        {/* <img src="/images/visualiser/personsingle.png" id="singleImg" className="clipboard" title="Add Empty Bycode" onClick={event => newEmpty(event)}/>
                        <img src="/images/visualiser/personplus.png" id="plusImg" className="clipboard" title="Duplicate Bycode" onClick={event => newDuplicate(event)}/>
                        <button id="mitchellButton" onClick={(event) => print(event)}>Test</button> */}
                    </div>
                    <div className="ops" id="ops">
                        <input className="opsText" id="opsText" maxLength="16" onChange={changeType} value={type.opsType} placeholder="XX Xx/Xx XX/X(X)" />
                    </div>
                </div>
                
                <div className="options flex justify-center items-center flew-row relative">
                    <div className="leftModule w-[150px] text-right">
                        <label htmlFor="identifierModule">Identifier</label>
                        <input type="checkbox" id="identifierModule" data-uncheck="evaluatorModule" checked={type.identifierModule} onChange={handleCheckboxChange}/>
                        <br/>
                        <br/>
                        <label htmlFor="selfModule">Self</label>
                        <input type="checkbox" id="selfModule" data-uncheck="othersModule" checked={type.selfModule} onChange={handleCheckboxChange}/>
                        <br/>
                        <label htmlFor="knownModule">Known</label>
                        <input type="checkbox" id="knownModule" data-uncheck="newsModule" checked={type.knownModule} onChange={handleCheckboxChange}/>
                        <br/>
                        <br/>
                        <label htmlFor="valueModule">Value</label>
                        <input type="checkbox" id="valueModule" data-uncheck="reasonModule" checked={type.valueModule} onChange={handleCheckboxChange}/>
                        <br/>
                        <label htmlFor="abstractModule">Abstract</label>
                        <input type="checkbox" id="abstractModule" data-uncheck="concreteModule" checked={type.abstractModule} onChange={handleCheckboxChange}/>
                        <br/>
                        <br/>
                        <label htmlFor="intermediateModule">Intermediate</label>
                        <input type="checkbox" id="intermediateModule" data-uncheck="extremeModule" checked={type.intermediateModule} onChange={handleCheckboxChange}/>
                        <br/>
                        <label htmlFor="developerModule">Developer</label>
                        <input type="checkbox" id="developerModule" data-uncheck="navigatorModule" checked={type.developerModule} onChange={handleCheckboxChange}/>
                        <br/>
                        <br/>
                        <label htmlFor="solidSelfModule">Solid Self</label>
                        <input type="checkbox" id="solidSelfModule" data-uncheck="solidOthersModule" checked={type.solidSelfModule} onChange={handleCheckboxChange}/>
                        <br/>
                        <label htmlFor="solidKnownModule">Solid Known</label>
                        <input type="checkbox" id="solidKnownModule" data-uncheck="solidNewsModule" checked={type.solidKnownModule} onChange={handleCheckboxChange}/>
                    </div>
                    
                    <div className="rightModule w-[150px] text-left ml-1 border-l-[2px]">
                        <input type="checkbox" id="evaluatorModule" data-uncheck="identifierModule" checked={type.evaluatorModule} onChange={handleCheckboxChange}/>
                        <label htmlFor="evaluatorModule">Evaluator</label>
                        <br/>
                        <br/>
                        <input type="checkbox" id="othersModule" data-uncheck="selfModule" checked={type.othersModule} onChange={handleCheckboxChange}/>
                        <label htmlFor="othersModule">Tribe</label>
                        <br/>
                        <input type="checkbox" id="newsModule" data-uncheck="knownModule" checked={type.newsModule} onChange={handleCheckboxChange}/>
                        <label htmlFor="newsModule">New</label>
                        <br/>
                        <br/>
                        <input type="checkbox" id="reasonModule" data-uncheck="valueModule" checked={type.reasonModule} onChange={handleCheckboxChange}/>
                        <label htmlFor="reasonModule">Reason</label>
                        <br/>
                        <input type="checkbox" id="concreteModule" data-uncheck="abstractModule" checked={type.concreteModule} onChange={handleCheckboxChange}/>
                        <label htmlFor="concreteModule">Concrete</label>
                        <br/>
                        <br/>
                        <input type="checkbox" id="extremeModule" data-uncheck="intermediateModule" checked={type.extremeModule} onChange={handleCheckboxChange}/>
                        <label htmlFor="extremeModule">Extreme</label>
                        <br/>
                        <input type="checkbox" id="navigatorModule" data-uncheck="developerModule" checked={type.navigatorModule} onChange={handleCheckboxChange}/>
                        <label htmlFor="navigatorModule">Navigator</label>
                        <br/>
                        <br/>
                        <input type="checkbox" id="solidOthersModule" data-uncheck="solidSelfModule" checked={type.solidOthersModule} onChange={handleCheckboxChange}/>
                        <label htmlFor="solidOthersModule">Solid Others</label>
                        <br/>
                        <input type="checkbox" id="solidNewsModule" data-uncheck="solidKnownModule" checked={type.solidNewsModule} onChange={handleCheckboxChange}/>
                        <label htmlFor="solidNewsModule">Solid New</label>
                    </div>
                </div>
            </div>
        
        <div className="copyright">
            All web design, coding and functionality is Copyright © Divydation 2023. All rights reserved. The design and imagery of the Tilewheel is Copyright © Loglyn 2023. All rights reserved. 
        </div>
    </>
  );
}

export default Module;