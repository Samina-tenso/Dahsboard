
import './App.css'
import Details from './pages/details/Details'
import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './Root'
import Invoice from './pages/Invoice/Invoice'
import Overview from './pages/overview/Overview'
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children: [
        {
          path: "/details",
          element: <Details />
        },
        {
          path: "/invoice",
          element: <Invoice />
        },
        {
          path: "/overview",
          element: <Overview />
        }
      ]
    }
  ])

  return (

    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
