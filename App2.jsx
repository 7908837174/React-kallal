import React, { useState, useEffect } from "react";
import { ComponentOne } from "./componentOne";
import { ComponentTwo } from "./componentTwo";

const ExampleThree = () => {
    const [name, setName] = useState(() => {
        const savedName = localStorage.getItem("name");
        return savedName ? JSON.parse(savedName) : "";
    });

    useEffect(() => {
        localStorage.setItem("name", JSON.stringify(name));
    }, [name]);

    const handleChange = (event) => {
        setName(event.target.value);
    };

    const handleClear = () => {
        setName("");
    };

    return (
        <div>
            <h1>Your Name: {name}</h1>
            <input
                type="text"
                value={name}
                onChange={handleChange}
                placeholder="Enter Your Name"
            />
            <button onClick={handleClear}>Clear Name</button>
        </div>
    );
};

export default ExampleThree;

// Corrected version of App component
const App = () => {
    const [count, setCount] = useState(0);

    return (
        <section>
            <ComponentOne count={count} onClickHandler={() => setCount(count + 1)} />
            <ComponentTwo count={count} onClickHandler={() => setCount(count + 1)} />
        </section>
    );
};

// export default App;
