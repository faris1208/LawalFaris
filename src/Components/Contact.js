import React from 'react'

function Contact() {
  return (
    <div className='Portfolio-Container'>
         <div className='Contacts' id='Contact'>
            <div className='Faris'>
                <a href='mailto:https://myaccount.google.com/email'>farislawal3@gmail.com</a>
            </div>
            <div className='Linkedin-head'>
                {/* <p>Ogun State, Ng</p> */}
                <div className='Linkedin'>
                    <a href='https://mobile.twitter.com/@Olabodepharris1' target="_blank"
              rel="noopener noreferrer">
                        <button className='Twitter'>TWITTER</button>
                    </a>
                    <a href='https//linkedin.com/in/faris-lawal-11b4972a6' target="_blank"
              rel="noopener noreferrer">
                        <button className='Twitter'>LINKEDIN</button>
                    </a>
                    <a href='https://github.com/faris1208' target="_blank"
              rel="noopener noreferrer">
                        <button className='Twitter'>GITHUB</button>
                    </a>
                </div>
                {/* <p>Designed by <span className='Isaac'>Isaac Fayemi</span></p> */}
            </div>
            <div className='Linkedin-head2'>
                <p>Ogun State, Ng</p>
                <div className='Linkedin'>
                    <a href='https://mobile.twitter.com/@Olabodepharris1' target="_blank"
              rel="noopener noreferrer">
                        <button className='Twitter'>TWITTER</button>
                    </a>
                    <a href='https://www.linkedin.com/in/faris-lawal-11b4972a6?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BMOaDj32rRuS0gBPO%2FALV3g%3D%3D' target="_blank"
              rel="noopener noreferrer">
                        <button className='Twitter'>LINKEDIN</button>
                    </a>
                    <a href='https://github.com/faris1208' target="_blank"
              rel="noopener noreferrer">
                        <button className='Twitter'>GITHUB</button>
                    </a>
                </div>
                <p>Designed by <span className='Isaac'>Isaac Fayemi</span></p>
            </div>
            <div className='Designed'>
                <p>Ogun State, Ng</p>
                <p><span className='Isaac'>Designed by </span>Isaac Fayemi</p>
            </div>
        </div>
    </div>
  )
}

export default Contact