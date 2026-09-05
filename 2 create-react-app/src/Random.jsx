import { useState } from "react";

function Random() {
  const [number, setNumber] = useState(0);

  function randomNumber() {
    setNumber(Math.random() * 100);
  }

  return (
    <div>
      <h1 style={{ backgroundColor: "blue" }}>
        Random Number is:{Math.round(number)}
      </h1>
      <button style={{ backgroundColor: "green" }} onClick={randomNumber}>
        Generate Random Number
      </button>
    </div>
  );
}

export default Random;
