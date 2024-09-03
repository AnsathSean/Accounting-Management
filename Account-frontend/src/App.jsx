import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HelloWorld from './Helloworld'
import HeaderComponent from './Component/HeaderComponent'
import FooterComponent from './Component/FooterComponent'
import AccountComponent from './Component/AccountComponent'
import ListAccountComponent from './Component/ListAccountComponent'
import { BrowserRouter, Routes,Route} from 'react-router-dom'
import SortAccountComponent from './Component/SortAccountComponent'
import WeeklyAccountComponent from './Component/WeeklyAccountComponent'
import ChartComponent from './Component/ChartComponent'


function App() {
  

  return (
    <>
    <BrowserRouter>
        <HeaderComponent />
        <Routes>
        {/* http://localhost:8080/ */}
        <Route path='/' element={<ListAccountComponent />}></Route>
          {/* http://localhost:8080/chart-account */}
          <Route path='/chart-account' element={<ChartComponent />}></Route>
          {/* http://localhost:8080/weekly-account' */}
          <Route path='/week-account' element={<WeeklyAccountComponent />}></Route>
          {/* http://localhost:8080/list-account */}
          <Route path='/lsit-account' element={<ListAccountComponent />}></Route>
          {/* http://localhost:8080/add-account */}
          <Route path='/add-account' element={<AccountComponent />}></Route>
          {/* http://localhost:8080/add-account/1 */}
          <Route path='/update-account/:id' element={<AccountComponent />}></Route>
          {/* http://localhost:8080/sort-account/ */}
          <Route path='/sort-account' element={<SortAccountComponent />}></Route>
        </Routes>
        <FooterComponent />
    </BrowserRouter>
    </>
  )
}

export default App
