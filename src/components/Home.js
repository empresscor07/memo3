import { useState } from "react";
import Todos from "./Todos"
import FavoriteColor from "./FavoriteColor";
import Counter from "./Counter";
import Timer from "./Timer";
import CountRef from "./CountRef";

const Home = (props) => {
    //on this page we use props to access userName, on the children of this page we use useContext
    const [todos, setTodos] = useState(["Laundry", "Grocery Shop"]);
    const [todo, setTodo] = useState('');


    function handleClick(e) {
        setTodos(previousState => [...previousState, todo])
        document.getElementById('todo').value = ''

    }

    return (

            <>
                <h1>Welcome {props.userName}</h1>
                <Todos todos={todos} />
                <div>
                    Add To-do:
                    <input id='todo' type='text' onChange={(e) => setTodo(e.target.value)}/>
                    <button onClick={handleClick}>Add</button>
                </div>

                <hr />
                <FavoriteColor/>

                <hr/>
                <Timer/>

                <hr />
                <Counter/>

                <hr/>
                <CountRef/>
            </>
    );
};

export default Home;