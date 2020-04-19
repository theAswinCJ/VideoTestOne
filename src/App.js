import React, { useState } from "react";
import "./App.css";
// import Lottie from "./Lottie.js";
import Animation from "./dataLottie.json";
import useForceUpdate from "use-force-update";
import Lottie from "lottie-react-web";

import ReactBodymovin from "react-bodymovin/lib/ReactBodymovinFull";

function App() {
  console.log(Animation);
  console.log(Animation.layers[1].t.d.k[0].s.t);
  let newTextValue;

  const forceUpdate = useForceUpdate();

  let [AnimationState, setAnimationState] = useState(Animation);
  let [renderKey, setRenderKey] = useState(1);

  function changeText() {
    let newTextInput = document.getElementById("newText");
    newTextValue = newTextInput.value;
    if (newTextValue) {
      AnimationState.layers[1].t.d.k[0].s.t = newTextValue;
      renderKey++;
      console.log(
        "Value in JSON Changed to - ",
        AnimationState.layers[1].t.d.k[0].s.t
      );
      forceUpdate();
    } else {
      alert("No value entered");
    }
  }

  const bodymovinOptions = {
    loop: true,
    autoplay: true,
    prerender: true,
    animationData: Animation,
  };

  return (
    <div className="App">
      <div
        style={{
          display: "grid",
          alignItems: "center",
          justifyItems: "center",
          height: "100%",
        }}
      >
        <p style={{ margin: "20px" }}>Enter Text</p>
        <input
          id="newText"
          style={{ margin: "20px", width: "50%", height: "20px" }}
          type="text"
        />
        <button
          style={{ margin: "20px", marginTop: "0px" }}
          onClick={changeText}
        >
          Submit
        </button>
        <div style={{ width: "600px", paddingTop: "100px" }}>
          {/* <Lottie key={renderKey} Animation={AnimationState} />
           */}
          <Lottie
            options={{
              animationData: AnimationState,
            }}
            animationControl={{
              "Text,Text,Source Text": newTextValue,
            }}
          />
          {/* <ReactBodymovin options={bodymovinOptions} /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
