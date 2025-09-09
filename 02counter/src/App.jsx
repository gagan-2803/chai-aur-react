import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)

  // let counter = 50

  const addValue = () => {
    // counter = counter + 1;
    // setCounter(counter)
    // console.log("value added", counter);
    setCounter(counter + 1)
    setCounter(counter + 1)
    setCounter(counter + 1)
    setCounter(counter + 1)
  }

  const removeValue = () => {
    if (counter > 0)
      setCounter(counter - 1);
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Increase Value: {counter}</button>
      <br />
      <button onClick={removeValue}>Decrease Value : {counter}</button>
    </>
  )
}

export default App
