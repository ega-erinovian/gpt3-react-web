import React, { useState } from 'react'

import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from './containers'
import { CTA, Brand, Navbar } from './components'

import { BiArrowFromBottom } from 'react-icons/bi'

import './App.css'
import { useEffect } from 'react'

const App = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if(window.pageYOffset > 300){
        setShowButton(true);
      }else{
        setShowButton(false);
      }
    })
  }, [])

  // This function will scroll the window to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div className="App">
        {showButton && (<button onClick={scrollToTop} id="myBtn" title="Go to top">{<BiArrowFromBottom />}</button>)}
        <div className="gradient__bg">
          <Navbar />
          <Header />
        </div>
        <Brand />
        <WhatGPT3 />
        <Features />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />
    </div>
  )
}

export default App