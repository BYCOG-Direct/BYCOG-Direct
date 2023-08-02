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
        <div className="home"><font COLOR="#3D3B3C">..</font><Link href="/">Home</Link></div>
        <div className="divider"></div>
        <div className="database"><Link href="/database/">Database</Link></div>
        <div className="divider"></div>
        <div className="courses"><Link href="/essentials/">Courses</Link></div>
        <div className="divider"></div>
        <div className="tools"><Link href="/visualiser/">Tools</Link></div>
        <div className="profilePicture"><Link href="/"><div className="profilePicture"></div></Link></div>
      </div>
	
      {/* <!-- Attention Hook --> */}
      <div className="homeAlignCenter">
        <div id="standard_text">
          <p className="paragraph">
            Below each person’s likes, dislikes, decision making and personality is a	process they impulsively use all the time. <br/> We call these processes bycodes.
          </p>
        </div>
      </div>

      {/* <!-- NEXT --> */}
      <div className="homeAlignCenter">
        <div id="standard_text">
          <p className="microTitleText">
            Popular Database Entries
          </p>
          <div className="alignCenter">
            <div className="shapeExamples"></div>
          </div> 
        </div>
        <div className="microDivider"></div>
        <div id="standard_text">
          <p className="microTitleText">
            Popular Courses
          </p>
          <div className="alignCenter">
            <div className="shapeExamples"></div>
          </div>  
        </div>
        <div className="microDivider"></div>
        <div id="standard_text">
          <p className="microTitleText">
            Popular Tools
          </p>
          <div className="alignCenter">
            <div className="shapeExamples"></div>
          </div> 
        </div>
        <div className="microDivider"></div>
        <div id="standard_text">
          <p className="microTitleText">
            Popular Profiles
          </p>
          <div className="alignCenter">
            <div className="shapeExamples"></div>
          </div> 
        </div>
      </div>

      {/* <!-- Site Credits --> */}
      <div id="home_footer_credits_container">
        <div id="home_footer_credits">
          BYCO Direct is a behavioural taxonomy and is not accepted or recognised in psychology or neuroscience.
          <p> </p> 
          BYCO Direct, and BYCOGNITION overall, is a deviation and split off from the 
          <Link href="https://www.objectivepersonalitysystem.com/" target="_blank">
          Objective Personality System started by D. & S. Powers.</Link>
          The reflexes, stances and many other factors have their concept originate from them, and for that we thank them for sharing such insightful information open source. <br/>
          <p> </p> 
          The modules have their concept originate from 
          <Link href="https://wikisocion.github.io/content/psychological_types.html" target="_blank">
          Psychological Types by C. G. Jung. </Link>
          Some definitions have shifted, and will not correlate with what Jung intended. To avoid confusion they have been given new names and labels.
          <br/>
          <sharing 
            title="BYCO Direct"
            text="See who helped us"
            link="/">
          </sharing>
        </div>
      </div>

    </main>
  )
}
