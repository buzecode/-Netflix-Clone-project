import React from 'react'
import './footer.css'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import XIcon from '@mui/icons-material/X';


const Footer = () => {
  return (
    <div className='footer_outer_container'>
        <div className='footer_inner_container'>

            <div className='footer_icons'>

                <FacebookOutlinedIcon/>
                <InstagramIcon/>
                <YouTubeIcon/>
                <XIcon/>
            </div>
            <div className='footer_data'>
                <div>
                    <ul>
                        <li>Audio Description</li>
                        <li>Investor Relation</li>
                        <li> Legal Notice</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>Helpe Center</li>
                        <li>Jobs</li>
                        <li>Cookie Preferences</li>
                    </ul>
                </div>
                <div>
                    <ul>
                    <li>Gift Cards</li>
                    <li>Term of Use</li>
                    <li>Corporate Information</li>
                    </ul>
                </div>
                <div>
                <ul>
                    <li>Media Center</li>
                        <li>Privacy</li>
                        <li>Contact Use</li>
                </ul>
                </div>
            </div>
            <div className='service_code'>
            <p>
                Service Code
            </p>
            </div>
            <div className='copy-write'>
             &#169; 1997-2024 Netflix,inc.
            </div>
        </div>

    </div>
  )
}

export default Footer