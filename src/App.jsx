import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import Navigation from "./components/Navigation"
import Category from "./components/Category"

function App() {

  return (
    <>
      <Header/>
      <Navigation/>
      <Category/>
      <Outlet/>
    </>
  )
}

export default App
