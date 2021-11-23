import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import {useState, createContext} from "react";
import Login from "./components/Login";
import {Button, Col, Container, Nav, Navbar, Row} from "react-bootstrap";

// export this to be accessed in any child components of app
// no longer need to pass value as props through each child
// wrap the parent component app's return value in <UserContext.Provider> tags
export const UserContext = createContext("Corey");
export const BlogContext = createContext([{id: 0, name: "My article", content: "my content blah blah blah"}, {id: 1, name: "Another blog", content: "some new content to read!"}])

export function App() {

  // react is returning tags - we can return react child components (functions) as tags
  const [context, setContext] = useState("Corey")
  const [blogs, setBlogs] = useState([{id: 0, name: "My article", content: "my content blah blah blah"}, {id: 1, name: "Another blog", content: "some new content to read!"}])
  // useState returns an array with 2 values and we are destructuring the array into two variables
  // will give us a boolean value and a function to set the boolean value
  let [isLoggedIn, setIsLoggedIn] = useState(false)

  function loginSuccess() {
    // will set the new state value and notify react that we will rerender
    // the value will only be updated on the NEXT render
    setIsLoggedIn(true)
    // isLoggedIn value wont be updated yet
    // when we display below it will still be false until next app() render
    console.log('isLoggedIn = ' + isLoggedIn)
  }

  function handleLogout() {
    setIsLoggedIn(false)
  }

  return (
      <UserContext.Provider value={[context, setContext]}>

      <Container fluid='md'>
        {isLoggedIn ?

          <div className="App">

              <Router>
                <Row className='mt-2'>
                <Col>
                  <div>
                    <Link to="/">Home</Link>
                  </div>
                </Col>
                <Col>
                  <div>
                    <Link to="/blogs">Blog Articles</Link>
                  </div>
                </Col>
                <Col>
                  <div>
                    <Link to="/contact">Contact Me</Link>
                  </div>
                </Col>
                <Col>
                  <div>
                    <Button variant='danger' className='mt-1' onClick={handleLogout}>Log out</Button>
                  </div>
                </Col>
                </Row>
              <hr />

              <Routes>
                <Route exact path="/" element={<Home />}/>
                <Route path="/blogs" element={<BlogContext.Provider value={[blogs, setBlogs]}><Blogs /></BlogContext.Provider>}/>
                <Route path="/contact" element={<Contact />}/>
              </Routes>
            </Router>
          </div>


        :

        <Login onSuccessfulLogin={loginSuccess}/>}
      </Container>
      </UserContext.Provider>
  );
}

