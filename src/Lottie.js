import React from "react";
import AnimationExample from "./AnimationExample.js";

function Lottie(props) {
  return (
    <div>
      <AnimationExample finalAnimation={props.Animation} />
    </div>
  );
}

export default Lottie;
