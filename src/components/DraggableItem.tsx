import { DragEvent, useRef } from "react";

const DraggableItem = ({
  stack,
  over,
  start,
}: {
  stack: string;
  over: any;
  start: any;
}) => {
  return (
    <div
      style={{
        width: "fit-content",
        height: "30px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "1px solid lightblue",
        borderRadius: "20px",
        padding: "3px 15px",
        cursor: "pointer",
        userSelect: "none",
      }}
      draggable
      onDragStart={start}
      onDragOver={over}
    >
      {stack}
    </div>
  );
};

export default DraggableItem;
