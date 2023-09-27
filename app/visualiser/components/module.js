"use client"
import Image from 'next/image';
import { useEffect } from "react";
import React, { useState } from 'react'
import Script from 'next/script'
import { cloneElement } from 'react';

const Module = () => {

    // These event handlers enable the id's of the elements to be passed to the Javascript
    const passTo = (event, param) => {
        uncheck(param,event.currentTarget.id);
        textWrite(event.currentTarget.id)
    };

    const clear = (event) => {
        clearAll(event.currentTarget.id);
    };

    const copyText = (event) => {
        copy(event.currentTarget.id);
    };

    const read = (event) => {
        textRead(event.currentTarget.id);
        convertToOps(event.currentTarget.id)
    };

    const newEmpty = (event) => {
        empty(event.currentTarget.id);
    };

    const newDuplicate = (event) => {
        duplicate(event.currentTarget.id);
    };

    const write = (event) => {
        convertFromOps(event.currentTarget.id)
    };

    const clone = (event) => {
        console.log("Cloned module");
        React.cloneElement(<Module/>);
    };

    const clonedChild = React.cloneElement(<Module/>);

  return (
    <>
    <button onClick={event => clone()}>Click me</button>
      {/* {clonedChild} */}
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
                                <img src="/images/visualiser/bin.png" id="binImg" className="clipboard" title="Clear" onClick={event => clear(event)}/>
                                <img src="/images/visualiser/clipboard.png" id="clipboardImg" className="clipboard" title="Copy to Clipboard" onClick={event => copyText(event)}/>
                                <div className="textModule">
                                    <input className="textType textType1" id="textType1" maxLength="2" onKeyUp={event => read(event)}></input>
                                    <input className="colon" placeholder=":" readOnly></input>
                                    <input className="textType textType2" id="textType2" maxLength="3" onKeyUp={event => read(event)}></input>
                                </div>
                                <img src="/images/visualiser/personsingle.png" id="singleImg" className="clipboard" title="Add Empty Bycode" onClick={event => newEmpty(event)}/>
                                <img src="/images/visualiser/personplus.png" id="plusImg" className="clipboard" title="Duplicate Bycode" onClick={event => newDuplicate(event)}/>
                                <button id="mitchellButton" onClick={(event) => print(event)}>Test</button>
                            </div>
                            <div className="ops" id="ops">
                                <input className="opsText" id="opsText" maxLength="16" onKeyUp={event => write(event)} placeholder="XX Xx/Xx XX/X(X)"></input>
                            </div>
                        </div>
                        
                        <div className="options">
                            <div className="leftModule">
                                <label htmlFor="identifierModule">Observer</label>
                                <input type="checkbox" id="identifierModule" onClick={event => passTo(event, "evaluatorModule")}/>
                                <br/>
                                <br/>
                                <label htmlFor="selfModule">Self</label>
                                <input type="checkbox" id="selfModule" onClick={event => passTo(event, "othersModule")}/>
                                <br/>
                                <label htmlFor="knownModule">Known</label>
                                <input type="checkbox" id="knownModule" onClick={event => passTo(event, "newsModule")}/>
                                <br/>
                                <br/>
                                <label htmlFor="valueModule">Value</label>
                                <input type="checkbox" id="valueModule" onClick={event => passTo(event, "reasonModule")}/>
                                <br/>
                                <label htmlFor="abstractModule">Abstract</label>
                                <input type="checkbox" id="abstractModule" onClick={event => passTo(event, "concreteModule")}/>
                                <br/>
                                <br/>
                                <label htmlFor="intermediateModule">Intermediate</label>
                                <input type="checkbox" id="intermediateModule" onClick={event => passTo(event, "extremeModule")}/>
                                <br/>
                                <label htmlFor="developerModule">Developer</label>
                                <input type="checkbox" id="developerModule" onClick={event => passTo(event, "navigatorModule")}/>
                                <br/>
                                <br/>
                                <label htmlFor="solidSelfModule">Solid Self</label>
                                <input type="checkbox" id="solidSelfModule" onClick={event => passTo(event, "solidOthersModule")}/>
                                <br/>
                                <label htmlFor="solidKnownModule">Solid Known</label>
                                <input type="checkbox" id="solidKnownModule" onClick={event => passTo(event, "solidNewsModule")}/>
                            </div>
                            
                            <div className="rightModule">
                                <input type="checkbox" id="evaluatorModule" onClick={event => passTo(event, "identifierModule")}/>
                                <label htmlFor="evaluatorModule">Decider</label>
                                <br/>
                                <br/>
                                <input type="checkbox" id="othersModule" onClick={event => passTo(event, "selfModule")}/>
                                <label htmlFor="othersModule">Tribe</label>
                                <br/>
                                <input type="checkbox" id="newsModule" onClick={event => passTo(event, "knownModule")}/>
                                <label htmlFor="newsModule">New</label>
                                <br/>
                                <br/>
                                <input type="checkbox" id="reasonModule" onClick={event => passTo(event, "valueModule")}/>
                                <label htmlFor="reasonModule">Reason</label>
                                <br/>
                                <input type="checkbox" id="concreteModule" onClick={event => passTo(event, "abstractModule")}/>
                                <label htmlFor="concreteModule">Concrete</label>
                                <br/>
                                <br/>
                                <input type="checkbox" id="extremeModule" onClick={event => passTo(event, "intermediateModule")}/>
                                <label htmlFor="extremeModule">Extreme</label>
                                <br/>
                                <input type="checkbox" id="navigatorModule" onClick={event => passTo(event, "developerModule")}/>
                                <label htmlFor="navigatorModule">Navigator</label>
                                <br/>
                                <br/>
                                <input type="checkbox" id="solidOthersModule" onClick={event => passTo(event, "solidSelfModule")}/>
                                <label htmlFor="solidOthersModule">Solid Others</label>
                                <br/>
                                <input type="checkbox" id="solidNewsModule" onClick={event => passTo(event, "solidKnownModule")}/>
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