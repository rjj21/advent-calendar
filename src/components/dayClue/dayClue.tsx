import { useState } from "react"
import image from "../../assets/expandIcon.png"
import ExpandedClue from "../expandedClue/expandedClue"

type DayClueProps = {
    day: number
    clue: string,
    year: number,
    colour: {
        background: string,
        text: string,
        highlight: string
    }
}

const DayClue = ({day, clue, year, colour}: DayClueProps) => {
    const [showClue, setShowClue] = useState<boolean>(false);
    const [showExpandedClue, setShowExpandedClue] = useState<boolean>(false)
    const handleClick = () => {
        if (!disabled) setShowClue(!showClue)
    }

    const date = new Date()

    const disabled = !(date.getFullYear() > year || date.getDate() > day)

    return (
        <div className="h-40 w-40 m-8 shadow-2xl " onClick={handleClick}>
            {!showClue && 
                <div className={`h-full w-full ${colour.background} ${colour.text} text-6xl flex items-center justify-center`}>
                    <p>{day + 1}</p>
                </div>
            }
            {showClue && 
                <div className={`relative h-full w-full ${colour.highlight} p-3`}>
                    <div className="h-full w-full flex overflow-x-hidden break-all">
                        <button className="absolute bottom-2 right-2 p-2" >
                            <img src={image} alt='expand' height="20" width="20" className="opacity-50" onClick={() => setShowExpandedClue(true)}/>
                        </button>
                        <p className="whitespace-pre-line">{clue}</p> 
                    </div>
                </div>
            }
            {showExpandedClue ? <ExpandedClue clue={clue} colour={colour.highlight} setShowExpandedClue={setShowExpandedClue}/> : ""}
            
        </div>
    )
}

export default DayClue