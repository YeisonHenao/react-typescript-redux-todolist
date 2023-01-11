import './App.css'
import { useAppSelector } from './hooks/Common'

function App() {

  const tasks = useAppSelector(state => state.tasks)
  console.log(tasks);

  return (
    <div className="App">
      <h1>Hello world</h1>
    </div>
  )
}

export default App
