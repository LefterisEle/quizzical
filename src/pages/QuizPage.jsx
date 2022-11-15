import React, {useContext} from "react"
import Question from "../components/Question"
import {Context} from "../Context"
import { useNavigate } from 'react-router-dom'

const QuizPage = () => {
    const {allData, handleCheck, setIsChecked, isChecked} = useContext(Context)
    let navigate = useNavigate()

    const questionsElements = allData.map((query,i) => {
        return(
        < Question key={i} query={query}/>
    )})

    const button = () => {
        if (isChecked){
            const rightAnswers = allData.filter(question => question.isCorrect)
            return (
                <div className="flex justify-between items-center m-3">
                    <p className="text-[#293264] font-bold md:text-xl lg:text-2xl mx-2">
                        {`You scored ${rightAnswers.length}/5 right questions`}
                    </p>
                    <button
                        onClick={()=>{
                            navigate("/")
                            setIsChecked(false)
                        }}
                        className="bg-[#293264] text-white font-bold rounded px-7 py-3 hover:shadow-md hover:scale-110 duration-500" >
                            Play again
                    </button>
                </div>
            )
        } else {
            const isFilled = allData.every(question => question.selectedAnswer.length > 0)
            console.log(isFilled)
            return (
                <button
                    onClick={()=>{
                        setIsChecked(true)
                        handleCheck()
                    }}
                    disabled={!isFilled}
                    className={isFilled ? 
                        "bg-[#293264] text-white font-bold rounded px-7 py-3 hover:shadow-md hover:scale-110 duration-500 lg:text-2xl lg:px-10 lg:py-4 lg:mt-5" :
                        "bg-gray-500 text-white font-bold rounded px-7 py-3 lg:text-2xl lg:px-10 lg:py-4 lg:mt-5"
                    }>
                        Check Answers
                </button>
            )
        }
    }

  return (
    <div className="flex flex-col items-center w-full h-full">

        <div className="max-w-[1000px] mt-10 flex flex-col justify-evenly">
            {questionsElements}
        </div>
        
        {button()}
        
    </div>
  )
}

export default QuizPage