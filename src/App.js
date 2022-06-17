import './App.css';
import * as Reactbs from "react-bootstrap";


function App() {
  return (
    <div className="App"> 

{/*Home component */}
      <div id="home">

        <Reactbs.Navbar collapseOnSelect expand="lg" variant="dark">
          <Reactbs.Container>

            <img className="logoimg" src={require('./hlogo.png')} alt="image" />

            <Reactbs.Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Reactbs.Navbar.Collapse id="responsive-navbar-nav">
              <Reactbs.Nav className="me-auto">

              </Reactbs.Nav>
              <Reactbs.Nav>

                <Reactbs.NavLink href="#home">Home</Reactbs.NavLink>
                <Reactbs.NavLink href="#services">Services</Reactbs.NavLink>
                <Reactbs.NavLink href="#pricing">Pricing</Reactbs.NavLink>
                <Reactbs.NavLink href="#testimonials">Testimonials</Reactbs.NavLink>
                <Reactbs.NavLink href="#blog">Blog</Reactbs.NavLink>
                <button className='butn'>Free Trial</button>
              </Reactbs.Nav>
            </Reactbs.Navbar.Collapse>
          </Reactbs.Container>
        </Reactbs.Navbar>

        <div className='hmain'>

          <div className='htext'>
            <h1>Codext one of the best system in SAAS.</h1><br></br>
            <div className='mstext'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
            </div><br></br>

            <button className='butn'>Try A Live Demo </button>

          </div>

          <div>
            <img className="homeimg" src={require('./homeimg.png')} alt="image" />
          </div>

        </div>
      </div>

      <div className='hmain2'>
        <div className='cont1'>
          <img className="homeimg2" src={require('./himg2.png')} alt="image" />
        </div>
        <div className='cont2'>
          <h1>It's helpful for operating<br></br>system</h1><br></br>
          <div className='arcontainer'>
            <div className='arrow'>
              <img src={require('./arrow1.png')} alt="arrow" />
            </div>
            <div className='artext'>
              <h3>Ultra fast & Secure</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
            </div>

          </div>
          <div className='arcontainer'>
            <div className='arrow'>
              <img src={require('./arrow2.png')} alt="arrow" />
            </div>
            <div className='artext'>
              <h3>Allows customization</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
            </div>

          </div>
          <div className='arcontainer'>
            <div className='arrow'>
              <img src={require('./arrow3.png')} alt="arrow" />
            </div>
            <div className='artext'>
              <h3>Smart contract</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
            </div>

          </div>
        </div>
      </div>


{/*Services component */}
      <div id="services">

        <h1>We Provides best Feature<br></br> for customer</h1>
        <br></br>
        <br></br>

        <div className='srvmain'>
          <div className='srvbox'>
            <img className='b1image' src={require('./b1.png')} alt="codeimg" />
            <br></br>
            <br></br>
            <h3>Clean Code</h3>
            <p>Lorem ipsum dolor sit amet<br></br>consectetur adipiscing elit</p>
          </div>
          <div className='srvbox'>
            <img className='b1image' src={require('./b2.png')} alt="codeimg" />
            <br></br>
            <br></br>
            <h3>Data Analytic</h3>
            <p>Lorem ipsum dolor sit amet<br></br>consectetur adipiscing elit</p>
          </div>
          <div className='srvbox'>
            <img className='b1image' src={require('./b3.png')} alt="codeimg" />
            <br></br>
            <br></br>
            <h3>Fully Secured</h3>
            <p>Lorem ipsum dolor sit amet<br></br>consectetur adipiscing elit</p>
          </div>
          <div className='srvbox'>
            <img className='b1image' src={require('./b4.png')} alt="codeimg" />
            <br></br>
            <br></br>
            <h3>Clean Code</h3>
            <p>Lorem ipsum dolor sit amet<br></br>consectetur adipiscing elit</p>
          </div>
        </div>
      </div>


{/*Pricing component */}
      <div id='pricing'>

        <h1>Choose your best pricing plan</h1>
        <br></br>
        <br></br>
        <h3>Added for Monthly</h3>
        <br></br>
        <br></br>

        <div className='prcmain'>

          <div className='prcbox'>
            <div className='texthover'>
              <h3>Start-up</h3>
              <div className='sline'>
                <span class="dot"></span>
                <hr className='line'></hr>
                <span class="dot"></span>
              </div>
              <h1>$10/mo</h1>
              <br></br>
            </div>
            <h4>Easy Customizable</h4>
            <h4>Commercial license</h4>
            <h4>Single user license</h4>
            <h4>Hotline support 24/7</h4>
            <br></br>
            <button className='butn'>TRY THIS PACKAGE</button>
          </div>

          <div className='prcbox'>
            <div className='texthover'>
              <h3>Classic</h3>
              <div className='sline'>
                <span class="dot"></span>
                <hr className='line'></hr>
                <span class="dot"></span>
              </div>
              <h1>$30/mo</h1>
              <br></br>
            </div>
            <h4>Easy Customizable</h4>
            <h4>Commercial license</h4>
            <h4>5 user license</h4>
            <h4>Hotline support 24/7</h4>
            <br></br>
            <button className='butn'>TRY THIS PACKAGE</button>
          </div>

          <div className='prcbox'>
            <div className='texthover'>
              <h3>Premium</h3>
              <div className='sline'>
                <span class="dot"></span>
                <hr className='line'></hr>
                <span class="dot"></span>
              </div>
              <h1>$49/mo</h1>
              <br></br>
            </div>
            <h4>Easy Customizable</h4>
            <h4>Commercial license</h4>
            <h4>10 user license</h4>
            <h4>Hotline support 24/7</h4>
            <br></br>
            <button className='butn'>TRY THIS PACKAGE</button>
          </div>

        </div>
      </div>

{/*Testimonials component */}
      <div id='testimonials'>

        <h1>Lets's see our User's Review</h1>
        <br></br>
        <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio<br></br> Praesent libero. Sed cursus ante dapibus diam. Sed nisi.</h4>
        <br></br>
      </div>

      <div className='revmain'>

        <div className='revbox'>

          <div className='c1'>
            <img className='qmimg' src={require('./quotation-marks.png')} alt="quotation-marks" />

            <p><br></br>Lorem ipsum dolor sit amet,<br></br> consectetur adipiscing elit.<br></br> Integer nec odio Praesent libero...</p>
          </div>
          <br></br>

          <div className='c2'>
            <img className='ps' src={require('./ps1.jpg')} alt="person image" />
            <h3>Wilson Berson</h3>
          </div>

        </div>
        <div className='revbox'>

          <div className='c1'>
            <img className='qmimg' src={require('./quotation-marks.png')} alt="quotation-marks" />

            <p><br></br>Lorem ipsum dolor sit amet,<br></br> consectetur adipiscing elit.<br></br> Integer nec odio Praesent libero...</p>
          </div>
          <br></br>

          <div className='c2'>
            <img className='ps' src={require('./ps2.jpg')} alt="person image" />
            <h3>Julia Aminoff</h3>
          </div>

        </div>

        <div className='revbox'>

          <div className='c1'>
            <img className='qmimg' src={require('./quotation-marks.png')} alt="quotation-marks" />

            <p><br></br>Lorem ipsum dolor sit amet,<br></br> consectetur adipiscing elit.<br></br> Integer nec odio Praesent libero...</p>
          </div>
          <br></br>

          <div className='c2'>
            <img className='ps' src={require('./ps3.jpg')} alt="person image" />
            <h3>Ram gupta</h3>
          </div>

        </div>
      </div>

{/*Blog component */}
      <div id="blog">

        <h1> Latest insights news</h1>
        <div className="blgmain">
          <div className='blgbox'>
            <img className='blgimage' src={require('./blgimg1.jpg')} alt="officeimg" />
            <br></br>
            <br></br>
            <pre>Our Creative Team      17 june 2021      by Steve Smith</pre>

            <div className='blgboxtxt'>
              <h3>Running remote offsites and onboardings</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipiscing elit consectetur<br></br>  adipiscing elit.Integer nec odio Praesent libero</p>
              <button className='butn'>Continue</button>
            </div>

          </div>



          <div className='blgbox'>
            <img className='blgimage' src={require('./blgimg2.jpg')} alt="meetingimg" />
            <br></br>
            <br></br>
            <pre>Create presentations      17 june 2021      by thomas lews</pre>

            <div className='blgboxtxt'>
              <h3>A new look & new ways to collaborate</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipiscing elit consectetur<br></br>  adipiscing elit.Integer nec odio Praesent libero</p>
              <button className='butn'>Continue</button>
            </div>

          </div>
        </div>
      </div>


{/*Footer component */}
      <footer>
       <div className='fmain'>
       <div className='fc1'>
          <img className="logoimg" src={require('./hlogo.png')} alt="image" />
          <br></br>
          <br></br>

          <p className='fc1text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras interdum nisl erat, eu efficitur orci vestibulum sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

          <br></br>
          <div className='ficons'>
            <a href='https://www.facebook.com/'>
            <img className="iconsimg" src={require('./fb1logo.png') } alt="facebook" />
            </a>
            <a href='https://twitter.com/i/flow/login'>
            <img className="iconsimg" src={require('./twtlogo.png')} alt="twitter" />
            </a>
            <a href='https://www.linkedin.com/'>
            <img className="iconsimg" src={require('./lnklogo.png')} alt="linkedin" />
            </a>
          </div>
        </div>

        <div className='fc2'>
          <h3>Resources</h3>
          <br></br>
          <br></br>
          <p>Services</p>
          <p>Pricing</p>
          <p>Testimonials</p>
          <p>Blog</p>
        </div>

        <div className='fc2'>
        <h3>Usefull links</h3>
          <br></br>
          <br></br>
          <p>Terms of services</p>
          <p>Privacy policy</p>
          <p>Cookie policy</p>
          <p>Contact Us</p>
        </div>

        <div className='fc3'>
          <h3>Newsletter</h3>
          <br></br>
          <br></br>
          <p>Sign up and receive the latest<br></br>news via email</p>
          <div className='emailbox'>
          <input type="text" placeholder="Email address" />
          <button className='butn'>Send</button>
          </div>
        </div>
       </div>
        <p className='copyrighttxt'>Copyright 2021 The Codext All Rights Reserved.</p>
      </footer>


    </div>
  );
}

export default App;
