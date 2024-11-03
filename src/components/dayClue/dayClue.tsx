import { useState } from "react"

type DayClueProps = {
    day: number
    clue: string
}

const DayClue = ({day, clue}: DayClueProps) => {
    const [showClue, setShowClue] = useState<boolean>(false);
    const handleClick = () => {
        if (!disabled) setShowClue(!showClue)
    }

    const date = new Date()
    console.log(date)
    console.log(date.getFullYear())
    console.log(date.getDate())

    const disabled = !(date.getFullYear() > 2024 || date.getDate() > day)

    return (
        <div className="h-40 w-40 m-8 shadow-2xl " onClick={handleClick}>
            {!showClue && 
                <div className={`h-full w-full ${disabled ? "bg-gray-400": "bg-pink-700"} text-green-100 text-6xl flex items-center justify-center`}>
                    <p>{day + 1}</p>
                </div>
            }
            {showClue && 
                <div className="h-full w-full bg-green-100 flex items-center justify-center">
                    <p>{clue}</p>
                </div>
            }
        </div>
    )
}

export default DayClue