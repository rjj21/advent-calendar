import { useState } from "react"
import image from "../../assets/expandIcon.png"
import ExpandedClue from "../expandedClue/expandedClue"
import { MathJax } from "better-react-mathjax";

type DayClueProps = {
    day: number
    clue: string | {
        type: string,
        content: string
    },
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

    const isMathsClue = typeof clue === "object" && clue.type === "maths"
    return (
        <div className="h-40 w-40 m-8 shadow-2xl " onClick={handleClick}>
            {!showClue && 
                <div className={`h-full w-full ${colour.background} ${colour.text} text-6xl flex items-center justify-center`}>
                    <p>{day + 1}</p>
                </div>
            }
            {showClue && 
                <div className={`relative h-full w-full ${colour.highlight} p-3`}>
                    <button className="absolute bottom-2 right-2 p-2" >
                        <img src={image} alt='expand' height="20" width="20" className="opacity-50" onClick={() => setShowExpandedClue(true)}/>
                    </button>
                    {
                        isMathsClue ? (
                            <div className="h-full w-full overflow-x-auto overflow-y-hidden">
                                <MathJax>
                                    {"\\[" + clue.content + "\\]"}
                                </MathJax>
                            </div>
                        ) : <div className="h-full w-full flex overflow-x-hidden break-all">
                            <p className="whitespace-pre-line">{typeof clue === "string" ? clue : ""}</p> 
                        </div>
                    }
                </div>
            }
            {showExpandedClue ? <ExpandedClue clue={clue} colour={colour.highlight} setShowExpandedClue={setShowExpandedClue}/> : ""}
            
        </div>
    )
}

export default DayClue