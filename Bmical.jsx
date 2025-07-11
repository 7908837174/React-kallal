import React, { useState } from "react";

const App = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState("");

  function bmiConverter() {
    if (weight && height) {
      const heightInMeters = parseFloat(height) / 1
      const calculatedBmi = parseFloat(weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBmi(calculatedBmi);
    } else {
      alert("Please enter both weight and height.");
    }
  }

  return (
    <div>
      <h1>BMI Calculator</h1>
      <input
        type="number"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
        placeholder="Enter weight (kg)"
      />
      <input
        type="number"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
        placeholder="Enter height (cm)"
      />
      <button onClick={bmiConverter}>Calculate BMI</button>
      {bmi && <p>Your BMI is: {bmi}</p>}
    </div>
  );
};

export default App;
