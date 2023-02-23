import React from 'react'

export default function Portfolio(){
    return(
        <div className='portfolio'>
            <div className='about'>
                <h3 className='about_title title'>About</h3>
                <div className='about_text text'>I am a frontend developer with a particular interest in making things
                simple and automating daily tasks. I try to keep up with security and best practices, 
                and am always looking for new things to learn.</div>
             </div>
             <div className='interests'>
                <h3 className='interests_title title'>Interests</h3>
                <div className='interests_text text'>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
                Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</div>
            </div>
        </div>
    )
}