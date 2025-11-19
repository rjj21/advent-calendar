import {Routes, Route} from 'react-router-dom'
import { HomePage, Calendar2024 } from './pages'
import {Header} from './components'
import Calendar2025 from './pages/calendars/2025/calendar2025';

const App = () => {
    return (
        <Routes>
            <Route element={<Header />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/2024" element={<Calendar2024 />} />
                <Route path="/2025" element={<Calendar2025 />} />
            </Route>
        </Routes>
    )
}

export default App
