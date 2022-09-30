import logo from './logo.svg';
import './App.css';
import React, { useRef, useEffect } from 'react';

import { gsap, Power3, Power4} from 'gsap'

function App() {
  let logoItem = useRef(null)
  let pItem = useRef(null)

  useEffect(()=>{
    gsap.to(
      logoItem, //target 
      {
        duration: 3,
        opacity: 1,
        y: -30,
        ease: Power3.easeOut
      }
    )
  }, [])


  useEffect(() =>{
    gsap.to(
      pItem,{
        duration: 2,
        x: 100,
        ease: Power4.easeInOut
      }
    )
  })

  return (
    <div className="App">
      <header className="App-header">
        <img 
        ref={el => {logoItem = el}}
        src={logo} className="App-logo" alt="logo" />
        <p
        ref={pel => {pItem = pel}}
        >
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
