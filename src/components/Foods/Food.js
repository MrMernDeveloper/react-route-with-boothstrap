
import SingleFood from '../singleFood/SingleFood';
import Row from 'react-bootstrap/Row';
import { useLoaderData } from 'react-router-dom';

function Food() {
    const allMeals = useLoaderData()
   const data = allMeals.meals
    
    return (
        <Row xs={1} md={2} lg={ 3} className="g-5 mt-3">
            {
            data.map(meal => <SingleFood
                    meal={meal}></SingleFood>)
            }
        </Row>
    );
}

export default Food;


/* const Food = () => {

  
    return (
        <div>
            {
                meals.map(meal => <SingleFood
                    key={meal.idMeal}
                meal={meal}></SingleFood>)
            }
        </div>
    );
};

export default Food;
*/