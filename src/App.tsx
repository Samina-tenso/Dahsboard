import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ProjectList from './componets/ProjectCard'
import Details from './componets/Details'
import React from 'react'
import { ReactDOM } from 'react'
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'
import Root from './Root'
import Invoice from './componets/Invoice'
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
