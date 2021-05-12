import React, {useState, useEffect} from "react";
import "./LandingPage.css";
import Typist from "react-typist";

export default function LandingPage() {
  const [count, setCount] = useState(1);

  useEffect(() => {
    // document.title = `You clicked ${count} times`;
    console.log("Count: " + count);
    setCount(1);
  }, [count]);
  return (
    <div className="landingPage">
      <div className="LandingPage_animation">
        {count ? (
          <Typist avgTypingDelay={150} onTypingDone={() => setCount(0)}>
            <span> Nirvana UI </span>
            <Typist.Backspace count={8} delay={500} />
            <span>vana UI </span>
          </Typist>
        ) : (
          ""
        )}
        <button>
          <a href="/getStarted"> ➡ </a>{" "}
        </button>
      </div>
    </div>
  );
}
