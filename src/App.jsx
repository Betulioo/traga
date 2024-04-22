import { useEffect, useState } from "react";
import "./App.css";
import Tragaperras from "./components/tragaperras/Tragaperras";

function App() {
  const [isWinner, setIsWinner] = useState(false);

  return (
    <>
      <Tragaperras fnWinner={setIsWinner} isWinners={isWinner}></Tragaperras>
    </>
  );
}

export default App;
