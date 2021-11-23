import {Button, Card, CloseButton} from "react-bootstrap";

function Blog(props) {

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{props.blog.name}</Card.Title>
                <Card.Text>
                    {props.blog.content}
                </Card.Text>
                <CloseButton onClick={() => props.delete(props.blog.id)} />
            </Card.Body>
        </Card>
    )
}

export default Blog