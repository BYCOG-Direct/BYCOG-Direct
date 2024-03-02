"use client"
import React, { useEffect } from 'react'
import { drawDiagram } from './diagramChanges';
import { emptyType, defaultStyles } from './diagramChanges';

const Module = ({ index, type, styles, setType, setStyles, deleteModule, duplicateModule }) => {

    const handleCheckboxChange = (event) => {
        // Get ID of the checkbox
        const checkboxName = event.target.getAttribute('data-check');
        // Get ID of the counterpart checkbox
        const counterpartBoxName = event.target.getAttribute('data-uncheck');

        const newType = {
            ...type,                                // Copy the old fields
            [counterpartBoxName]: false,            // Falsify the counterpart field
            [checkboxName]: event.target.checked,   // Trueify the current field
        }

        setType(index, newType);
    };

    useEffect(() => {
        const newDiagramStyling = drawDiagram(type, styles);
        setStyles(index, newDiagramStyling);
    }, [type])

    const changeType = (event) => {
        const moduleName = event.target.id;
        const newType = {
            ...type,
            [moduleName]: event.target.value
        }
        setType(index, newType);
    }

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
    const checkboxStyle = "transition appearance-none w-5 h-5 border-2 border-black outline-none rounded-sm checked:bg-black checked:text-black align-middle";
    const purpleCheckboxStyle = "transition appearance-none w-5 h-5 border-2 border-[#5161F2] outline-none rounded-sm checked:bg-[#5161F2] checked:text-[#5161F2] align-middle";

    // Clear type / Reset to empty type
    const clear = () => {
        setType(index, emptyType);
        setStyles(index, defaultStyles);
    };

    const remove = () => {
        deleteModule(index);
    }

    const duplicate = () => {
        duplicateModule(index);
    }

    // Copy bycode to clipboard
    const copyText = () => {
        navigator.clipboard.writeText(`${textType1.value}:${textType2.value}`);
    };

  return (
    <div className="container bg-white w-[500px] h-full rounded-[50px] relative flex justify-evenly items-center flex-col flex-wrap" id="container1">
        {/* Output is the display (everything on the actual image) */}
        <div className="output flex justify-center items-center w-[400px] h-[400px] scale-[0.4] m-0 mt-10">
                
                {/* The bycode background image */}
            <img src="/images/visualiser/bg.png" className="background absolute z-[-3] w-[1000px] h-[1000px] max-w-none left-[-300px] top-[-300px] rounded-[10%]"/>
            
            {/* The cross tethers */}
            <img src="/images/visualiser/main.png" className={`${tetherStyle} ${styles.crossTetherStyle}`} id="crossTethers"/>
            <img src="/images/visualiser/sub.png" className={`${tetherStyle} ${styles.directTetherStyle}`}/>
            <img src="/images/visualiser/sub.png" className={`${tetherStyle} ${styles.conferTetherStyle}`}/>
            <img src="/images/visualiser/sub.png" className={`${tetherStyle} ${styles.searchTetherStyle}`}/>
            <img src="/images/visualiser/sub.png" className={`${tetherStyle} ${styles.reviseTetherStyle}`}/>

            {/* The arrow that exenuates your lead function */}
            <div className="othersArrow" id="othersArrow"></div>
            <div className="newsArrow" id="newsArrow"></div>
            <div className="selfArrow" id="selfArrow"></div>
            <div className="knownArrow" id="knownArrow"></div>
            
            {/* The four functions. Each is rotated 45 degrees, and then the internals are rotated back 45 degrees so that the square is rotated but the text isn't. */}
            <div className={`${styles.othersBorder} ${others} ${styles.othersColour} ${letterHost}`} id="others">
                <div className={letterHost}>
                    <p className={left} id="othersLeftLetter">{styles.othersLeftLetter}</p>
                    <p className={main} id="othersMainLetter">{styles.othersMainLetter}</p>
                    <p className={right} id="othersRightLetter">E</p>
                </div>
            </div>

            <div className={`${styles.newsBorder} ${news} ${styles.newsColour} ${letterHost}`} id="news">
                <div className={letterHost}>
                    <p className={left} id="newsLeftLetter">{styles.newsLeftLetter}</p>
                    <p className={main} id="newsMainLetter">{styles.newMainLetter}</p>
                    <p className={right} id="newsRightLetter">E</p>
                </div>
            </div>

            <div className={`${styles.selfBorder} ${self} ${styles.selfColour} ${letterHost}`} id="self">
                <div className={letterHost}>
                    <p className={left} id="selfLeftLetter">{styles.selfLeftLetter}</p>
                    <p className={main} id="selfMainLetter">{styles.selfMainLetter}</p>
                    <p className={right} id="selfRightLetter">I</p>
                </div>
            </div>

            <div className={`${styles.knownBorder} ${known} ${styles.knownColour} ${letterHost}`} id="known">
                <div className={letterHost}>
                    <p className={left} id="knownLeftLetter">{styles.knownLeftLetter}</p>
                    <p className={main} id="knownMainLetter">{styles.knownMainLetter}</p>
                    <p className={right} id="knownRightLetter">I</p>
                </div>
            </div>

            {/* A white square that covers the unwanted sections of the reflex borders. */}
            <div className={middleCover}></div>

            {/* The reflex lines */}
            <div className={`${styles.directBorder} ${direct}`} id="direct"></div>
            <div className={`${styles.conferBorder} ${confer}`}  id="confer"></div>
            <div className={`${styles.searchBorder} ${search}`}  id="search"></div>
            <div className={`${styles.reviseBorder} ${revise}`}  id="revise"></div>
        </div>

        <div className='mt-4'>
            <div className="flex items-center justify-center gap-5">
                <img src="/images/visualiser/bin.png" id="binImg" className="w-8 h-8 cursor-pointer" title="Remove Bycode" onClick={remove}/>
                <img src="/images/visualiser/clear.png" id="binImg" className="w-8 h-8 cursor-pointer" title="Clear Bycode" onClick={clear}/>
                <div className="flex justify-center py-1 bg-tan rounded-xl">
                    <input className="w-[50px] h-[30px] border-none outline-none bg-transparent text-right" id="textType1" maxLength="2" value={type.textType1} onChange={changeType} />
                    <input className="w-[10px] border-none outline-none bg-transparent text-center text-black" value=":" readOnly></input>
                    <input className="w-[50px] h-[30px] border-none outline-none bg-transparent" id="textType2" maxLength="3" value={type.textType2} onChange={changeType} />
                </div>
                <img src="/images/visualiser/clipboard.png" id="clipboardImg" className="w-8 h-8 cursor-pointer" title="Copy to Clipboard" onClick={copyText}/>
                <img src="/images/visualiser/personplus.png" id="clipboardImg" className="w-8 h-8 cursor-pointer" title="Duplicate Bycode" onClick={duplicate}/>
            </div>
            <div className="flex justify-center my-2" id="ops">
                <input className="p-1 text-sm text-center rounded-full" id="opsText" maxLength="16" onChange={changeType} value={type.opsType} placeholder="XX Xx/Xx XX/X(X)" />
            </div>
        </div>
            
        <div className="relative flex items-center justify-center mb-5 options flew-row">
            <div className="leftModule w-[150px] text-right">
                <label htmlFor={`identifierModule-${index}`} className='text-[17px] mr-3'>Observer</label>
                <input className={checkboxStyle} type="checkbox" id={`identifierModule-${index}`} data-check="identifierModule" data-uncheck="evaluatorModule" checked={type.identifierModule} onChange={handleCheckboxChange}/>
                <br/>
                <br/>
                <label htmlFor={`selfModule-${index}`} className='text-[17px] mr-3'>Self</label>
                <input className={checkboxStyle} type="checkbox" id={`selfModule-${index}`} data-check="selfModule" data-uncheck="othersModule" checked={type.selfModule} onChange={handleCheckboxChange}/>
                <br/>
                <label htmlFor={`knownModule-${index}`} className='text-[17px] mr-3'>Known</label>
                <input className={checkboxStyle} type="checkbox" id={`knownModule-${index}`} data-check="knownModule" data-uncheck="newsModule" checked={type.knownModule} onChange={handleCheckboxChange}/>
                <br/>
                <br/>
                <label htmlFor={`valueModule-${index}`} className='text-[17px] mr-3'>Value</label>
                <input className={checkboxStyle} type="checkbox" id={`valueModule-${index}`} data-check="valueModule" data-uncheck="reasonModule" checked={type.valueModule} onChange={handleCheckboxChange}/>
                <br/>
                <label htmlFor={`abstractModule-${index}`} className='text-[17px] mr-3'>Abstract</label>
                <input className={checkboxStyle} type="checkbox" id={`abstractModule-${index}`} data-check="abstractModule" data-uncheck="concreteModule" checked={type.abstractModule} onChange={handleCheckboxChange}/>
                <br/>
                <br/>
                <label htmlFor={`intermediateModule-${index}`} className='text-[17px] mr-3'>Intermediate</label>
                <input className={checkboxStyle} type="checkbox" id={`intermediateModule-${index}`} data-check="intermediateModule" data-uncheck="extremeModule" checked={type.intermediateModule} onChange={handleCheckboxChange}/>
                <br/>
                <label htmlFor={`developerModule-${index}`} className='text-[17px] mr-3'>Developer</label>
                <input className={checkboxStyle} type="checkbox" id={`developerModule-${index}`} data-check="developerModule" data-uncheck="navigatorModule" checked={type.developerModule} onChange={handleCheckboxChange}/>
            </div>
            
            <div className="rightModule w-[150px] text-left pl-2 ml-2 border-l-[2px]">
                <input className={checkboxStyle} type="checkbox" id={`evaluatorModule-${index}`} data-check="evaluatorModule" data-uncheck="identifierModule" checked={type.evaluatorModule} onChange={handleCheckboxChange}/>
                <label htmlFor={`evaluatorModule-${index}`} className='text-[17px] ml-3'>Decider</label>
                <br/>
                <br/>
                <input className={checkboxStyle} type="checkbox" id={`othersModule-${index}`} data-uncheck="selfModule" checked={type.othersModule} onChange={handleCheckboxChange}/>
                <label htmlFor={`othersModule-${index}`} className='text-[17px] ml-3'>Group</label>
                <br/>
                <input className={checkboxStyle} type="checkbox" id={`newsModule-${index}`} data-check="newsModule" data-uncheck="knownModule" checked={type.newsModule} onChange={handleCheckboxChange}/>
                <label htmlFor={`newsModule-${index}`} className='text-[17px] ml-3'>New</label>
                <br/>
                <br/>
                <input className={checkboxStyle} type="checkbox" id={`reasonModule-${index}`} data-check="reasonModule" data-uncheck="valueModule" checked={type.reasonModule} onChange={handleCheckboxChange}/>
                <label htmlFor={`reasonModule-${index}`} className='text-[17px] ml-3'>Reason</label>
                <br/>
                <input className={checkboxStyle}type="checkbox" id={`concreteModule-${index}`} data-check="concreteModule" data-uncheck="abstractModule" checked={type.concreteModule} onChange={handleCheckboxChange}/>
                <label htmlFor={`concreteModule-${index}`} className='text-[17px] ml-3'>Concrete</label>
                <br/>
                <br/>
                <input className={checkboxStyle} type="checkbox" id={`extremeModule-${index}`} data-check="extremeModule" data-uncheck="intermediateModule" checked={type.extremeModule} onChange={handleCheckboxChange}/>
                <label htmlFor={`extremeModule-${index}`} className='text-[17px] ml-3'>Extreme</label>
                <br/>
                <input className={checkboxStyle} type="checkbox" id={`navigatorModule-${index}`} data-check="navigatorModule" data-uncheck="developerModule" checked={type.navigatorModule} onChange={handleCheckboxChange}/>
                <label htmlFor={`navigatorModule-${index}`} className='text-[17px] ml-3'>Navigator</label>
            </div>
        </div>
        <div className="text-[#5161F2]"> Stance Expansion</div>
        <div className="relative flex items-center justify-center mb-5 options flew-row">
            <div className="leftModule w-[150px] text-right">
                <label htmlFor={`solidSelfModule-${index}`} className='text-[17px] mr-3 text-[#5161F2]'>Solid Self</label>
                <input className={purpleCheckboxStyle} type="checkbox" id={`solidSelfModule-${index}`} data-check="solidSelfModule" data-uncheck="solidOthersModule" checked={type.solidSelfModule} onChange={handleCheckboxChange}/>
                <br/>
                <label htmlFor={`solidKnownModule-${index}`} className='text-[17px] mr-3 text-[#5161F2]'>Solid Known</label>
                <input className={purpleCheckboxStyle} type="checkbox" id={`solidKnownModule-${index}`} data-check="solidKnownModule" data-uncheck="solidNewsModule" checked={type.solidKnownModule} onChange={handleCheckboxChange}/>
            </div>
            <div className="rightModule w-[150px] text-left pl-2 ml-2 border-l-[2px] text-[#5161F2]">
                <input className={purpleCheckboxStyle}type="checkbox" id={`solidOthersModule-${index}`} data-uncheck="solidSelfModule" checked={type.solidOthersModule} onChange={handleCheckboxChange}/>
                <label htmlFor={`solidOthersModule-${index}`} className='text-[17px] ml-3 text-[#5161F2]'>Solid Group</label>
                <br/>
                <input className={purpleCheckboxStyle} type="checkbox" id={`solidNewsModule-${index}`} data-check="solidNewsModule" data-uncheck="solidKnownModule" checked={type.solidNewsModule} onChange={handleCheckboxChange}/>
                <label htmlFor={`solidNewsModule-${index}`} className='text-[17px] ml-3 text-[#5161F2]'>Solid New</label>
            </div>
        </div>
    </div>
  );
}

export default Module;