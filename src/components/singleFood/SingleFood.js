import { Button, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


function SingleFood({ meal }) {
    const { strMeal, strInstructions, strMealThumb } = meal
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={strMealThumb} />
                <Card.Body>
                    <Card.Title>{strMeal}</Card.Title>
                    <Card.Text>
                        {strInstructions.slice(0,150)+'...'}
                    </Card.Text>
                    <Link to={`/foods/${strMeal}`}>
                        <Button variant="primary">See Details</Button>
                    </Link>
                </Card.Body>
               
            </Card>
            
        </Col>
    );
}

export default SingleFood;