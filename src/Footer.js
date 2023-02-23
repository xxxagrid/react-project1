import React from 'react'
import Twitter from '../src/icons/twitter.svg'
import Facebook from '../src/icons/facebook.svg'
import Instagram from '../src/icons/instagram.svg'
import GitHub from '../src/icons/github.svg'

export default function Footer(){
    return(
        <footer className='footer'>
            <div className='footer_icons'>
                <a href='#'><img src={Twitter} alt='Twitter icon'/></a>
                <a href='#'><img src={Facebook} alt='Facebook icon'/></a>
                <a href='#'><img src={Instagram} alt='Instagram icon'/></a>
                <a href='#'><img src={GitHub} alt='GitHub icon'/></a>
            </div>
        </footer>
    )
}