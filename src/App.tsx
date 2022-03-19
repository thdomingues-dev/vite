import { useState, ReactElement } from 'react'
import logo from './logo.svg'
import './App.css'

import { useAppDispatch, useAppSelector } from './app/hooks'
import { increment, reset, incrementAmount } from './features/counter/counter-slice'
import { useFetchBreedsQuery } from './features/api/dogs-api'

const App = (): ReactElement => {
  const [numDogs, setNumDogs] = useState(5)
  const countValue = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()

  const { data: breeds, isFetching: isLoading } = useFetchBreedsQuery({limit: numDogs})

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

        <div>
          <p>Dogs to fetch</p>
          <select value={numDogs} onChange={(e) => setNumDogs(Number(e.target.value))}>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="30">30</option>
          </select>
        </div>

        <div>
          <p>{!isLoading ? `Number of dogs: ${breeds?.length}` : 'Loading dogs...'}</p>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Picture</th>
              </tr>
            </thead>
            <tbody>
              {breeds?.map((breed, index) => (
                <tr key={index}>
                  <td>{breed.name}</td>
                  <td>
                    <img src={breed.image.url} alt={breed.name} height={250} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

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
