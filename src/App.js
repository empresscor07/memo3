import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import {useState, createContext} from "react";
import Login from "./components/Login";
import {Col, Container, Row} from "react-bootstrap";

// export this to be accessed in any child components of app
// no longer need to pass value as props through each child
// wrap the parent component app's return value in <UserContext.Provider> tags
export const UserContext = createContext("Corey");

export default function App() {

  // react is returning tags - we can return react child components (functions) as tags
  const [userName, setUserName] = useState("Corey")

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
      <Container fluid='md'> <Row><Col>
        {isLoggedIn ?
        <UserContext.Provider value={userName}>
          <div className="App">
            <Router>
              <div>
                <Link to="/">Home</Link>
              </div>
              <div>
                <Link to="/blogs">Blog Articles</Link>
              </div>
              <div>
                <Link to="/contact">Contact Me</Link>
              </div>
              <div>
                <button onClick={handleLogout}>Log out</button>
              </div>

              <hr />

              <Routes>
                <Route exact path="/" element={<Home userName={userName}/>}/>
                <Route path="/blogs" element={<Blogs />}/>
                <Route path="/contact" element={<Contact />}/>
              </Routes>
            </Router>
          </div>
        </UserContext.Provider>

        :

        <Login userName={userName} onSuccessfulLogin={loginSuccess}/>}
      </Col></Row></Container>

  );
}

