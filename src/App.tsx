import DragContainer from "./components/drag/DragContainer";

function App() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <DragContainer />
    </div>
  );
}

export default App;
