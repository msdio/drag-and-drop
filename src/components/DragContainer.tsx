import { useState } from "react";
import { AdditionalStacks, Stacks } from "../data";
import DraggableItem from "./DraggableItem";

const DragContainer = () => {
  const [array, setArray] = useState([...Stacks, ...AdditionalStacks]);
  const [selectedStack, setSelectedStack] = useState("");
  let timer: number;

  const dragStart = (index: number) => {
    setSelectedStack(array[index]);
  };

  const dragOver = (index: number) => {
    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      reorderArray(index);
    }, 200);
  };

  const reorderArray = (idx: number) => {
    const filteredArray = array.filter((el) => el !== selectedStack);

    const prev = filteredArray.slice(0, idx);
    const next = filteredArray.slice(idx, filteredArray.length);

    setArray([...prev, selectedStack, ...next]);
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
      {array.map((stack: string, index) => (
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
