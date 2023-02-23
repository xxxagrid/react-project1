import React from 'react'
import Avatar from '../src/avatar.png'

export default function Info(){
    return(
        <div className='info'>
            <img src={Avatar} alt='Avatar' />
            <div className='info_text'>
                <h3 className='info_text_name'>Vika Baran</h3>
                <h4 className='info_text_profession'>Frontend Developer</h4>
                <p className='info_text_website'>vikabaran.website</p>
            </div>
            <div className='info_buttons'>
                <button className='button-info_email info_buttons_item'>Email</button>
                <button className='button-info_linkedin info_buttons_item'>Linkedin</button>
            </div>
        </div>
    )
}