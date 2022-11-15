import React, {useContext} from "react"
import { useEffect } from "react"
import { Context } from "../Context"
import { useNavigate } from 'react-router-dom'

const Question = ({query}) => {
    const {isChecked, toggleAnswer,} = useContext(Context)

    const possAnswers = query.answers.map((item) => {
        return (
        <div 
            className={
                // ischecked + true
                // ischecked + false

                isChecked && query.isCorrect && item.selected ?
                "text-sm text-[#4D5B9E] rounded-xl bg-[#94D7A2] px-1 py-3 font-bold" :
                isChecked && !query.isCorrect && item.selected?
                "text-sm text-[#4D5B9E] rounded-xl bg-[#F8BCBC] px-1 py-3" :
                isChecked && !query.isCorrect && item.answer === query.correctAnswer?
                "text-sm text-gray-400 rounded-xl bg-[#94D7A2] px-1 py-3 font-bold" :
                isChecked ?
                "text-sm text-gray-300 border-gray-300 rounded-xl bg-[#F5F7FB] px-1 py-3" :
                item.selected && !isChecked ? 
                "text-sm text-[#4D5B9E] rounded-xl bg-[#D6DBF5] px-1 py-3" :
                "text-sm text-[#4D5B9E] border border-[#293264] rounded-xl px-1 py-3"}
            key={item.answerID} 
            answer-id={item.answerID}
            answer-text={item.answer}
            onClick={e => handleClick(e)}
        >
            {item.answer}
        </div>
    )})

    const handleClick = (e) => {
        const givenAnswer = e.target.getAttribute('answer-text')
        const answer_ID = parseInt(e.target.getAttribute('answer-id'))
        toggleAnswer(query, answer_ID, givenAnswer)
    }

  return (
    <div className="flex flex-col justify-evenly items-center border-b border-[#293264] py-3">
        <h1 className="max-w-[80%] text-[#293264] text-base font-bold sm:text-lg lg:text-xl">{query?.question}</h1>
        <div className="max-w-[80%] grid grid-cols-2 sm:grid-cols-4 w-[75%] gap-8 items-center text-center p-3">
            {possAnswers}
        </div>
    </div>
  )
}

export default Question