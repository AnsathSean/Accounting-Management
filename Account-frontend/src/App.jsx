import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HelloWorld from './Helloworld'
import HeaderComponent from './Component/HeaderComponent'
import FooterComponent from './Component/FooterComponent'
import AccountComponent from './Component/AccountComponent'
import ListAccountCompinent from './Component/ListAccountCompinent'
import { BrowserRouter, Routes,Route} from 'react-router-dom'

function App() {
  

  return (
    <>
    <BrowserRouter>
        <HeaderComponent />
        <Routes>
          {/* http://localhost:8080 */}
          <Route path='/' element={<ListAccountCompinent />}></Route>
          {/* http://localhost:8080/add-account */}
          <Route path='/add-account' element={<AccountComponent />}></Route>
          {/* http://localhost:8080/add-account/1 */}
          <Route path='/update-account/:id' element={<AccountComponent />}></Route>
        </Routes>
        <FooterComponent />
    </BrowserRouter>
    </>
  )
}

export default App
