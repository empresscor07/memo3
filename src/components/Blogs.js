import Blog from "./Blog";
import {useState} from "react";
import {Button, Col, Form, Modal, Row} from "react-bootstrap";

const Blogs = () => {

    const [show, setShow] = useState(false);
    const [name, setName] = useState('');
    const [content, setContent] = useState('')
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function addBlog(e) {
        e.preventDefault()
        handleClose()
        setBlogs([...blogs, {
            id: Math.random() * 999999 + 100,
            name: document.getElementById('name').value,
            content: document.getElementById('content').value
        }])
    }

    function deleteBlog(id) {
        setBlogs(blogs.filter(blog => blog.id !== id))
    }

    const [blogs, setBlogs] = useState([{id: 0, name: "My article", content: "my content blah blah blah"}, {id: 1, name: "Another blog", content: "some new content to read!"}])
    return (
        <div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={addBlog}>
                        <Form.Group>
                            <Form.Label>Blog Title</Form.Label>
                            <Form.Control id='name' type='text'/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Content</Form.Label>
                            <Form.Control id='content' type='text'/>
                        </Form.Group>
                        <Button className='m-1' type='submit'>Add Blog</Button>
                    </Form>
                </Modal.Body>
            </Modal>
            <Row>
                <Col><h1>Blog Articles</h1></Col>
                <Col className='col-sm-auto'><Button onClick={handleShow}>Add Blog</Button></Col>
            </Row>

            {
                blogs.map(blog => <Blog delete={deleteBlog} blog={blog}/>)
            }
        </div>
    )
};

export default Blogs;