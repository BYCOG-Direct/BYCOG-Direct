"use client"
import Image from 'next/image';
import React, { useState } from 'react'
import Script from 'next/script'

const emptyType = {
    opsType: null,
    textType1: null,
    textType2: null,
    identifierModule: null,
    selfModule: null,
    knownModule: null,
    valueModule: null,
    abstractModule: null,
    intermediateModule: null,
    developerModule: null,
    solidSelfModule: null,
    solidKnownModule: null,
    evaluatorModule: null,
    othersModule: null,
    newsModule: null,
    reasonModule: null,
    concreteModule: null,
    extremeModule: null,
    navigatorModule: null,
    solidOthersModule: null,
    solidNewModule: null,
}

const Module = () => {
    const [type, setType] = useState(emptyType);

    const handleCheckboxChange = (event) => {
        const moduleName = event.target.id;
        const uncheckModuleName = event.target.getAttribute('data-uncheck');
        setType(prevType => ({
            ...prevType,
            [uncheckModuleName]: !event.target.checked,
            [moduleName]: event.target.checked,
        }));
    };

    const changeType = (event) => {
        const moduleName = event.target.id;
        setType(prevType => ({
            ...prevType,
            [moduleName]: event.target.value
        }))
    }

    // These event handlers enable the id's of the elements to be passed to the Javascript
    const passTo = (event, param) => {
        uncheck(param, event.currentTarget.id);
        textWrite(event.currentTarget.id)
    };

    const clear = () => {
        setType(emptyType);
    };

    const copyText = () => {
        navigator.clipboard.writeText(`${textType1}:${textType2}`);
    };

    const read = (event) => {
        textRead(event.currentTarget.id);
        convertToOps(event.currentTarget.id)
    };

    const write = (event) => {
        convertFromOps(event.currentTarget.id)
    };

    // const newEmpty = (event) => {
    //     empty(event.currentTarget.id);
    // };

    // const newDuplicate = (event) => {
    //     duplicate(event.currentTarget.id);
    // };

  return (
    <>
      <div className="god" id="god">
                <div className="container" id="container1">
                    <div className="type">
                        <div className="output">
                            <div className="display" id="display">
                                
                                <img src="/images/visualiser/bg.png" className="background"/>
                                
                                <img src="/images/visualiser/main.png" className="tethers" id="crossTethers"/>
                                <img src="/images/visualiser/sub.png" className="tethers" id="savageTethers"/>

                                <div className="othersArrow" id="othersArrow"></div>
                                <div className="newsArrow" id="newsArrow"></div>
                                <div className="selfArrow" id="selfArrow"></div>
                                <div className="knownArrow" id="knownArrow"></div>
                                
                                <div className="Others squ letterHost" id="others">
                                    <div className="letterHost">
                                        <p className="letter bold left" id="othersLeftLetter">?</p>
                                        <p className="letter bold main" id="othersMainLetter">D</p>
                                        <p className="letter bold right" id="othersRightLetter">E</p>
                                    </div>
                                </div>
                                <div className="New squ letterHost" id="news">
                                    <div className="letterHost">
                                        <p className="letter bold left" id="newsLeftLetter">?</p>
                                        <p className="letter bold main" id="newsMainLetter">O</p>
                                        <p className="letter bold right" id="newsRightLetter">E</p>
                                    </div>
                                </div>
                                <div className="Self squ letterHost" id="self">
                                    <div className="letterHost">
                                        <p className="letter bold left" id="selfLeftLetter">?</p>
                                        <p className="letter bold main" id="selfMainLetter">D</p>
                                        <p className="letter bold right" id="selfRightLetter">I</p>
                                    </div>
                                </div>
                                <div className="Known squ letterHost" id="known">
                                    <div className="letterHost">
                                        <p className="letter bold left" id="knownLeftLetter">?</p>
                                        <p className="letter bold main" id="knownMainLetter">O</p>
                                        <p className="letter bold right" id="knownRightLetter">I</p>
                                    </div>
                                </div>

                                <div className="love"></div>
                                <div className="directLine" id="direct"></div>
                                <div className="conferLine" id="confer"></div>
                                <div className="seekLine" id="seek"></div>
                                <div className="reviseLine" id="revise"></div>
                            </div>
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
                        3
                        <div className="options">
                            <div className="leftModule">
                                <label htmlFor="identifierModule">Observer</label>
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
                            
                            <div className="rightModule">
                                <input type="checkbox" id="evaluatorModule" data-uncheck="identifierModule" checked={type.evaluatorModule} onChange={handleCheckboxChange}/>
                                <label htmlFor="evaluatorModule">Decider</label>
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
                </div>
            </div>

            {/* <script src="script.js"></script> */}
            <Script src="scripts/script.js"/>
            
            <div className="copyright">
                All web design, coding and functionality is Copyright © Divydation 2023. All rights reserved. The design and imagery of the Tilewheel is Copyright © Loglyn 2023. All rights reserved. 
            </div>

    </>
  );
}

export default Module;

/* import Image from 'next/image';
import {useEffect} from "react";

const Banner = () => (
    <>
        <div className="bg-darkGray flex justify-center align-center flex-col pt-40 w-full">
            <Image className='w-[750px] h-full mx-auto' src="/images/BYCOG_Direct_Logo.png" height={0} width={0} sizes="100vw" />
            <div className='mt-32 -mb-1 bg-tan w-full bannerClip h-[150px] z-0'></div>
        </div>
    </>
)

export default Banner;*/