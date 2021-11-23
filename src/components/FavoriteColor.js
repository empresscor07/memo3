import React, { useState } from "react";
import {Badge, Button} from "react-bootstrap";

function FavoriteColor() {
    const [color, setColor] = useState("red");
    const [bg, setBg] = useState("danger")

    return (
        <>
            <h1>useState</h1>
            <h2>My favorite color is <Badge bg={bg}>{color}</Badge></h2>
            <Button
                className='mx-2'
                variant='primary'
                type="button"
                onClick={() => {setColor("blue")
                setBg("primary")}}
            >Blue</Button>
            <Button
                className='mx-2'
                variant='danger'
                type="button"
                onClick={() => {setColor("red")
                setBg("danger")}}
            >Red</Button>
            <Button
                className='mx-2'
                variant='warning'
                type="button"
                onClick={() => {setColor("yellow")
                setBg("warning")}}
            >Yellow</Button>
            <Button
                className='mx-2'
                variant='success'
                type="button"
                onClick={() => {setColor("green")
                setBg("success")}}
            >Green</Button>
        </>
    );
}

export default FavoriteColor