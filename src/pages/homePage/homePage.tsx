import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const navigate = useNavigate()

    return(
        <div>
        <div className="h-screen w-full bg-blue-300 flex flex-col justify-center items-center">
            <p className="text-6xl mb-10">Helen's Advent Calender</p>
            <button className="h-20 w-40 text-2xl bg-gray-50 rounded-2xl" onClick={() => navigate("./2024")}>2024</button>
        </div>
        </div>
    )
};

export default HomePage;