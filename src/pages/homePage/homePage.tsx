import { useNavigate } from "react-router-dom";
import Snowfall from 'react-snowfall'

const HomePage = () => {
    const navigate = useNavigate()

    return(
        <div>
        <div className="h-screen w-full bg-blue-300 flex flex-col justify-center items-center">
            <Snowfall color='#eff6ff'/>
            <p className="text-6xl mb-10 text-blue-900">Helen's Advent Calender</p>
            <button className="h-16 w-32 text-2xl bg-blue-50 rounded-2xl" onClick={() => navigate("./2024")}>2024</button>
        </div>
        </div>
    )
};

export default HomePage;