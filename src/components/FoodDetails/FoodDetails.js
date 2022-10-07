
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useLoaderData } from 'react-router-dom';

function FoodDetails() {

    const details = useLoaderData()
    const mealDetails = details.meals[0];
    console.log(mealDetails)
    const { strMeal, strMealThumb, strInstructions, strArea} = mealDetails;
    return (
        <Row xs={1} md={1} className="g-4 mt-4">
            <Col>
                <div className="card mb-3" style={{maxWidth: '100%' }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={strMealThumb} className="img-fluid rounded-start" alt="..."/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h3 className="card-title">{strMeal}</h3>
                                <h5>Tradition: { strArea}</h5>

                                <p className="card-text">{strInstructions.slice(0, 600) + '.....'}</p>
                                
                                <button className='btn btn-primary'>
                                Buy Now
                                </button>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </Col>
        </Row>
    );
}

export default FoodDetails;

 /* 
function FoodDetails() {
    const details = useLoaderData()
    const mealDetails = details.meals[0];
    console.log(mealDetails)
    const { strMeal, strMealThumb, strInstructions
 } = mealDetails;

    return (
        <Row xs={12} md={12} lg={12} className="g-5 mt-3">
            <Col className='col-lg-12'>
                <Card style={{ width: '30%' }} className='mt-5'>
                    <Card.Img variant="top" src={strMealThumb} />
                    <Card.Body>
                        <Card.Title>{strMeal}</Card.Title>
                        <Card.Text>
                            {strInstructions.slice(0, 200) + '.....'}
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </Col>
        
        </Row>
     
    );
}

export default FoodDetails;
*/

