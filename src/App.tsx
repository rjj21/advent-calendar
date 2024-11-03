import {Routes, Route} from 'react-router-dom'
import { HomePage, Calendar2024 } from './pages'

const App = () => {

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/2024" element={<Calendar2024 />} />
    </Routes>
  )
}

export default App
