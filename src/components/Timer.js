import { useState, useEffect } from "react";

function Timer() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let timer = setTimeout(() => {
            setCount((count) => count + 1);
        }, 1000);

        // Some effects require cleanup to reduce memory leaks.
        // Timeouts, subscriptions, event listeners, and other effects that are no longer needed should be disposed.
        // We do this by including a return function at the end of the useEffect Hook.
        return () => clearTimeout(timer)
    }, []);

    return <div>
        <h1>useEffect with empty array</h1>
        <h2>I've rendered {count} times!</h2>
        <h4>I only run on the initial render (or any time the source code for this component is updated and saved)</h4>
    </div>
}

export default Timer