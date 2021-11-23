import {memo, useContext} from "react";
import {UserContext} from "../App";

const Todos = ({ todos }) => {
    console.log("child render");
    const myStyle = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Sans-Serif"
    };
    const userName = useContext(UserContext)
    return (
        <>
            <h2 style={myStyle}>{userName}'s Todos</h2>
            <h4>useContext used to obtain userName</h4>
            {todos.map((todo, index) => {
                return <p key={index}>{todo}</p>;
            })}
        </>
    );
};

export default memo(Todos);