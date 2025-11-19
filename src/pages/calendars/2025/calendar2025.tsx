import clues from "../../../assets/clues"
import { DayClue } from "../../../components"

const Calendar2025 = () => {
    const currentClues = clues[2025]
    return(
        <div className="h-full pt-14 flex flex-wrap justify-evenly bg-pink-700">
            {currentClues.map(clue => 
                <DayClue day={currentClues.indexOf(clue)} clue={clue} year={2025} ></DayClue>
            )}
        </div>
    )
}

export default Calendar2025