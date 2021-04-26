import React from 'react';
import {Link} from 'react-router-dom';


const Footer = () => {
    return(
        <footer>
            <div className='links-container'>
                <img src="https://uar-web-static.api.ua.com/2791aa988d659ef157ee0a22fc185d5a.png"/>
                <ul className='social-ul'>
                    <li className='social-title-li'>
                      <span className='social-title'>ABOUT ME</span>
                    </li>
                    <li className='social-list-element'><a href='https://www.linkedin.com/in/alejandro-weil-b9275720b/'>Linked In</a></li>
                    <li className='social-list-element'><a href='https://github.com/aweil13'>Check out my Github</a></li>
                    <li className='social-list-element'><a href='https://angel.co/u/alejandro-weil'>AngelList</a></li>
                    <li className='social-list-element'><a href='https://aweil13.github.io/PortfolioSite/'>Personal Site</a></li>    
                </ul>
                <ul className='help-ul'>
                  <li className='help-title-li'>
                      <span className='help-title'>HELP</span>
                  </li>
                  <li className='help-list-element'><Link to='/login'>Log In</Link></li>
                  <li className='help-list-element'><Link to='/signup'>Sign Up</Link></li>
                  <li className='help-list-element'><a href="https://github.com/aweil13/ChartMyCourse/wiki">Website Repo</a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;