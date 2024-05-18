import React from 'react'
// import phone2 from "../assets/Img/pharris 001.jpeg";
import { HashLink as Link } from 'react-router-hash-link';
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiSass } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiStyledcomponents } from "react-icons/si";
import { IoLogoHtml5 } from "react-icons/io5";
import resume from "../assets/Img/Resume.pdf"





function Portfolio() {
  return (
    <div className='Portfolio-Container'>
        
        <nav className='Lawal-nav'>
            <div className='Lawal'>
                <p>LAWAL FARIS</p>
            </div>
            <div className='Resume'>
                <a href={resume} download="resume">
                    <button className='Resume-btn'>Resume</button>
                </a>
                <Link to={'#Contact'} style={{textDecoration: 'none'}} smooth>
                    <a href='#Contacts'>
                        <button className='Contact-btn'>Contact</button>
                    </a>
                </Link>
                
            </div>
        </nav>
        <div className='Front-End'>
            <h1>FRONT-END</h1>
            <h2>ENGINEER</h2>
        </div>
        <div className='About'>
            <p> <span className='bout'>ABOUT</span>  Hi, I'm Lawal Faris, a front-end engineer experienced in writing clean and reusable code with the latest tools.</p>
            <p>My career goal is to develop processes and software tools that can improve service delivery and product quality.</p>
        </div>
        <Link to={'#My-Tools'} style={{textDecoration: 'none'}} smooth>
            <div className='Scroll'>
                <p>Scroll down</p>
            </div>
        </Link>

        <div className='Tools-container' id='My-Tools'>
            <div className='ools'>
                <p>Tools :</p>
            </div>
            <div className='Tools-wrapper'>
                <div className='Tools-header'>
                    <div className='Tools-img'>
                        <FaReact className='react-icon' />
                        <p>React.js</p>
                    </div>
                    <div className='Tools-img'>
                        <TbBrandNextjs className='react-icon' />
                        <p>Next.js</p>
                    </div>
                    <div className='Tools-img'>
                        <IoLogoJavascript  className='react-icon' />
                        <p>Javascript</p>
                    </div>
                    <div className='Tools-img'>
                        <SiTypescript className='react-icon' />
                        <p>Typescript</p>
                    </div>
                    <div className='Tools-img'>
                        <SiCss3 className='react-icon' />
                        <p>Css3</p>
                    </div>
                    <div className='Tools-img'>
                        <SiSass className='react-icon' />
                        <p>Sass</p>
                    </div>
                    <div className='Tools-img'>
                        <SiTailwindcss className='react-icon' />
                        <p>Tailwindcss</p>
                    </div>
                    <div className='Tools-img-two'>
                        <SiStyledcomponents className='react-icon' />
                        <p>Styled components</p>
                    </div>
                    <div className='Tools-img'>
                        <IoLogoHtml5 className='react-icon' />
                        <p>Html5</p>
                    </div>
                </div>
            </div>
        </div>

        <div className='Projects-container'>
            <div className='Projects-wrapper'>
                <div className='Projects-texts'>
                    <div className='Featured'>
                        <p>Featured</p>
                        <p>Project(5)</p>
                    </div>
                    <p>React,Css,Html</p>
                </div>
                <div className='Projects-Sites'>
                    <a href='https://voting-system-pi.vercel.app/'>
                        <div className='Movies'>
                            <h2>Voting System</h2>
                        </div>
                    </a>
                    <div className='Visit'>
                        <button className='visit-btn'>
                            <a href='https://voting-system-pi.vercel.app/'>VISIT SITE</a>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div className='Projects-container'>
            <div className='Projects-wrapper'>
                <div className='Projects-texts-two'>
                    {/* <div className='Featured'>
                        <p>Featured</p>
                        <p>Project(5)</p>
                    </div> */}
                    <p>Javascript,Css,Html</p>
                </div>
                <div className='Projects-Sites'>
                    <a href='https://faris1208.github.io/Search-Engine/'>
                        <div className='Movies'>
                            <h2>Search - Engine</h2>
                        </div>
                    </a>
                    <div className='Visit'>
                        <button className='visit-btn'> 
                            <a href='https://faris1208.github.io/Search-Engine/'>VISIT SITE</a>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div className='Projects-container'>
            <div className='Projects-wrapper'>
                <div className='Projects-texts-two'>
                    {/* <div className='Featured'>
                        <p>Featured</p>
                        <p>Project(5)</p>
                    </div> */}
                    <p>Javascript,Css,Html</p>
                </div>
                <div className='Projects-Sites'>
                    <a href='https://faris1208.github.io/Country-Flag/'>
                        <div className='Movies'>
                            <h2>Country-Flag</h2>
                        </div>
                    </a>
                    <div className='Visit'>
                        <button className='visit-btn'>
                            <a href='https://faris1208.github.io/Country-Flag/'>VISIT SITE</a>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div className='Projects-container'>
            <div className='Projects-wrapper'>
                <div className='Projects-texts-two'>
                    {/* <div className='Featured'>
                        <p>Featured</p>
                        <p>Project(5)</p>
                    </div> */}
                    <p>React,Css,Html</p>
                </div>
                <div className='Projects-Sites'>
                    <a href='https://movieland-six-nu.vercel.app/'>
                        <div className='Movies'>
                            <h2>Movie App - Movies</h2>
                        </div>
                    </a>
                    <div className='Visit'>
                        <button className='visit-btn'>
                            <a href='https://movieland-six-nu.vercel.app/'>VISIT SITE</a>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div className='Projects-container-two'>
            <div className='Projects-wrapper'>
                <div className='Projects-texts-two'>
                    {/* <div className='Featured'>
                        <p>Featured</p>
                        <p>Project(5)</p>
                    </div> */}
                    <p>React,Scss,Html</p>
                </div>
                <div className='Projects-Sites'>
                    <a href='https://rock-bottom.vercel.app/'>
                        <div className='Movies'>
                            <h2>Rock Bottom Initiative</h2>
                        </div>
                    </a>
                    <div className='Visit'>
                        <button className='visit-btn'>
                            <a href='https://rock-bottom.vercel.app/'>VISIT SITE</a>
                        </button>
                    </div>
                </div>
            </div>
        </div>

       

    </div>
  )
}

export default Portfolio