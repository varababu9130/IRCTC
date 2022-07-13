import React from 'react'
  import { FaHome, FaClipboardCheck, FaClipboardList, FaPlane, FaTrain, FaArrowRight, 
    FaFacebookF, FaInstagram, FaLinkedinIn, FaTelegram, FaPinterest, FaTumblr, FaTwitter} from 'react-icons/fa';
  import { BiHotel } from "react-icons/bi"
  import {IoTrendingUpSharp, IoBusSharp} from 'react-icons/io5';
  import {MdDinnerDining, MdRamenDining } from "react-icons/md";
  import {GiMountainCave} from 'react-icons/gi';
  import {IoIosTrain} from 'react-icons/io';
import {GrGallery} from 'react-icons/gr';
import { ImYoutube2 } from "react-icons/im";



const Navbar = () => {
  return (
    <div className='container'>
        <div className="main-header">
            <div className="header-logo-left">
                <img src="Images/secondry-logo.png" alt="railway logo" />
            </div>
            <div className="navigation">
              <div className="header-nav1">
                <button className='navigation-btn'>LOGIN</button>
                <ul>
                  <li>
                    <a href="/">REGISTER</a>
                  </li>
                  <li>
                    <a href="/">AGENT LOGIN</a>
                  </li>
                  <li>
                    <a href="/">CONTACT US</a>
                  </li>
                  <li>
                    <a href="/">ASK DISHA</a>
                  </li>
                </ul>
                <button id='alert-btn' className='navigation-btn'>ALERTS</button>
                  <ul>
                    <li>
                      <h4>09-07-2022 [09:22:33]</h4>
                    </li>
                    <li>
                    <a href="/">A<sup>-</sup></a>
                    </li>
                    <li>
                      <a href="/">A</a>
                    </li>
                    <li>
                      <a href="/">A<sup>+</sup></a>
                    </li>
                    <li>
                      <h4>हिन्दी</h4>
                    </li>
                  </ul>
              </div>
              <div className="header-nav2">
                <ul>
                  <li id='home-logo'>
                  <FaHome/>
                  </li>
                  <li>
                    <button className="navigation-btn">IRCTC EXCLUSIVE</button>
                  </li>
                  <li>
                    <a id='trains' href="/">TRAINS</a>
                  </li>
                  <li>
                    <a href="/">BUSES</a>
                  </li>
                  <li>
                    <a href="/">FLIGHTS</a>
                  </li>
                  <li>
                    <a href="/">HOTELS</a>
                  </li>
                  <li>
                    <a href="/">HOLIDAYS</a>
                  </li>
                  <li>
                    <a href="/">LOYALTY</a>
                  </li>
                  <li>
                    <a href="/">MEALS</a>
                  </li>
                  <li>
                    <a href="/">PROMOTIONS</a>
                  </li>
                  <button className="navigation-btn">PREMIUM PARTNER</button>
                  <li>
                    <a href="/">MORE</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="header-log-right">
                <img src="Images/IRCTC-Logo.jpg" alt="" />
                {/* <TiThMenuOutline /> */}
            </div>
        </div>
        <div className="article">
          <div className="main-middle">
            <div className="status-nav">
                <div id='pnr-charts' className="pnr-div">
                    <FaClipboardCheck id='pnr-logo' />
                    <a href="/">PNR STATUS</a>
                  </div>
                  <div id='pnr-charts' className="charts-div">
                    < FaClipboardList id='pnr-logo' />
                    <a href="/">CHARTS / VACANCY</a>
                  </div>
                </div>
              <div className="middle-box">
              <div className="book-ticket-div">
                <img src="Images/Azadi-Logo.png" alt="Azami logo" />
                <h2>BOOK TICKET</h2>
            </div>
            <div className="timings">
              <div className="from-date">
                <div className="from-div">
                  <p>From</p>
                  <select id='from-options' className='option-date'>
                    <option value="">HYDERABAD</option>
                    <option value="">BANGALORE</option>
                    <option value="">DELHI</option>
                    <option value="">PUNE</option>
                    <option value="">MUMBAI</option>
                    <option value="">CHENNAI</option>
                    <option value="">TRIVENDRAM</option>
                    <option value="">VIZAG</option>
                  </select>
                </div>
                <div className="date-div">
                  <p>DD/MM/YYYY<sup>*</sup></p>
                  <input className='option-date' type="date" />
                </div>
              </div>
              <div className="to-all">
                <div className="to-div">
                  <p>To</p>
                  <select id='to-options' className='option-all'>
                    <option value="">BANGALORE</option>
                    <option value="">DELHI</option>
                    <option value="">PUNE</option>
                    <option value="">MUMBAI</option>
                    <option value="">CHENNAI</option>
                    <option value="">TRIVENDRAM</option>
                    <option value="">VIZAG</option>
                  </select>
                </div>
                <div id='all-options' className="all-classes">
                <select className='option-all'>
                    <option value="">All Classes</option>
                    <option value="">Anubhuti Class (EA)</option>
                    <option value="">AC First Class (1A)</option>
                    <option value="">Vistadome AC (EV)</option>
                    <option value="">Exec. Chair Car (EC)</option>
                    <option value="">AC 2 Tier (2A)</option>
                    <option value="">First Class (FC)</option>
                    <option value="">AC 3 Tier (3A)</option>
                    <option value="">AC 3 Economy (3A)</option>
                    <option value="">Vistadome Chair Car (VC)</option>
                    <option value="">AC Chair car (CC)</option>
                    <option value="">Sleeper (SL)</option>
                    <option value="">Vistadome Non AC (VS)</option>
                    <option value="">Second Sitting (2s)</option>
                  </select>
                </div>
              </div>
              <div className="general-div">
                <select id='general-options' className='option-general'>
                  <option value="">GENERAL</option>
                  <option value="">LADIES</option>
                  <option value="">LOWER BERTH/SR.CITIZEN</option>
                  <option value="">PERSON WITH DISABILITY</option>
                  <option value="">TATKAL</option>
                  <option value="">PREMIUM TATKAL</option>
                </select>
              </div>
            </div>
            <div className="checkbox-div">
              <div className="checkbox1">
                <input type="checkbox" />
                <p>Person With Disability Concession</p>
                <input type="checkbox" />
                <p >Flex With Date</p>
              </div>
              <div className="checkbox2">
                <input type="checkbox" />
                <p>Train With Available Berth</p>
                <input type="checkbox" />
                <p>Railway Pass Concession</p>
              </div>
              <button>Search</button>
            </div>
            </div>
            <div className="noties">
              <div className="para1">
              <p><span className='new'>New</span> IRCTC launches ticket booking on ASK DISHA 2.0 <span className='link'><a href="/">Click here</a></span></p>
              </div>
              <div className="para2">
              <p>Indian Railways have started rpovisioning of Linen in trains. <span className='link'><a href="/">Click here</a></span> for the list of trains where Linen Services have been restarted as on date.</p>
              </div>
            </div>
          </div>
          <div className="middle-name">
            <h1>INDIAN RAILWAYS</h1>
            <h2>Sefty | Security | Punctuality |</h2>
          </div>   
          </div>
          <div className="middle-head">
            <h1>Have you not found the right one?<br />
              Find a service suitable for you here
            </h1>
          </div>
          <div className="middle-logos">
            <div className="circle1">
              <div id="circle1-top" className="middle-circle">
                <span className="logos"> < FaPlane/> </span>
                <p>FLIGHTS</p>
              </div>
              <div id="circle1-top" className="middle-circle">
                <span className="logos"> <BiHotel /> </span>
                <p>HOTELS</p>
              </div>
              <div id="circle1-top" className="middle-circle">
                <span className="logos"> <IoTrendingUpSharp/> </span>
                <p>RAIL DRISHTI</p>
              </div>
              <div id="circle1-top" className="middle-circle">
                <span className="logos"> <MdRamenDining/> </span>
                <p>E-CATERING</p>
              </div>
              <div id="circle1-top" className="middle-circle">
                <span className="logos"> <IoBusSharp/> </span>
                <p>BUS</p>
              </div>
            </div>
            <div className="circle2">
              <div id='circle2-dwn' className="middle-circle">
                <span className="logos"> <MdDinnerDining/> </span>
                <p>HOLIDAY PACKAGES</p>
              </div>
              <div id='circle2-dwn' className="middle-circle">
                <span className="logos"> <FaTrain/> </span>
                <p>TOURIST TRAIN</p>
              </div>
              <div id='circle2-dwn' className="middle-circle">
                <span className="logos"> <GiMountainCave/> </span>
                <p>HILL RAILWAYS</p>
              </div>
              <div id='circle2-dwn' className="middle-circle">
                <span className="logos"> <IoIosTrain/> </span>
                <p> CHATTER TRAIN</p>
              </div>
              <div id='circle2-dwn' className="middle-circle">
                <span className="logos"> <GrGallery/> </span>
                <p>GALLERY</p>
              </div>
            </div>
          </div>
          <div className="holidays">
            <h1>HOLIDAYS</h1>
          </div>
          <div className="express-main">
            <div className="main-packages">
              <div className="package-top">
                <div className="express">
                  <div className="package-img">
                    <img src="Images/exterior.jpg" alt="train" />
                  </div>
                  <div className="package-para">
                    <h3>Maharajas' Express</h3>
                    <p>Redefining Royalty, Luxury and Comfort, Maharajas' express takes you on a sojourn to the era of bygone stately splendour of princely states. Sylvan furnishings, elegant ambience and modern amenities are amalgamated for an “Experience Unsurpassed”. It has been a winner of “World's Leading Luxury train” by World Travel Awards consecutively for last six years.</p>
                    <a href="/">Read More <FaArrowRight/></a>
                  </div>
                </div>
                <div className="express">
                  <div className="package-img">
                    <img src="Images/Thailand.jpg" alt="Thailand" />
                  </div>
                  <div className="package-para">
                    <h3>International Packages</h3>
                    <p>Best deals in International Holiday packages, handpicked by IRCTC, for Thailand, Dubai, Sri Lanka, Hong Kong, China, Macau, Bhutan, Nepal, U.K., Europe, USA, Australia etc. The packages are inclusive of sightseeing, meals, visa charges and overseas medical insurance to give you a hassle-free and memorable experience.</p>
                    <div className="link2">
                    <a href="/">Read More <FaArrowRight/></a>
                    </div>
                  </div>
                </div>
                <div className="express">
                  <div className="package-img">
                    <img src="Images/Kashmir.jpg" alt="Kashmir" />
                  </div>
                  <div className="package-para">
                    <h3>Domestic Air Packages</h3>
                    <p>Be it the spiritual devotee seeking blessings of Tirupati, Shirdi or Mata Vaishno Devi or the leisure traveller wanting to relish the Blue mountains of North East, Sand-dunes of Rajasthan, Hamlets of Ladakh, Wonders of Himalayas, Serene lakes or Picturesque Islands, IRCTC has it all. Discover India through IRCTC!</p>
                    <span className='link3'>
                    <a href="/">Read More <FaArrowRight/></a>
                    </span>
                  </div>
                </div>
                </div>
                <div className="package-btm">
                <div className="express">
                  <div className="package-img">
                    <img src="Images/Buddha_Banner.jpg" alt="Buddha" />
                  </div>
                  <div className="package-para">
                    <h3>Buddhist Circuit Tourist Train</h3>
                    <p>India, the country where Buddhism originated has rich memories of the Buddhist legacy. As part of its drive towards austerity, the only kind of art & architecture that it supported were Stupas, Chaityas & Viharas. Buddhist Train India will help you visit all these places up close for a truly religious experience.</p>
                    <a href="/">Read More <FaArrowRight/></a>
                  </div>
                </div>
                <div className="express">
                  <div className="package-img">
                    <img src="Images/Manali.jpg" alt="train" />
                  </div>
                  <div className="package-para">
                    <h3>Rail Tour Packages</h3>
                    <p>IRCTC offers Exclusive Rail tour packages with confirmed train tickets, sight-seeing and meals for enchanting Nilgiri Mountains, Darjeeling, Kullu Manali, Kashmir, Gangtok or divine tours of Mata Vaishno Devi, Rameswaram, Madurai, Shirdi, Tirupati etc. Holiday packages/ Land packages to these destinations are also available.</p>
                    <span className='link5'>
                    <a href="/">Read More <FaArrowRight/></a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="social-logos">
            <span className="social-para">
            <p>Get connected with us on social networks</p>
            </span>
              <span className='logos-social'>
                <a id='facebook' href="www.facebook.com"><FaFacebookF/></a>
                <a id='youtube' href="www.youtube.com"><ImYoutube2/></a>
                <a id='instagram' href="www.instagram.com"><FaInstagram/></a>
                <a id='linkedin' href="www.linkedin.com"><FaLinkedinIn/></a>
                <a id='telegram' href="www.telegram.com"><FaTelegram/></a>
                <a id='pinterest' href="www.pinterest"><FaPinterest/></a>
                <a id='tumbler' href="www.tumbler.com"><FaTumblr/></a>
                <a id='twitter' href="www.twitter.com"><FaTwitter/></a>
              </span>
          </div>
          <div className="footer">
            <div className="footer-div">
            <div className="footer-container">
              <ul>
                <li>
                  <a href="/">IRCTC Trains</a>
                </li>
                <li>
                  <a href="/">General Information</a>
                </li>
                <li>
                  <a href="/">Important Information</a>
                </li>
                <li>
                  <a href="/">Agents</a>
                </li>
                <li>
                  <a href="/">Enquiries</a>
                </li>
              </ul>
            </div>
            <div className="footer-container">
              <ul>
                <li>
                  <a href="/">How To</a>
                </li>
                <li>
                  <a href="/">IRCTC Official App</a>
                </li>
                <li>
                  <a href="/">Advenrtise with us</a>
                </li>
                <li>
                  <a href="/">Refund Rules</a>
                </li>
                <li>
                  <a href="/">Person With Disability Ficilities</a>
                </li>
              </ul>
            </div>
            <div className="footer-container">
              <ul>
                <li>
                  <a href="/">IRCTC eWallet</a>
                </li>
                <li>
                  <a href="/">IRCTC Loyalty Program</a>
                </li>
                <li>
                  <a href="/">IRCTC-iPAY Payment Giteway</a>
                </li>
                <li>
                  <a href="/">IRCTC Zone</a>
                </li>
              </ul>
            </div>
            <div className="footer-container">
              <ul>
                <li>
                  <a href="/">For Newly Migrated Agents</a>
                </li>
                <li>
                  <a href="/">Mobile Zone</a>
                </li>
                <li>
                  <a href="/">Policies</a>
                </li>
                <li>
                  <a href="/">Ask Dish ChatBot</a>
                </li>
                <li>
                  <a href="/">About us</a>
                </li>
              </ul>
            </div>
            </div>
          </div>
          <div className="bottom">
            <span className="btm-img">
              <img src="Images/security.png" alt="" />
            </span>
            <div className="copyrights">
              <p>Copyright Â© 2022 - www.irctc.co.in. All Rights Reserved</p>
              <p>Designed and Hosted by <a href="/">CRIS</a></p>
              <a href="/">Compatible Browsers</a>
            </div>
          </div>
        </div>
  )
}

export default Navbar;