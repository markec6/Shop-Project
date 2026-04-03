import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import Navigation from "./components/Navigation"
import Category from "./components/Category"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
      <Header/>
      <Navigation/>
      <Category/>
      <Outlet/>
      <ToastContainer />
    </>
  )
}

export default App
