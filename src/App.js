import React from 'react'
import Info from './Info'
import Portfolio from './Portfolio'
import Footer from './Footer'

export default function App(){
    return(
        <div className='app'>
            <Info />
            <Portfolio />
            <Footer />
        </div>
    )
}