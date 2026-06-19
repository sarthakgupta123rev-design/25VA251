import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Demo from './component/demo' 
import Props from './component/Props'
import Exp from './component/Exp'

import Hooks from './component/hooks/hooks'
import Prop from './component/Prop'
import UseState from './component/hooks/UseState'
import StudentReg from './component/form/StudentReg'
function App() {
  const student={
    name :"sarth", rollno: 123 ,course:"cse"
  }
  const [count, setCount] = useState(0)
  const name = 'sarthak gupta'
  return (
    <>
      <h1>hye every one</h1>
      <h6>this is my first react app</h6>
      <p>Welcome, {name}</p>
      <Demo/>
      <Props name="sarthak" rollno="123" course="Computer Science" />
      <Exp student={student}/>
      <Prop students={[student]} />
      <Hooks/>
      <UseState/>
      <StudentReg/>
    </>   
  )
}

export default App
