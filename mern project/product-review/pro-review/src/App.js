import logo from './logo.svg';
import './App.css';
import  { createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home'
import Details from './pages/Details';
import AddReview from './pages/AddReview';

let routerList = createBrowserRouter([
  {path:"/",element:<Home/>},
  {path:"/login",element:<Login/>},
  {path:"/home",element:<Home/>},
  {path:"/detail",element:<Details/>},
  {path:"/review",element:<AddReview/>}
]);
function App() {
  return (
    <>
    <h1>learn react</h1>
    <RouterProvider
    router={routerList}>
    </RouterProvider>
    </>
  );
}

export default App;
