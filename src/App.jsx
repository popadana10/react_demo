import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import About from './pages/About.jsx';
import Home from './pages/Home.jsx';
import Persons from './pages/Persons.jsx';
import Root from './Root.jsx';
 
function App() {
  const router = createBrowserRouter([
    {
    path:'/', 
    element:<Root/>,
  children: [
    {path:'/', element: <Home/>},
    {path:'/about', element: <About/>},
    {path:'/persons', element: <Persons/>}
  ],
},
  ]);
  return <RouterProvider router={router}/>;
}
 
export default App;