import React, { useState } from 'react';

const App = () => {
  const [celsius, setCelsius] = useState(0);
  const [fahrenheit, setFahrenheit] = useState(32);

  function convertTemp(c) {
    let far = parseFloat((c * 9/5) + 32);
    setFahrenheit(far);
  }

  return (
    <div>
      <input
        type="number"
        value={celsius}
        onChange={(e) => {
          let value = parseFloat(e.target.value) || 0; // Handle empty input
          setCelsius(value);
          convertTemp(value);
        }}
      />
      <p>Celsius: {celsius}</p>
      <p>Fahrenheit: {fahrenheit}</p>
    </div>
  );
};

export default App;
