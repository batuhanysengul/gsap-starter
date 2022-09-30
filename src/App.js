import "./App.css";
import React, { useRef, useEffect, useState } from "react";
import { gsap, Power3 } from "gsap";

function App() {
  let circle = useRef(null);
  let circleRed = useRef(null);
  let circleBlue = useRef(null);

  //to prevent that flash when u refresh
  let app = useRef(null)

  const [state, setState] = useState(false)

  const handleExpand = () => {
    gsap.to(circleRed, {
      width: 200,
      height: 200,
      duration: 1,
      ease: Power3.easeOut
    })
    setState(true)
  }

  const handleShrink = () => {
    gsap.to(circleRed, {
      width: 75,
      height: 75,
      duration: 1,
      ease: Power3.easeOut
    })
    setState(false)
  }

  //disable react strict mode
  useEffect(() => {
    gsap.to(app, {
      duration: 0,
      css: {visibility: 'visible'}
    })

    gsap.from(circle, {
      duration: 1,
      opacity: 0,
      x: 200,
    })
    gsap.from(circleRed, {
      duration: 1,
      opacity: 0,
      x: 200,
      delay: 0.2,
    })
    gsap.from(circleBlue, {
      duration: 1,
      opacity: 0,
      x: 200,
      delay: 0.4,
    })
  }, []);

  return (
    <div className="App" ref={el => app = el}>
      <div className="circle-container">
        <div ref={(el) => (circle = el)} className="circle"></div>
        <div
        onClick={state !== true ? handleExpand : handleShrink}
        ref={(el) => (circleRed = el)} className="circle red"></div>
        <div ref={(el) => (circleBlue = el)} className="circle blue"></div>
      </div>
    </div>
  );
}

export default App;
