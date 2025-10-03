import { useState } from "react";

const MultipleState = () => {
  const [color, setColor] = useState("Red");
  const [name, setName] = useState("Manoj");
  const [year, setYear] = useState("2024");

  // separate functions to update state
  const changeColor = () => setColor("Blue");
  const changeName = () => setName("Kumar");
  const changeYear = () => setYear("2025");

  return (
    <div>
      <h1>Color: {color}</h1>
      <h1>Name: {name}</h1>
      <h1>Year: {year}</h1>

      <button onClick={changeColor}>Change Color</button>
      <button onClick={changeName}>Change Name</button>
      <button onClick={changeYear}>Change Year</button>
    </div>
  );
};

export default MultipleState;
