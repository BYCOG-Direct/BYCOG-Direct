"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import Script from 'next/script'

const emptyType = {
    // Convert to OPS
    opsType: null,
    textType1: null,
    textType2: null,

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
    };

    useEffect(() => {
        drawModules();
        drawReflexes();
    }, [type])

    const drawModules = () => {
        // Others, Self, New, Known
        const osnk = [0,0,0,0];

        // Reset display
        setCrossTetherStyle("opacity-[0] rotate-[0deg]");
        setDirectTetherStyle("opacity-0 rotate-[0deg]");
        setConferTetherStyle("opacity-0 rotate-[90deg]");
        setSearchTetherStyle("opacity-0 rotate-[180deg]");
        setReviseTetherStyle("opacity-0 rotate-[270deg]");
        
        setKnownMainLetter("O");
        setNewMainLetter("O");
        setOthersMainLetter("D");
        setSelfMainLetter("D");

        // Colours & Letters!
        if ((type['abstractModule'] && type['knownModule']) || (type['concreteModule'] && type['newsModule'])) {
            setKnownMainLetter("A");
            setNewMainLetter("C");

            setKnownColour("bg-[#f2cc8f]");
            setNewsColour("bg-[#81b29a]")
        }
        if ((type['abstractModule'] && type['newsModule']) || (type['concreteModule'] && type['knownModule'])) {
            setKnownMainLetter("C");
            setNewMainLetter("A");

            setKnownColour("bg-[#81b29a]");
            setNewsColour("bg-[#f2cc8f]")
        }
        if ((type['reasonModule'] && type['othersModule']) || (type['valueModule'] && type['selfModule'])) {
            setOthersMainLetter("R");
            setSelfMainLetter("V");

            setOthersColour("bg-[#7078bf]");
            setSelfColour("bg-[#e07a5f]")
        }
        if ((type['reasonModule'] && type['selfModule']) || (type['valueModule'] && type['othersModule'])) {
            setOthersMainLetter("V");
            setSelfMainLetter("R");

            setOthersColour("bg-[#e07a5f]");
            setSelfColour("bg-[#7078bf]")
        }
        
        // Add numbers to osnk array depending on what is true/false in type!

        // Evaluator or Identifier
        if (type['evaluatorModule']) {
            osnk[0] += 3;
            osnk[1] += 3;
            setCrossTetherStyle("opacity-[1] rotate-[90deg]")
        } else if (type['identifierModule']) {
            osnk[2] += 3;
            osnk[3] += 3;
            setCrossTetherStyle("opacity-[1] rotate-[0deg]")
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
                setOthersColour("bg-[#D0D0D0]");
                break;
            case 1: // Minor Hook
                setOthersBorder("shadow-[0_0px_0px_23.8235px_rgba(0,0,0,1)] scale-[0.94444]");
                // document.getElementById(toType.get(i)+"LeftLetter"+n).style.scale = "1.058828";
				// document.getElementById(toType.get(i)+"MainLetter"+n).style.scale = "1.058828";
				// document.getElementById(toType.get(i)+"RightLetter"+n).style.scale = "1.058828";
                break;
            case 0: // Minor Void
            case -1: // Minor Void
                setOthersBorder("shadow-[0_0px_0px_15px_rgba(0,0,0,1)] scale-[1]");
                setOthersColour("bg-[#D0D0D0]");
                break;
        } 

        // Self styling
        switch (osnk[1]) {
            case 4: // Major Hook
                setSelfBorder("shadow-[0_0px_0px_17.11274px_rgba(0,0,0,1)] scale-[1.31481]");
                break;
            case 3: // Intermediate-stage Major Hook
                setSelfBorder("shadow-[0_0px_0px_12.65625px_rgba(0,0,0,1)] scale-[1.185185185]");
                break;
            case 2: // Major Void
                setSelfBorder("shadow-[0_0px_0px_23.8235px_rgba(0,0,0,1)] scale-[0.62963]");
                setSelfColour("bg-[#D0D0D0]");
                break;
            case 1: // Minor Hook
                setSelfBorder("shadow-[0_0px_0px_23.8235px_rgba(0,0,0,1)] scale-[0.94444]");
                // document.getElementById(toType.get(i)+"LeftLetter"+n).style.scale = "1.058828";
				// document.getElementById(toType.get(i)+"MainLetter"+n).style.scale = "1.058828";
				// document.getElementById(toType.get(i)+"RightLetter"+n).style.scale = "1.058828";
                break;
            case 0: // Minor Void
            case -1: // Minor Void
                setSelfBorder("shadow-[0_0px_0px_15px_rgba(0,0,0,1)] scale-[1]");
                setSelfColour("bg-[#D0D0D0]");
                break;
        } 

        // New styling
        switch (osnk[2]) {
            case 4: // Major Hook
                setNewBorder("shadow-[0_0px_0px_17.11274px_rgba(0,0,0,1)] scale-[1.31481]");
                break;
            case 3: // Intermediate-stage Major Hook
                setNewBorder("shadow-[0_0px_0px_12.65625px_rgba(0,0,0,1)] scale-[1.185185185]");
                break;
            case 2: // Major Void
                setNewBorder("shadow-[0_0px_0px_23.8235px_rgba(0,0,0,1)] scale-[0.62963]");
                setNewsColour("bg-[#D0D0D0]");
                break;
            case 1: // Minor Hook
                setNewBorder("shadow-[0_0px_0px_23.8235px_rgba(0,0,0,1)] scale-[0.94444]");
                // document.getElementById(toType.get(i)+"LeftLetter"+n).style.scale = "1.058828";
				// document.getElementById(toType.get(i)+"MainLetter"+n).style.scale = "1.058828";
				// document.getElementById(toType.get(i)+"RightLetter"+n).style.scale = "1.058828";
                break;
            case 0: // Minor Void
            case -1: // Minor Void
                setNewBorder("shadow-[0_0px_0px_15px_rgba(0,0,0,1)] scale-[1]");
                setNewsColour("bg-[#D0D0D0]");
                break;
        } 

        // Known styling
        switch (osnk[3]) {
            case 4: // Major Hook
                setKnownBorder("shadow-[0_0px_0px_17.11274px_rgba(0,0,0,1)] scale-[1.31481]");
                break;
            case 3: // Intermediate-stage Major Hook
                setKnownBorder("shadow-[0_0px_0px_12.65625px_rgba(0,0,0,1)] scale-[1.185185185]");
                break;
            case 2: // Major Void
                setKnownBorder("shadow-[0_0px_0px_23.8235px_rgba(0,0,0,1)] scale-[0.62963]");
                setKnownColour("bg-[#D0D0D0]");
                break;
            case 1: // Minor Hook
                setKnownBorder("shadow-[0_0px_0px_23.8235px_rgba(0,0,0,1)] scale-[0.94444]");
                // document.getElementById(toType.get(i)+"LeftLetter"+n).style.scale = "1.058828";
				// document.getElementById(toType.get(i)+"MainLetter"+n).style.scale = "1.058828";
				// document.getElementById(toType.get(i)+"RightLetter"+n).style.scale = "1.058828";
                break;
            case 0: // Minor Void, will continue through
            case -1: // Minor Void
                setKnownBorder("shadow-[0_0px_0px_15px_rgba(0,0,0,1)] scale-[1]");
                setKnownColour("bg-[#D0D0D0]");
                break;
        } 

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

        // Savage Tether
        if (type['solidOthersModule'] && type['solidKnownModule']) {
            setDirectTetherStyle("opacity-1 rotate-[0deg]");
        }
        if (type['solidOthersModule'] && type['solidNewsModule']) {
            setConferTetherStyle("opacity-1 rotate-[90deg]");
        }
        if (type['solidSelfModule'] && type['solidNewsModule']) {
            setSearchTetherStyle("opacity-1 rotate-[180deg]");
        }
        if (type['solidSelfModule'] && type['solidKnownModule']) {
            setReviseTetherStyle("opacity-1 rotate-[270deg]");
        }
    }

    const drawReflexes = () => {
        // Direct Confer Search Revise
        const csrd = [0,0,0,0];

        if (type['othersModule'] && type['newsModule']) {
            csrd[0] += 4; // Confer
        } else if (type['newsModule'] && type['selfModule']) {
            csrd[1] += 4; // Seek
        } else if (type['selfModule'] && type['knownModule']) {
            csrd[2] += 4; // Revise
        } else if (type['knownModule'] && type['othersModule']) {
            csrd[3] += 4; // Direct
        }
    
        if (type['developerModule']) {
            csrd[2] += 1; // Revise
            csrd[0] += 1; // Confer
        } else if (type['navigatorModule']) {
            csrd[1] += 1; // Seek
            csrd[3] += 1; // Direct
        }
    
        if (type['extremeModule']) {
            if (type['selfModule']) {
                csrd[2] += 2; // Revise
                csrd[1] += 2; // Seek
            } else if (type['othersModule']) {
                csrd[0] += 2; // Confer
                csrd[3] += 2; // Direct
            }
        } else if (type['intermediateModule']) {
            if (type['knownModule']) {
                csrd[2] += 2; // Revise
                csrd[3] += 2; // Direct
            } else if (type['newsModule']) {
                csrd[0] += 2; // Confer
                csrd[1] += 2; // Seek
            }
        }

        // Simplify array into numbers 0 through 3
        for (let i = 0; i < 4;i++) {
            if (csrd[i] == 3) {
                csrd[i] = 2;
            }
            if (csrd[i] > 3) {
                csrd[i] = 3;
            }
        }

        // Confer styling
        switch (csrd[0]) {
            case 0: // Invisible
                setConferBorder("shadow-[0_0px_0px_15px_rgba(255,255,255,1)]");
                break;
            case 1: // 
                setConferBorder("shadow-[0_0px_0px_22.5px_rgba(255,255,255,1),0_0px_0px_37.5px_rgba(0,0,0,1)]");
                break;
            case 2: // 
                setConferBorder("shadow-[0_0px_0px_15px_rgba(255,255,255,1),0_0px_0px_45px_rgba(0,0,0,1)]");
                break;
            case 3: // 
                setConferBorder("shadow-[0_0px_0px_7.5px_rgba(255,255,255,1),0_0px_0px_52.5px_rgba(0,0,0,1)]");
                break;
        } 

        // Search styling
        switch (csrd[1]) {
            case 0: // Invisible
                setSearchBorder("shadow-[0_0px_0px_15px_rgba(255,255,255,1)]");
                break;
            case 1: // 
                setSearchBorder("shadow-[0_0px_0px_22.5px_rgba(255,255,255,1),0_0px_0px_37.5px_rgba(0,0,0,1)]");
                break;
            case 2: // 
                setSearchBorder("shadow-[0_0px_0px_15px_rgba(255,255,255,1),0_0px_0px_45px_rgba(0,0,0,1)]");
                break;
            case 3: // 
                setSearchBorder("shadow-[0_0px_0px_7.5px_rgba(255,255,255,1),0_0px_0px_52.5px_rgba(0,0,0,1)]");
                break;
        } 

        // Revise styling
        switch (csrd[2]) {
            case 0: // Invisible
                setReviseBorder("shadow-[0_0px_0px_15px_rgba(255,255,255,1)]");
                break;
            case 1: // 
                setReviseBorder("shadow-[0_0px_0px_22.5px_rgba(255,255,255,1),0_0px_0px_37.5px_rgba(0,0,0,1)]");
                break;
            case 2: // 
                setReviseBorder("shadow-[0_0px_0px_15px_rgba(255,255,255,1),0_0px_0px_45px_rgba(0,0,0,1)]");
                break;
            case 3: // 
                setReviseBorder("shadow-[0_0px_0px_7.5px_rgba(255,255,255,1),0_0px_0px_52.5px_rgba(0,0,0,1)]");
                break;
        } 

        // Direct styling
        switch (csrd[3]) {
            case 0: // Invisible
                setDirectBorder("shadow-[0_0px_0px_15px_rgba(255,255,255,1)]");
                break;
            case 1: // 
                setDirectBorder("shadow-[0_0px_0px_22.5px_rgba(255,255,255,1),0_0px_0px_37.5px_rgba(0,0,0,1)]");
                break;
            case 2: // 
                setDirectBorder("shadow-[0_0px_0px_15px_rgba(255,255,255,1),0_0px_0px_45px_rgba(0,0,0,1)]");
                break;
            case 3: // 
                setDirectBorder("shadow-[0_0px_0px_7.5px_rgba(255,255,255,1),0_0px_0px_52.5px_rgba(0,0,0,1)]");
                break;
        } 

        // Draw double activated reflex.
        if ((csrd[0]+csrd[1]+csrd[2]+csrd[3]) == 6) {
            // Revise
            if (csrd[0] == 0) {
                setReviseBorder("shadow-[0_0px_0px_7.5px_rgba(255,255,255,1),0_0px_0px_22.5px_rgba(0,0,0,1),0_0px_0px_37.5px_rgba(255,255,255,1),0_0px_0px_52.5px_rgba(0,0,0,1)]")
            }
            // Direct
            if (csrd[1] == 0) {
                setDirectBorder("shadow-[0_0px_0px_7.5px_rgba(255,255,255,1),0_0px_0px_22.5px_rgba(0,0,0,1),0_0px_0px_37.5px_rgba(255,255,255,1),0_0px_0px_52.5px_rgba(0,0,0,1)]")
            }
            // Confer
            if (csrd[2] == 0) {
                setConferBorder("shadow-[0_0px_0px_7.5px_rgba(255,255,255,1),0_0px_0px_22.5px_rgba(0,0,0,1),0_0px_0px_37.5px_rgba(255,255,255,1),0_0px_0px_52.5px_rgba(0,0,0,1)]")
            }
            // Search
            if (csrd[3] == 0) {
                setSearchBorder("shadow-[0_0px_0px_7.5px_rgba(255,255,255,1),0_0px_0px_22.5px_rgba(0,0,0,1),0_0px_0px_37.5px_rgba(255,255,255,1),0_0px_0px_52.5px_rgba(0,0,0,1)]")
            }

            // But what about if they are also the biggest reflex?
            // Revise
            if (csrd[0] == 0 && csrd[2] == 3) {
                setReviseBorder("shadow-[0_0px_0px_20px_rgba(0,0,0,1),0_0px_0px_40px_rgba(255,255,255,1),0_0px_0px_60px_rgba(0,0,0,1)]")
            }
            // Direct
            if (csrd[1] == 0 && csrd[3] == 3) {
                setDirectBorder("shadow-[0_0px_0px_20px_rgba(0,0,0,1),0_0px_0px_40px_rgba(255,255,255,1),0_0px_0px_60px_rgba(0,0,0,1)]")
            }
            // Confer
            if (csrd[2] == 0 && csrd[0] == 3) {
                setConferBorder("shadow-[0_0px_0px_20px_rgba(0,0,0,1),0_0px_0px_40px_rgba(255,255,255,1),0_0px_0px_60px_rgba(0,0,0,1)]")
            }
            // Search
            if (csrd[3] == 0 && csrd[1] == 3) {
                setSearchBorder("shadow-[0_0px_0px_20px_rgba(0,0,0,1),0_0px_0px_40px_rgba(255,255,255,1),0_0px_0px_60px_rgba(0,0,0,1)]")
            }
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

    // Module Colours Dynamic Styles
    const [othersColour, setOthersColour] = useState("bg-[#D0D0D0]");
    const [selfColour, setSelfColour] = useState("bg-[#D0D0D0]");
    const [newsColour, setNewsColour] = useState("bg-[#D0D0D0]");
    const [knownColour, setKnownColour] = useState("bg-[#D0D0D0]");

    // Module Letters Dynamic Data
    const [othersMainLetter, setOthersMainLetter] = useState("D");
    const [selfMainLetter, setSelfMainLetter] = useState("D");
    const [newMainLetter, setNewMainLetter] = useState("O");
    const [knownMainLetter, setKnownMainLetter] = useState("O");

    // Reflex Dynamic Styles
    const defaultReflexBorder = "shadow-[0_0px_0px_15px_rgba(255,255,255,1)]";
    const [conferBorder,setConferBorder] = useState(defaultReflexBorder);
    const [searchBorder,setSearchBorder] = useState(defaultReflexBorder);
    const [reviseBorder,setReviseBorder] = useState(defaultReflexBorder);
    const [directBorder,setDirectBorder] = useState(defaultReflexBorder);

    // Tether Dynamic Styles
    const [crossTetherStyle,setCrossTetherStyle] = useState("opacity-0")
    const [directTetherStyle,setDirectTetherStyle] = useState("opacity-0 rotate-[0deg]")
    const [conferTetherStyle,setConferTetherStyle] = useState("opacity-0 rotate-[90deg]")
    const [searchTetherStyle,setSearchTetherStyle] = useState("opacity-0 rotate-[180deg]")
    const [reviseTetherStyle,setReviseTetherStyle] = useState("opacity-0 rotate-[270deg]")

    // Static Styles
    const letterHost = "flex justify-center items-center flex-row flex-wrap rotate-[-45deg] transition duration-300 ease-in-out";
    const others = "absolute top-[-67.5px] left-[132.5px] w-[135px] h-[135px] rotate-[45deg]";
    const self = "absolute top-[332.5px] left-[132.5px] w-[135px] h-[135px] rotate-[45deg]";
    const news = "absolute top-[132.5px] left-[332.5px] w-[135px] h-[135px] rotate-[45deg]";
    const known = "absolute top-[132.5px] left-[-67.5px] w-[135px] h-[135px] rotate-[45deg]";

    const middleCover = "absolute top-[37.5px] left-[37.5px] w-[325px] h-[325px] z-[-1] bg-[#FFF]";

    const confer = "absolute top-[30px] right-[30px] w-[140px] h-[140px] z-[-2] transition duration-300 ease-in-out";
    const search = "absolute bottom-[30px] right-[30px] w-[140px] h-[140px] z-[-2] transition duration-300 ease-in-out";
    const revise = "absolute bottom-[30px] left-[30px] w-[140px] h-[140px] z-[-2] transition duration-300 ease-in-out";
    const direct = "absolute top-[30px] left-[30px] w-[140px] h-[140px] z-[-2] transition duration-300 ease-in-out";

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
    <div className='flex flex-col justify-center items-center gap-10'>
        {/* Container holds the component */}
        <div className="container bg-white w-[500px] h-full rounded-[50px] relative flex justify-evenly items-center flex-col flex-wrap  mt-[50px]" id="container1">
            
            {/* Output is the display (everything on the actual image) */}
            <div className="output flex justify-center items-center w-[400px] h-[400px] scale-[0.4] m-0 mt-10">
                    
                    {/* The bycode background image */}
                <img src="/images/visualiser/bg.png" className="background absolute z-[-3] w-[1000px] h-[1000px] max-w-none left-[-300px] top-[-300px] rounded-[10%]"/>
                
                {/* The cross tethers */}
                <img src="/images/visualiser/main.png" className={`${tetherStyle} ${crossTetherStyle}`} id="crossTethers"/>
                <img src="/images/visualiser/sub.png" className={`${tetherStyle} ${directTetherStyle}`}/>
                <img src="/images/visualiser/sub.png" className={`${tetherStyle} ${conferTetherStyle}`}/>
                <img src="/images/visualiser/sub.png" className={`${tetherStyle} ${searchTetherStyle}`}/>
                <img src="/images/visualiser/sub.png" className={`${tetherStyle} ${reviseTetherStyle}`}/>

                {/* The arrow that exenuates your lead function */}
                <div className="othersArrow" id="othersArrow"></div>
                <div className="newsArrow" id="newsArrow"></div>
                <div className="selfArrow" id="selfArrow"></div>
                <div className="knownArrow" id="knownArrow"></div>
                
                {/* The four functions. Each is rotated 45 degrees, and then the internals are rotated back 45 degrees so that the square is rotated but the text isn't. */}
                <div className={`${othersBorder} ${others} ${othersColour} ${letterHost}`} id="others">
                    <div className={letterHost}>
                        <p className={left} id="othersLeftLetter">{othersLeftLetter}</p>
                        <p className={main} id="othersMainLetter">{othersMainLetter}</p>
                        <p className={right} id="othersRightLetter">E</p>
                    </div>
                </div>

                <div className={`${newsBorder} ${news} ${newsColour} ${letterHost}`} id="news">
                    <div className={letterHost}>
                        <p className={left} id="newsLeftLetter">{newsLeftLetter}</p>
                        <p className={main} id="newsMainLetter">{newMainLetter}</p>
                        <p className={right} id="newsRightLetter">E</p>
                    </div>
                </div>

                <div className={`${selfBorder} ${self} ${selfColour} ${letterHost}`} id="self">
                    <div className={letterHost}>
                        <p className={left} id="selfLeftLetter">{selfLeftLetter}</p>
                        <p className={main} id="selfMainLetter">{selfMainLetter}</p>
                        <p className={right} id="selfRightLetter">I</p>
                    </div>
                </div>

                <div className={`${knownBorder} ${known} ${knownColour} ${letterHost}`} id="known">
                    <div className={letterHost}>
                        <p className={left} id="knownLeftLetter">{knownLeftLetter}</p>
                        <p className={main} id="knownMainLetter">{knownMainLetter}</p>
                        <p className={right} id="knownRightLetter">I</p>
                    </div>
                </div>

                {/* A white square that covers the unwanted sections of the reflex borders. */}
                <div className={middleCover}></div>

                {/* The reflex lines */}
                <div className={`${directBorder} ${direct}`} id="direct"></div>
                <div className={`${conferBorder} ${confer}`}  id="confer"></div>
                <div className={`${searchBorder} ${search}`}  id="search"></div>
                <div className={`${reviseBorder} ${revise}`}  id="revise"></div>
            </div>

            <div className='mt-4'>
                <div className="flex justify-center items-center gap-5">
                    <img src="/images/visualiser/bin.png" id="binImg" className="w-8 h-8 cursor-pointer" title="Clear" onClick={clear}/>
                    <div className="flex justify-center bg-tan rounded-xl py-1">
                        <input className="w-[50px] h-[30px] border-none outline-none bg-transparent text-right" id="textType1" maxLength="2" value={type.textType1} onChange={changeType} />
                        <input className="w-[10px] border-none outline-none bg-transparent text-center text-black" value=":" readOnly></input>
                        <input className="w-[50px] h-[30px] border-none outline-none bg-transparent" id="textType2" maxLength="3" value={type.textType2} onChange={changeType} />
                    </div>
                    <img src="/images/visualiser/clipboard.png" id="clipboardImg" className="w-8 h-8 cursor-pointer" title="Copy to Clipboard" onClick={copyText}/>
                </div>
                <div className="my-2 flex justify-center" id="ops">
                    <input className="p-1 rounded-full text-sm text-center" id="opsText" maxLength="16" onChange={changeType} value={type.opsType} placeholder="XX Xx/Xx XX/X(X)" />
                </div>
            </div>
                
            <div className="options flex justify-center items-center flew-row relative mb-5">
                <div className="leftModule w-[150px] text-right">
                    <label htmlFor="identifierModule" className='text-[17px] mr-3'>Identifier</label>
                    <input className='transition appearance-none w-5 h-5 border-2 border-black outline-none rounded-sm checked:bg-black checked:text-black align-middle' type="checkbox" id="identifierModule" data-uncheck="evaluatorModule" checked={type.identifierModule} onChange={handleCheckboxChange}/>
                    <br/>
                    <br/>
                    <label htmlFor="selfModule" className='text-[17px] mr-3'>Self</label>
                    <input className='transition appearance-none w-5 h-5 border-2 border-black outline-none rounded-sm checked:bg-black checked:text-black align-middle' type="checkbox" id="selfModule" data-uncheck="othersModule" checked={type.selfModule} onChange={handleCheckboxChange}/>
                    <br/>
                    <label htmlFor="knownModule" className='text-[17px] mr-3'>Known</label>
                    <input className='transition appearance-none w-5 h-5 border-2 border-black outline-none rounded-sm checked:bg-black checked:text-black align-middle' type="checkbox" id="knownModule" data-uncheck="newsModule" checked={type.knownModule} onChange={handleCheckboxChange}/>
                    <br/>
                    <br/>
                    <label htmlFor="valueModule" className='text-[17px] mr-3'>Value</label>
                    <input className='transition appearance-none w-5 h-5 border-2 border-black outline-none rounded-sm checked:bg-black checked:text-black align-middle' type="checkbox" id="valueModule" data-uncheck="reasonModule" checked={type.valueModule} onChange={handleCheckboxChange}/>
                    <br/>
                    <label htmlFor="abstractModule" className='text-[17px] mr-3'>Abstract</label>
                    <input className='transition appearance-none w-5 h-5 border-2 border-black outline-none rounded-sm checked:bg-black checked:text-black align-middle' type="checkbox" id="abstractModule" data-uncheck="concreteModule" checked={type.abstractModule} onChange={handleCheckboxChange}/>
                    <br/>
                    <br/>
                    <label htmlFor="intermediateModule" className='text-[17px] mr-3'>Intermediate</label>
                    <input className='transition appearance-none w-5 h-5 border-2 border-black outline-none rounded-sm checked:bg-black checked:text-black align-middle' type="checkbox" id="intermediateModule" data-uncheck="extremeModule" checked={type.intermediateModule} onChange={handleCheckboxChange}/>
                    <br/>
                    <label htmlFor="developerModule" className='text-[17px] mr-3'>Developer</label>
                    <input className='transition appearance-none w-5 h-5 border-2 border-black outline-none rounded-sm checked:bg-black checked:text-black align-middle' type="checkbox" id="developerModule" data-uncheck="navigatorModule" checked={type.developerModule} onChange={handleCheckboxChange}/>
                    <br/>
                    <br/>
                    <label htmlFor="solidSelfModule" className='text-[17px] mr-3'>Solid Self</label>
                    <input className='transition appearance-none w-5 h-5 border-2 border-black outline-none rounded-sm checked:bg-black checked:text-black align-middle' type="checkbox" id="solidSelfModule" data-uncheck="solidOthersModule" checked={type.solidSelfModule} onChange={handleCheckboxChange}/>
                    <br/>
                    <label htmlFor="solidKnownModule" className='text-[17px] mr-3'>Solid Known</label>
                    <input className='transition appearance-none w-5 h-5 border-2 border-black outline-none rounded-sm checked:bg-black checked:text-black align-middle' type="checkbox" id="solidKnownModule" data-uncheck="solidNewsModule" checked={type.solidKnownModule} onChange={handleCheckboxChange}/>
                </div>
                
                <div className="rightModule w-[150px] text-left pl-2 ml-2 border-l-[2px]">
                    <input className='transition appearance-none w-5 h-5 border-2 border-black outline-none rounded-sm checked:bg-black checked:text-black align-middle' type="checkbox" id="evaluatorModule" data-uncheck="identifierModule" checked={type.evaluatorModule} onChange={handleCheckboxChange}/>
                    <label htmlFor="evaluatorModule" className='text-[17px] ml-3'>Evaluator</label>
                    <br/>
                    <br/>
                    <input className='transition appearance-none w-5 h-5 border-2 border-black outline-none rounded-sm checked:bg-black checked:text-black align-middle' type="checkbox" id="othersModule" data-uncheck="selfModule" checked={type.othersModule} onChange={handleCheckboxChange}/>
                    <label htmlFor="othersModule" className='text-[17px] ml-3'>Tribe</label>
                    <br/>
                    <input className='transition appearance-none w-5 h-5 border-2 border-black outline-none rounded-sm checked:bg-black checked:text-black align-middle' type="checkbox" id="newsModule" data-uncheck="knownModule" checked={type.newsModule} onChange={handleCheckboxChange}/>
                    <label htmlFor="newsModule" className='text-[17px] ml-3'>New</label>
                    <br/>
                    <br/>
                    <input className='transition appearance-none w-5 h-5 border-2 border-black outline-none rounded-sm checked:bg-black checked:text-black align-middle' type="checkbox" id="reasonModule" data-uncheck="valueModule" checked={type.reasonModule} onChange={handleCheckboxChange}/>
                    <label htmlFor="reasonModule" className='text-[17px] ml-3'>Reason</label>
                    <br/>
                    <input className='transition appearance-none w-5 h-5 border-2 border-black outline-none rounded-sm checked:bg-black checked:text-black align-middle'type="checkbox" id="concreteModule" data-uncheck="abstractModule" checked={type.concreteModule} onChange={handleCheckboxChange}/>
                    <label htmlFor="concreteModule" className='text-[17px] ml-3'>Concrete</label>
                    <br/>
                    <br/>
                    <input className='transition appearance-none w-5 h-5 border-2 border-black outline-none rounded-sm checked:bg-black checked:text-black align-middle' type="checkbox" id="extremeModule" data-uncheck="intermediateModule" checked={type.extremeModule} onChange={handleCheckboxChange}/>
                    <label htmlFor="extremeModule" className='text-[17px] ml-3'>Extreme</label>
                    <br/>
                    <input className='transition appearance-none w-5 h-5 border-2 border-black outline-none rounded-sm checked:bg-black checked:text-black align-middle' type="checkbox" id="navigatorModule" data-uncheck="developerModule" checked={type.navigatorModule} onChange={handleCheckboxChange}/>
                    <label htmlFor="navigatorModule" className='text-[17px] ml-3'>Navigator</label>
                    <br/>
                    <br/>
                    <input className='transition appearance-none w-5 h-5 border-2 border-black outline-none rounded-sm checked:bg-black checked:text-black align-middle'type="checkbox" id="solidOthersModule" data-uncheck="solidSelfModule" checked={type.solidOthersModule} onChange={handleCheckboxChange}/>
                    <label htmlFor="solidOthersModule" className='text-[17px] ml-3'>Solid Others</label>
                    <br/>
                    <input className='transition appearance-none w-5 h-5 border-2 border-black outline-none rounded-sm checked:bg-black checked:text-black align-middle' type="checkbox" id="solidNewsModule" data-uncheck="solidKnownModule" checked={type.solidNewsModule} onChange={handleCheckboxChange}/>
                    <label htmlFor="solidNewsModule" className='text-[17px] ml-3'>Solid New</label>
                </div>
            </div>
        </div>
        
        <div className="text-sm mb-10 w-3/4 mx-auto text-center">
            All web design, coding and functionality is Copyright © Divydation & Sectonic 2023. All rights reserved. The design and imagery of the Tilewheel is Copyright © Loglyn 2023. All rights reserved. 
        </div>
    </div>
  );
}

export default Module;