import { useState, useRef, DragEvent } from "react";
import { AdditionalStacks, Stacks } from "../data";
import DraggableItem from "./DraggableItem";

const DragContainer = () => {
  const [stacks, setStacks] = useState([...Stacks, ...AdditionalStacks]);
  const [selectedStack, setSelectedStack] = useState("");
  const selectedIndex = useRef(-1);
  let timer: number;

  const dragStart = (index: number) => {
    selectedIndex.current = index;
    setSelectedStack(stacks[index]);
  };

  const dragOver = (index: number) => {
    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      reassemble(index);
    }, 200);
  };

  const reassemble = (idx: number) => {
    const filteredArray = stacks.filter((el) => el !== selectedStack);

    const prev = filteredArray.slice(0, idx);
    const next = filteredArray.slice(idx, filteredArray.length);

    setStacks([...prev, selectedStack, ...next]);
  };

  return (
    <div
      style={{
        width: "80vw",
        height: "20vh",
        border: "2px solid gray",
        borderRadius: "8px",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: "10px",
        padding: "0 50px",
      }}
    >
      {stacks.map((stack: string, index) => (
        <DraggableItem
          key={stack}
          stack={stack}
          start={() => dragStart(index)}
          over={() => dragOver(index)}
        />
      ))}
    </div>
  );
};

export default DragContainer;
