import clues from "../../../assets/clues"
import { DayClue } from "../../../components"

const Calendar2025 = () => {
    const currentClues = clues[2025]
    return(
        <div className="h-full pt-14 flex flex-wrap justify-evenly bg-blue-900">
            {currentClues.map(clue => 
                <DayClue day={currentClues.indexOf(clue)} clue={clue} year={2025} colour={{background: "bg-blue-900", text: "text-yellow-300", highlight: "bg-yellow-200"}} ></DayClue>
            )}
        </div>
    )
}

export default Calendar2025