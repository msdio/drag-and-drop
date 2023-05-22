const DraggableItem = ({ stack }: { stack: string }) => {
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
      }}
    >
      {stack}
    </div>
  );
};

export default DraggableItem;
