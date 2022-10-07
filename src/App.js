
import './App.css';
import {  createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/Navbar';
import Home from './components/Home/Home';
import Food from './components/Foods/Food';
import Header from './components/Header/Header';
import FoodDetails from './components/FoodDetails/FoodDetails';


function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Header></Header>, children: [
        { path: '/', element: <Home></Home> },
        {path:'/home', element: <Home></Home>},
        {
          path: '/foods',
          loader: async() => {
            return fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
          },

          element:<Food></Food>
        },
        {
          path: '/foods/:name',
          loader: async ({ params }) => {
            return fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${params.name}`)
            
          },
          element: <FoodDetails></FoodDetails>
        },
        {path:'/order', element:<h1>This is order page</h1>}
      ],
    },
    {path:'*', element: <h1>404 Not Found</h1>}
  ])

  return (
    <div className='container'>
      
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
