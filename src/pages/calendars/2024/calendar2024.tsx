import clues from "../../../assets/clues"
import { DayClue } from "../../../components"

const Calendar2024 = () => {
    const currentClues = clues[2024]
    return(
        <div className="h-full pt-14 flex flex-wrap justify-evenly bg-pink-700">
            {currentClues.map(clue => 
                <DayClue day={currentClues.indexOf(clue)} clue={clue} year={2024} colour={{background: "bg-pink-700", text: "text-green-100", highlight: "bg-green-100"}}></DayClue>
            )}
        </div>
    )
}

export default Calendar2024