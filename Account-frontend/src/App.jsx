import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HelloWorld from './Helloworld'
import HeaderComponent from './Component/HeaderComponent'
import FooterComponent from './Component/FooterComponent'
import AccountComponent from './Component/AccountComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <HeaderComponent />
        <AccountComponent />
    <FooterComponent />
    </>
  )
}

export default App
