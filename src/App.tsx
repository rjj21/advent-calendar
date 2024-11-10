import {Routes, Route} from 'react-router-dom'
import { HomePage, Calendar2024 } from './pages'
import {Header} from './components'

const App = () => {
    return (
        <Routes>
            <Route element={<Header />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/2024" element={<Calendar2024 />} />
            </Route>
        </Routes>
    )
}

export default App
