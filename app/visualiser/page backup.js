'use client';
import Link from "next/link";
import Script from 'next/script'

export default function Page() {

    // The uncheck function needs the [numbered] id of the element to be checked, and the [general] id of the element to be unchecked.
    // This event handler is necessary to get the id from the clicked element.
    const passTo = (event, param) => {
        uncheck(param,event.currentTarget.id);
        textWrite(event.currentTarget.id)
    };
    
    return (
        <main>
            {/* <!-- Navigation --> */}
            <div className="navigationBar">
                <div className="home"><font color="#3D3B3C">..</font><Link href="/">Home</Link></div>
                <div className="divider"></div>
                <div className="database"><Link href="/database/">Database</Link></div>
                <div className="divider"></div>
                <div className="courses"><Link href="/essentials/">Courses</Link></div>
                <div className="divider"></div>
                <div className="tools"><Link href="/visualiser/">Tools</Link></div>
                <div className="profilePicture"><Link href="/visualiser/"><div className="profilePicture"></div></Link></div>
            </div>
            
            <div className="header">
                <img src="/images/BYCOG_Direct_Logo.png" className="bdirect" />
                <div></div>
                <p className="header-label">BYCODE Visualiser</p>
            </div>

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
                                <img src="/images/visualiser/bin.png" id="binImg" className="clipboard" title="Clear" onClick="clearAll(this.id)"/>
                                <img src="/images/visualiser/clipboard.png" id="clipboardImg" className="clipboard" title="Copy to Clipboard" onClick="copy(this.id)"/>
                                <div className="textModule">
                                    <input className="textType textType1" id="textType1" maxLength="2" onKeyUp="textRead(this.id);convertToOps(this.id)"></input>
                                    <input className="colon" placeholder=":" readOnly></input>
                                    <input className="textType textType2" id="textType2" maxLength="3" onKeyUp="textRead(this.id);convertToOps(this.id)"></input>
                                </div>
                                <img src="/images/visualiser/personsingle.png" id="singleImg" className="clipboard" title="Add Empty Bycode" onClick="empty(this.id)"/>
                                <img src="/images/visualiser/personplus.png" id="plusImg" className="clipboard" title="Duplicate Bycode" onClick="duplicate(this.id)"/>
                            </div>
                            <div className="ops" id="ops">
                                <input className="opsText" id="opsText" maxLength="16" onKeyUp="convertFromOps(this.id)" placeholder="XX Xx/Xx XX/X(X)"></input>
                            </div>
                        </div>
                        
                        <div className="options">
                            <div className="leftModule">
                                <label htmlFor="identifierModule">Observer</label>
                                <input type="checkbox" id="identifierModule" onClick={event => passTo(event, "evaluatorModule")}/>
                                <br/>
                                <br/>
                                <label htmlFor="selfModule">Self</label>
                                <input type="checkbox" id="selfModule" onClick="uncheck('othersModule',this.id);textWrite(this.id)"/>
                                <br/>
                                <label htmlFor="knownModule">Known</label>
                                <input type="checkbox" id="knownModule" onClick="uncheck('newsModule',this.id);textWrite(this.id)"/>
                                <br/>
                                <br/>
                                <label htmlFor="valueModule">Value</label>
                                <input type="checkbox" id="valueModule" onClick="uncheck('reasonModule',this.id);textWrite(this.id)"/>
                                <br/>
                                <label htmlFor="abstractModule">Abstract</label>
                                <input type="checkbox" id="abstractModule" onClick="uncheck('concreteModule',this.id);textWrite(this.id)"/>
                                <br/>
                                <br/>
                                <label htmlFor="intermediateModule">Intermediate</label>
                                <input type="checkbox" id="intermediateModule" onClick="uncheck('extremeModule',this.id);textWrite(this.id)"/>
                                <br/>
                                <label htmlFor="developerModule">Developer</label>
                                <input type="checkbox" id="developerModule" onClick="uncheck('navigatorModule',this.id);textWrite(this.id)"/>
                                <br/>
                                <br/>
                                <label htmlFor="solidSelfModule">Solid Self</label>
                                <input type="checkbox" id="solidSelfModule" onClick="uncheck('solidOthersModule',this.id);textWrite(this.id)"/>
                                <br/>
                                <label htmlFor="solidKnownModule">Solid Known</label>
                                <input type="checkbox" id="solidKnownModule" onClick="uncheck('solidNewsModule',this.id);textWrite(this.id)"/>
                            </div>
                            
                            <div className="rightModule">
                                <input type="checkbox" id="evaluatorModule" onClick="uncheck('identifierModule',this.id);textWrite(this.id)"/>
                                <label htmlFor="evaluatorModule">Decider</label>
                                <br/>
                                <br/>
                                <input type="checkbox" id="othersModule" onClick="uncheck('selfModule',this.id);textWrite(this.id)"/>
                                <label htmlFor="othersModule">Tribe</label>
                                <br/>
                                <input type="checkbox" id="newsModule" onClick="uncheck('knownModule',this.id);textWrite(this.id)"/>
                                <label htmlFor="newsModule">New</label>
                                <br/>
                                <br/>
                                <input type="checkbox" id="reasonModule" onClick="uncheck('valueModule',this.id);textWrite(this.id)"/>
                                <label htmlFor="reasonModule">Reason</label>
                                <br/>
                                <input type="checkbox" id="concreteModule" onClick="uncheck('abstractModule',this.id);textWrite(this.id)"/>
                                <label htmlFor="concreteModule">Concrete</label>
                                <br/>
                                <br/>
                                <input type="checkbox" id="extremeModule" onClick="uncheck('intermediateModule',this.id);textWrite(this.id)"/>
                                <label htmlFor="extremeModule">Extreme</label>
                                <br/>
                                <input type="checkbox" id="navigatorModule" onClick="uncheck('developerModule',this.id);textWrite(this.id)"/>
                                <label htmlFor="navigatorModule">Navigator</label>
                                <br/>
                                <br/>
                                <input type="checkbox" id="solidOthersModule" onClick="uncheck('solidSelfModule',this.id);textWrite(this.id)"/>
                                <label htmlFor="solidOthersModule">Solid Others</label>
                                <br/>
                                <input type="checkbox" id="solidNewsModule" onClick="uncheck('solidKnownModule',this.id);textWrite(this.id)"/>
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
            <div>‏‏‎ ‎</div>
        </main>
    )
}