import React, {useContext} from "react"
import { Context } from "../Context"



export default function Question(props){
    const {setGivenAnswer, givenAnswer} = useContext(Context)
    const randomNumber = Math.floor((Math.random() * 4))
    const wrong = props.query.incorrect_answers
    wrong.splice(randomNumber, 0, props.query.correct_answer)
    const uniqueArray = wrong.filter((item, pos) => {
        return wrong.indexOf(item) == pos;
    })



    function clickAnswer(e){
        if (givenAnswer.every((answer)=>answer.questionId !=props.queryId)) {
            setGivenAnswer([...givenAnswer,{
                questionId : props.queryId,
                providedAnswer : uniqueArray[parseInt(e.target.getAttribute('answer-id'))],
                foundIt : ""
                }])
        } else {
            const adjustGivenAnswer = givenAnswer.filter((answer)=>answer.questionId !=props.queryId)
            setGivenAnswer([...adjustGivenAnswer,{
                questionId : props.queryId,
                providedAnswer : uniqueArray[parseInt(e.target.getAttribute('answer-id'))],
                foundIt : ""
                }])
        } 


    }

    function getBackGroundColor (text) {
        const isClicked = givenAnswer.some((question)=>question.providedAnswer === text)
        const elem = givenAnswer.find((question)=>question.providedAnswer === text)
        
        if (elem && isClicked){
            if(elem.foundIt === "yes"){
                return "possAnswer--right"
            } else if(elem.foundIt === "no") {
                return "possAnswer--wrong" }
        } 
        
        if (isClicked){
            return "possAnswer--selected"
        } else return ""
    }

    const possAnswers = uniqueArray.map((answer, i) => {
  
        return (
        <div 
            className={`possAnswers ${getBackGroundColor(answer)}`}
            key={i} 
            answer-id={i}
            answer-text={answer} 
            onClick={e => clickAnswer(e)}
        >
            {answer}
        </div>
    )})

    return(
        <>
            <h2 className="questions">{props.query.question}</h2>
            <div className="answers-container">
                {possAnswers}
            </div>
        </>
    )
}