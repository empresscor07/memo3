import { useState, useEffect } from "react";

function Counter() {
    const [count, setCount] = useState(0);
    const [calculation, setCalculation] = useState(0);

    useEffect(() => {
        setCalculation(() => count * 2);
    }, [count]); // <- add the count variable here

    return (
        <>
            <h1>useEffect dependent on Props or State value</h1>
            <p>Count: {count}</p>
            <button onClick={() => setCount((c) => c + 1)}>+</button>
            <p>Calculation: {calculation}</p>
            <h4>Runs on the first render and any time any dependency value changes</h4>
        </>
    );
}

export default Counter