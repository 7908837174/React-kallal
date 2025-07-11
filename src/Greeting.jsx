import React from "react";

const Greeting = ({name = "xyz", age = 0}) => {
  return (
    <div>
      <h1>Hello , {name}</h1>
      <p>Welcome to my React app {age}!</p>

    </div>
  );
};

export default Greeting;

 
