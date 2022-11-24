
import './App.css'
import Details from './componets/Details'
import React from 'react'
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'
import Root from './Root'
import Invoice from './componets/Invoice'
import Overview from './componets/Overview'
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
