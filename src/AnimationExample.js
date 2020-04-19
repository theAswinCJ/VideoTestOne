import React from "react";
import { Animator } from "@lottie-web/react";

const AnimationExample = (props) => {
  console.log("Rendered Animator");
  let data = props.finalAnimation;
  if (data) return <Animator animationData={data} />;
  else return <h4 style={{ color: "red" }}>JSON Error</h4>;
};
export default AnimationExample;
