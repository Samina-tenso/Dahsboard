import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ProjectList from './componets/ProjectCard'
import Details from './componets/Details'
import React from 'react'
import { ReactDOM } from 'react'
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'
import Root from './Root'
function App() {
  const router = createBrowserRouter([


    {
      path: '/',
      element: <Root />,
      children: [
        {
          path: "/details",
          element: <Details />
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
