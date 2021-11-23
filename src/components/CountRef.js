import {useEffect, useRef, useState} from "react";

function CountRef() {
    const [inputValue, setInputValue] = useState("");
    const count = useRef(0);

    useEffect(() => {
        count.current = count.current + 1;
    });

    return (
        <>
            <h1>useRef does not re-render when value updated</h1>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <h1>Render Count: {count.current}</h1>
            <h2>{inputValue}</h2>
        </>
    );
}

export default CountRef