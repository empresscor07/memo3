import {Button, Card, CloseButton, Col, Row} from "react-bootstrap";

function Blog(props) {

    return (
        <Col md={4} className='mt-4'>
            <Card style={{ height: '20rem' }}>
                <Card.Header>
                    <Row>
                    <Col><h4>{props.blog.name}</h4></Col>
                    <Col xs='auto'><CloseButton onClick={() => props.delete(props.blog.id)}/></Col>
                    </Row>
                </Card.Header>
                <Card.Body>
                    <Card.Text>
                        {props.blog.content}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default Blog