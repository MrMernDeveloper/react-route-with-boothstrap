import Carousel from 'react-bootstrap/Carousel';
import logo from '../../Images/nav.3.jpeg'
import logo2 from '../../Images/nav.2.png'
import logo3 from '../../Images/nav.1.jpg'
import './Home.css'

function Home() {
    return (
        <Carousel className='mb-5'>
            <Carousel.Item className='nav-img'>
                <img
                    className="d-block w-100"
                    src={logo}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h1 className='text-danger fw-blood fs-1'>Hungry Naki ...!</h1>
                    <h3 className='text-danger'>For order go to foods menu</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='nav-img'>
                <img
                    className="d-block w-100"
                    src={logo2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h1 className='text-primary'>Hungry Naki ...!</h1>
                    <h3 className='text-primary'>For order go to foods menu</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='nav-img'>
                <img
                    className="d-block w-100"
                    src={logo3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h1 className='text-primary'>Hungry Naki ...!</h1>
                    <h3 className='text-primary'>For order go to foods menu</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Home;