// function will take in params object as an argument
// fields can be accessed using dot notation
import {Button, Container, Form} from "react-bootstrap";

function Login(params) {
    function handleSubmit(event) {
        // takes in the click event - we called it event here
        // don't have to take it but can if we want to do something with it
        // prevent default stops the page from refreshing and
        // form from submitting a post request
        event.preventDefault()
        const password = document.getElementById('pass').value
        const username = document.getElementById('name').value
        // we use === instead of == because a string object will not be the same as another string object
        // so == will always fail, === compares the content of the objects which is what we want
        if (password === 'pass') {
            // successful login
            // actually calling the function passed as part of params
            params.onSuccessfulLogin() //sent as a callback to parent component
        }
    }
    return (
        // can only return a single top level tag - so here we wrap all in <div> tags
        <Container>
            <h1>Please Log in, {params.userName}</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Username</Form.Label>
                    <Form.Control id='name' type='text'/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control id='pass' type='password'/>
                </Form.Group>
                <Button className='m-1' type='submit'>Log In</Button>
            </Form>
        </Container>

    )
}

export default Login