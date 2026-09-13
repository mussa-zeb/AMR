import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import AutoWorkshop from './Pages/AutoWorkshop'
import RealEstate from './Pages/RealEstate'
import ImportExport from './Pages/ImportExport'
import CarWash from './Pages/CarWash'
import CarRepair from './Pages/CarRepair'
import CarPaint from './Pages/CarPaint'
import CarDenting from './Pages/CarDenting'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Contact' element={<Contact/>} />



        <Route path='/AutoWorkshop' element={<AutoWorkshop/>} />
        <Route path='/AutoWorkshop/CarWash' element={<CarWash/>} />
        <Route path='/AutoWorkshop/CarRepair' element={<CarRepair/>} />
        <Route path='/AutoWorkshop/Painting' element={<CarPaint/>} />
        <Route path='/AutoWorkshop/Denting' element={<CarDenting/>} />




        <Route path='/RealEstate' element={<RealEstate/>} />




        <Route path='/ImportExport' element={<ImportExport/>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App