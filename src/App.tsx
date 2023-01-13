import './App.css'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import AddTask from './Views/AddTask.view'
import CreateTask from './Views/CreateTask.view'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AddTask />} />
        <Route path='/create' element={<CreateTask />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
