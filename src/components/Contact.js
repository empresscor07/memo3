import {useRef} from "react";
import {Button, Col, Form, Row} from "react-bootstrap";

const Contact = () => {
        const inputElement = useRef();
        const focusInput = () => {
            inputElement.current.focus();
        };

    return (
        <>
            <h1>Contact Me</h1>
            <Form>
                <Row>
                    <Col><Form.Control type="text" ref={inputElement} /></Col>
                    <Col className='col-sm-auto'><Button onClick={focusInput}>Focus Input</Button></Col>
                </Row>

            </Form>
            <h4 className='mt-4'>useRef to reference DOM and send focus on click to input box</h4>
        </>
)
};

export default Contact;