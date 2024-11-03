import clues from "../../../assets/clues"
import { DayClue } from "../../../components"

const Calendar2024 = () => {
    const currentClues = clues[2024]
    return(
        <div className="h-full flex flex-wrap justify-evenly bg-pink-700">
            {currentClues.map(clue => 
                <DayClue day={currentClues.indexOf(clue)} clue={clue} ></DayClue>
            )}
        </div>
    )
}

export default Calendar2024