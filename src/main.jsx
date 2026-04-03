import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// ROUTER
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'
// REDUX
import { Provider } from 'react-redux'
import store from './Redux/store.js'
// CLERK
import { ClerkProvider } from '@clerk/react'
// PAGES
import HomePage from './pages/HomePage.jsx'
import SinglePage from './pages/SinglePage.jsx'
import CartPage from './pages/CartPage.jsx'
import FavoritePage from './pages/FavoritePage.jsx'

// Mora da se podudara sa onim iz naseg roota, ali ovo ce uvek biti ovako
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
// za svaku novu app na Clerk mi dobijamo drugi API key 

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}
// Ovo je provera samo kljuca, ako nesto ne valja on ce odmah zakljucati app




const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
      children: [
        {
          path: '/',
          element: <HomePage/>
        },
        {
          path: '/Product/:id',
          element: <SinglePage/>
        },
        {
          path: '/Cart',
          element: <CartPage/>
        },
        {
          path:'/favorite',
          element:<FavoritePage/>
        }
      ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY}> {/**uvek ide oko sam routera**/}
          <RouterProvider router={router}/>
      </ClerkProvider>
    </Provider>
  </StrictMode>,
)
