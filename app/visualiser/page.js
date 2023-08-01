import Link from "next/link";

export default function Page() {
    return (
        <main>
            {/* <!-- Navigation --> */}
            <div class="navigationBar">
                <div class="home"><font COLOR="#3D3B3C">..</font><Link href="/">Home</Link></div>
                <div class="divider"></div>
                <div class="database"><Link href="/database/">Database</Link></div>
                <div class="divider"></div>
                <div class="courses"><Link href="/essentials/">Courses</Link></div>
                <div class="divider"></div>
                <div class="tools"><Link href="/visualiser/">Tools</Link></div>
                <div class="profilePicture"><Link href="/visualiser/"><div class="profilePicture"></div></Link></div>
            </div>
            
            <div class="header">
                <img src="/images/BYCOG_Direct_Logo.png" class="bdirect" />
                <div></div>
                <p class="header-label">BYCODE Visualiser</p>
            </div>

            <div class="god" id="god">
                <div class="container" id="container1">
                    <div class="type">
                        <div class="output">
                            <div class="display" id="display">
                                
                                <img src="/images/visualiser/bg.png" class="background"/>
                                
                                <img src="/images/visualiser/main.png" class="tethers" id="crossTethers"/>
                                <img src="/images/visualiser/sub.png" class="tethers" id="savageTethers"/>

                                <div class="othersArrow" id="othersArrow"></div>
                                <div class="newsArrow" id="newsArrow"></div>
                                <div class="selfArrow" id="selfArrow"></div>
                                <div class="knownArrow" id="knownArrow"></div>
                                
                                <div class="Others squ letterHost" id="others">
                                    <div class="letterHost">
                                        <p class="letter bold left" id="othersLeftLetter">?</p>
                                        <p class="letter bold main" id="othersMainLetter">D</p>
                                        <p class="letter bold right" id="othersRightLetter">E</p>
                                    </div>
                                </div>
                                <div class="New squ letterHost" id="news">
                                    <div class="letterHost">
                                        <p class="letter bold left" id="newsLeftLetter">?</p>
                                        <p class="letter bold main" id="newsMainLetter">O</p>
                                        <p class="letter bold right" id="newsRightLetter">E</p>
                                    </div>
                                </div>
                                <div class="Self squ letterHost" id="self">
                                    <div class="letterHost">
                                        <p class="letter bold left" id="selfLeftLetter">?</p>
                                        <p class="letter bold main" id="selfMainLetter">D</p>
                                        <p class="letter bold right" id="selfRightLetter">I</p>
                                    </div>
                                </div>
                                <div class="Known squ letterHost" id="known">
                                    <div class="letterHost">
                                        <p class="letter bold left" id="knownLeftLetter">?</p>
                                        <p class="letter bold main" id="knownMainLetter">O</p>
                                        <p class="letter bold right" id="knownRightLetter">I</p>
                                    </div>
                                </div>

                                <div class="love"></div>
                                <div class="directLine" id="direct"></div>
                                <div class="conferLine" id="confer"></div>
                                <div class="seekLine" id="seek"></div>
                                <div class="reviseLine" id="revise"></div>
                            </div>
                        </div>

                        <div class="extraextra">
                            <div class="extras">
                                <img src="/images/visualiser/bin.png" id="binImg" class="clipboard" title="Clear" onclick="clearAll(this.id)"/>
                                <img src="/images/visualiser/clipboard.png" id="clipboardImg" class="clipboard" title="Copy to Clipboard" onclick="copy(this.id)"/>
                                <div class="textModule">
                                    <input class="textType textType1" id="textType1" maxlength="2" onkeyup="textRead(this.id);convertToOps(this.id)"></input>
                                    <input class="colon" placeholder=":" readonly></input>
                                    <input class="textType textType2" id="textType2" maxlength="3" onkeyup="textRead(this.id);convertToOps(this.id)"></input>
                                </div>
                                <img src="/images/visualiser/personsingle.png" id="singleImg" class="clipboard" title="Add Empty Bycode" onclick="empty(this.id)"/>
                                <img src="/images/visualiser/personplus.png" id="plusImg" class="clipboard" title="Duplicate Bycode" onclick="duplicate(this.id)"/>
                            </div>
                            <div class="ops" id="ops">
                                <input class="opsText" id="opsText" maxlength="16" onkeyup="convertFromOps(this.id)" placeholder="XX Xx/Xx XX/X(X)"></input>
                            </div>
                        </div>
                        
                        <div class="options">
                            <div class="leftModule">
                                <label for="identifierModule">Observer</label>
                                <input type="checkbox" id="identifierModule" onclick="uncheck('evaluatorModule',this.id);textWrite(this.id)"/>
                                <br/>
                                <br/>
                                <label for="selfModule">Self</label>
                                <input type="checkbox" id="selfModule" onclick="uncheck('othersModule',this.id);textWrite(this.id)"/>
                                <br/>
                                <label for="knownModule">Known</label>
                                <input type="checkbox" id="knownModule" onclick="uncheck('newsModule',this.id);textWrite(this.id)"/>
                                <br/>
                                <br/>
                                <label for="valueModule">Value</label>
                                <input type="checkbox" id="valueModule" onclick="uncheck('reasonModule',this.id);textWrite(this.id)"/>
                                <br/>
                                <label for="abstractModule">Abstract</label>
                                <input type="checkbox" id="abstractModule" onclick="uncheck('concreteModule',this.id);textWrite(this.id)"/>
                                <br/>
                                <br/>
                                <label for="intermediateModule">Intermediate</label>
                                <input type="checkbox" id="intermediateModule" onclick="uncheck('extremeModule',this.id);textWrite(this.id)"/>
                                <br/>
                                <label for="developerModule">Developer</label>
                                <input type="checkbox" id="developerModule" onclick="uncheck('navigatorModule',this.id);textWrite(this.id)"/>
                                <br/>
                                <br/>
                                <label for="solidSelfModule">Solid Self</label>
                                <input type="checkbox" id="solidSelfModule" onclick="uncheck('solidOthersModule',this.id);textWrite(this.id)"/>
                                <br/>
                                <label for="solidKnownModule">Solid Known</label>
                                <input type="checkbox" id="solidKnownModule" onclick="uncheck('solidNewsModule',this.id);textWrite(this.id)"/>
                            </div>
                            
                            <div class="rightModule">
                                <input type="checkbox" id="evaluatorModule" onclick="uncheck('identifierModule',this.id);textWrite(this.id)"/>
                                <label for="evaluatorModule">Decider</label>
                                <br/>
                                <br/>
                                <input type="checkbox" id="othersModule" onclick="uncheck('selfModule',this.id);textWrite(this.id)"/>
                                <label for="othersModule">Tribe</label>
                                <br/>
                                <input type="checkbox" id="newsModule" onclick="uncheck('knownModule',this.id);textWrite(this.id)"/>
                                <label for="newsModule">New</label>
                                <br/>
                                <br/>
                                <input type="checkbox" id="reasonModule" onclick="uncheck('valueModule',this.id);textWrite(this.id)"/>
                                <label for="reasonModule">Reason</label>
                                <br/>
                                <input type="checkbox" id="concreteModule" onclick="uncheck('abstractModule',this.id);textWrite(this.id)"/>
                                <label for="concreteModule">Concrete</label>
                                <br/>
                                <br/>
                                <input type="checkbox" id="extremeModule" onclick="uncheck('intermediateModule',this.id);textWrite(this.id)"/>
                                <label for="extremeModule">Extreme</label>
                                <br/>
                                <input type="checkbox" id="navigatorModule" onclick="uncheck('developerModule',this.id);textWrite(this.id)"/>
                                <label for="navigatorModule">Navigator</label>
                                <br/>
                                <br/>
                                <input type="checkbox" id="solidOthersModule" onclick="uncheck('solidSelfModule',this.id);textWrite(this.id)"/>
                                <label for="solidOthersModule">Solid Others</label>
                                <br/>
                                <input type="checkbox" id="solidNewsModule" onclick="uncheck('solidKnownModule',this.id);textWrite(this.id)"/>
                                <label for="solidNewsModule">Solid New</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <script src="script.js"></script>
            <div class="copyright">
                All web design, coding and functionality is Copyright © Divydation 2023. All rights reserved. The design and imagery of the Tilewheel is Copyright © Loglyn 2023. All rights reserved. 
            </div>
            <div>‏‏‎ ‎</div>
        </main>
    )
}