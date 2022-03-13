import { useState, ReactElement } from 'react'
import logo from './logo.svg'
import './App.css'

import { useAppDispatch, useAppSelector } from './app/hooks'
import { increment, reset, incrementAmount } from './features/counter/counter-slice'

const App = (): ReactElement => {
  const countValue = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()

  const incrementCount = () => dispatch(increment())
  const resetCount = () => dispatch(reset())
  const incremenetByThree = () => dispatch(incrementAmount(3))

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={incrementCount}>
            count is: {countValue}
          </button>
          <button type="button" onClick={incremenetByThree}>
            increment(3)
          </button>
          <button type="button" onClick={resetCount}>reset</button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
