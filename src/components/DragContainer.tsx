import { Stacks } from "../data";
import DraggableItem from "./DraggableItem";

const DragContainer = () => {
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
      {Stacks.map((stack: string) => (
        <DraggableItem stack={stack} />
      ))}
    </div>
  );
};

export default DragContainer;
