import React from 'react'
import './footer.css'
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import FacebookIcon from '@material-ui/icons/Facebook';


 const footer = () => {
  return (
    <>
     <div className='footer'>
        <div className='Socialmedia-icons'>
           <a href="https://lav-kushwaha.web.app/">
            <InstagramIcon/>
            <TwitterIcon/>
            <YouTubeIcon/>
            <FacebookIcon/>
            </a>
        </div>
        <div className='links'>
              <ul>
              <li><a href="#">Get the IMDb App</a></li>
              <li><a href="#">Help</a> </li>
              <li><a href="#">Site Index</a></li>
              <li><a href="#">IMDbPro</a></li>
              <li><a href="#">Box Office Mojo</a></li>
              <li><a href="#">IMDb Develop</a></li>
             </ul>
        </div>
        <div className='links'>
            <ul>
              <li><a href="#">Press Room</a></li>
              <li><a href="#">Advertising</a> </li>
              <li><a href="#">Jobs</a></li>
              <li><a href="#">Conditions of Use</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Your Ads Privacy Choices</a></li>
             </ul>
        </div>
        <div className='copyright'>
        <h4>An Amazon Company</h4>
        <h5>© 1990-2023 by lav-kushwaha.web.app, Inc.</h5>
        </div>
     </div>
    </>
  )
}

export default footer;