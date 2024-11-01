import React, { useEffect } from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import RootLayout from './layout/RootLayout'
import { useDispatch } from 'react-redux'
import Home from './pages/Home'
import Destinations from './pages/Destinations'
import Tours from './pages/Tours'
import Contact from './pages/Contact'
import { getAllDestData, getAllTourData } from './api/request'

const App = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllDestData('https://travel-data-base.onrender.com/destinations'))
    dispatch(getAllTourData('https://travel-data-base.onrender.com/offers'))
  }, [])

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path='/destinations' element={<Destinations />} />
        <Route path='/tours' element={<Tours />} />
        <Route path='/contact' element={<Contact />} />
      </Route>
    )
  )
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App

