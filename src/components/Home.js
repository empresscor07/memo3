import {useContext, useState} from "react";
import Todos from "./Todos"
import FavoriteColor from "./FavoriteColor";
import Counter from "./Counter";
import Timer from "./Timer";
import CountRef from "./CountRef";
import {Button, Col, Form, Row} from "react-bootstrap";
import {UserContext} from "../App";

const Home = (props) => {
    //on this page we use props to access userName, on the children of this page we use useContext
    const [todos, setTodos] = useState(["Laundry", "Grocery Shop"]);
    const [todo, setTodo] = useState('');
    const userName = useContext(UserContext)

    function handleClick(e) {
        setTodos(previousState => [...previousState, todo])
        document.getElementById('todo').value = ''

    }

    return (

            <>
                <h1>Welcome {userName}</h1>

                <hr/>
                <Todos todos={todos} />
                <Form>
                    <Row>
                        <Col sm={2}><Form.Label>Add To-do:</Form.Label></Col>
                        <Col className='mb-3'><Form.Control id='todo' type='text' onChange={(e) => setTodo(e.target.value)}/></Col>
                        <Col sm={2}><Button onClick={handleClick}>Add</Button></Col>
                    </Row>
                </Form>

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