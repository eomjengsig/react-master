import styled, { keyframes } from "styled-components";
import Circle from "./Circle";

function App() {
  return (
    <div>
      <Circle bgColor={"teal"} borderColor={"blue"} />
      <Circle bgColor={"tomato"} text={"hi!"} />
    </div>
  );
}

export default App;
