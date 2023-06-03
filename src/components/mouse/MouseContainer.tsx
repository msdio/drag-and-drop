import { useState } from "react";
import { AdditionalStacks, Stacks } from "../../data";

export const MouseContainer = () => {
  const [array, setArray] = useState([...Stacks, ...AdditionalStacks]);
  const [selectedStack, setSelectedStack] = useState("");

  const mouseUp = (index: number) => {
    console.log("up", index);
  };
  const mouseOver = (index: number) => {
    console.log("over", index);
  };
  const mouseDown = (index: number) => {
    console.log("down", index);
  };

  return <></>;
};
