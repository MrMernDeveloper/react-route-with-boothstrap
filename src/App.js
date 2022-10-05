import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import NavBar from './components/Nav/Nav';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './components/Header/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <NavBar></NavBar>, children: [
      
    ] },
    
  ]);
  return (
    <div className="App">
      
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
