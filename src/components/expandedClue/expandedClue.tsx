import { MathJax } from "better-react-mathjax";

type ExpandedClueProps = {
     clue: string | {
        type: string,
        content: string
    },
    setShowExpandedClue: any
    colour: string
}

const ExpandedClue = ({clue, colour, setShowExpandedClue}: ExpandedClueProps) => {
    const isMathsClue = typeof clue === "object" && clue.type === "maths"

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className={`max-h-1/2 w-1/2 ${colour} p-3 rounded-2xl`}>
                <div className="w-full flex overflow-x-hidden break-all">
                    {
                        isMathsClue ? (
                            <MathJax>
                                {"\\[" + clue.content + "\\]"}
                            </MathJax>
                        ) : <p className="whitespace-pre-line">{typeof clue === "string" ? clue : ""}</p> 
                    }
                </div>
                <div className="flex justify-end">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-xl hover:bg-blue-600" onClick={() => setShowExpandedClue(false)}>Close</button>
                </div>
            </div>
        </div>
    )
}

export default ExpandedClue