import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [quote, setQuote] = useState({});
  const showQuote = () => {
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => {
        setQuote(data);
        console.log(data);
        // console.log(newaray);
      });
  };

  return (
    <div className="App">
      <h5>{quote.content} </h5>
      <button onClick={showQuote}>Fetch</button>
    </div>
  );
}

export default App;
