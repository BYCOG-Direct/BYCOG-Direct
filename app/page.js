import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  
  return (
    <main>
      <div id="splash" >
        <div className="imageContainer">
          <img src="/images/BYCOG_Direct_Logo.png" id="splashBYCO_Direct_Logo" />
        </div>
        <div id="splash_arrow">
          <div></div><div></div><div></div><div></div>
        </div>
      </div>

      {/* <!-- Navigation --> */}
      <div className="navigationBar">
        <div className="home"><font COLOR="#3D3B3C">..</font><Link href="https://bycog-direct.lobobo.repl.co/">Home</Link></div>
        <div className="divider"></div>
        <div className="database"><Link href="https://bycog-direct.lobobo.repl.co/">Database</Link></div>
        <div className="divider"></div>
        <div className="courses"><Link href="https://bycog-direct.lobobo.repl.co/essentials/">Courses</Link></div>
        <div className="divider"></div>
        <div className="tools"><Link href="https://bycog-direct.lobobo.repl.co/visualiser">Tools</Link></div>
        <div className="profilePicture"><Link href="https://bycog-direct.lobobo.repl.co/visualiser"><div className="profilePicture"></div></Link></div>
      </div>
	
      {/* <!-- Attention Hook --> */}
      <div className="pageAlignCenter">
        <div id="standard_text">
        <p> </p> 
          <p className="paragraph">
            Below each person’s likes, dislikes, decision making and personality is a	process they impulsively use all the time. <br/> We call these processes <b>bycodes</b>.
          </p>
          <p className="paragraph">
            Knowing about the bycodes will give you a new perspective 
            on how people process the world differently. <br/>
          </p>
          <p className="paragraph">
            Here you can learn what these bycodes are, how to use them, 
            and join the growing community looking into this topic.	
          </p>
        <p></p>
        </div>
      </div>

      <div className="pageAlignCenter">
        <div className="typeExamples"></div>
      </div>
      
      {/* <!-- PRELUDE --> */}
      <div className="pageAlignCenter">
        <div id="standard_text">
          <p></p>
          <p className="titleText">
            PRELUDE
          </p>
          <p className="paragraph">
            You already notice differences in the way people process, what BYCO Direct will do is to provide a better structure you can use to track, compare and support yourself and others.
          </p>
          <p className="paragraph">
            We believe people give away the process, their bycode, going on in their mind by how they interact with the world. So if you know what to look out for you can quickly understand what makes someone tick. 
          </p>
          <p className="paragraph">
            A bycode is not a physical part of someone's body, rather an abstracted model of their repeated themes.<br/>Each bycode is built from 4 layers:
          </p>
        </div>
      </div>

      <div>
        <div className="pageAlignCenter">
          <div className="pageAlignVerticle">
            <div className="lines"> </div>
            <p className="paragraphCentralist"> 
              The <b>modules</b> are the base structure of each bycode. 
            </p>
            <div className="lines"> </div>
            <p className="paragraphCentralist">
              The <b>reflexes</b> are like muscles between the modules. 
            </p>
            <div className="lines"> </div>
            <p className="paragraphCentralist">
              The <b>stances</b> characterize the modules some more.
            </p>
            <div className="lines"> </div>
            <p className="paragraphCentralist">
              And the <b>catch</b> is the big gamble each bycode takes. 
            </p>
            <div className="lines"> </div>
          </div>
        </div>
      </div>

      <div className="pageAlignCenter">
        <div id="standard_text">
          <p className="paragraph">
            An easy place you could see a person's bycode be used is when they are placed into a new location.
            For example, do they quickly search around all the new exciting things that surround them or do they start clumping the things into the categories they know?
          </p>
          <p></p>
        </div>
      </div>

      {/* <!-- NEXT --> */}
      <div className="pageAlignCenter">
        <div id="standard_text">
          <p></p><p></p>
          <p className="titleText">
            WHERE TO NEXT?
          </p>
          <p className="paragraph">
            Well, that's all the essentials!<br/>
            We hope you able to get a brief rundown on what BYCO Direct is all about.
          </p>
          <p className="paragraph">
            You are probably wondering what your bycode is, or want to learn more! BYCO Direct has many other resources, such as our database, our box of tools and courses you can watch to learn how to type yourself. Click a box you are interested in below!
          </p>
        </div>
      </div>

      {/* <!-- Site Credits --> */}
      <div id="footer_credits_container">
        <div id="footer_credits">
          BYCO Direct is a behavioural taxonomy and is not accepted or recognised in psychology or neuroscience.
          <p> </p> 
          BYCO Direct, and BYCOGNITION overall, is a deviation and split off from the 
          <Link href="https://www.objectivepersonalitysystem.com/" target="_blank">
          Objective Personality System started by D. & S. Powers.</Link>
          The reflexes, stances and many other factors have their concept originate from them, and for that we thank them for sharing such insightful information open source. <br/> Without them this would never have been created.
          <p> </p> 
          The modules have their concept originate from 
          <Link href="https://wikisocion.github.io/content/psychological_types.html" target="_blank">
          Psychological Types by C. G. Jung.</Link>
          Some definitions have shifted, and will not correlate with what Jung intended. To avoid confusion they have been given new names and labels.
          <br/>
          <sharing 
            title="BYCO Direct"
            text="See who helped us"
            link="https://BYCO-DIRECT.lobobo.repl.co">
          </sharing>
        </div>
      </div>

    </main>
  )
}
