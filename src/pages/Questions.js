import React, {useContext} from "react"
import Question from "../components/Question"
import {Context} from "../Context"
import { Link } from "react-router-dom"

export default function Questions(){
    const {allData, givenAnswer, setGivenAnswer} = useContext(Context)
    const questionsElements = allData.map((query,i) => {
        return(
        < Question key={i} query={query} queryId={i} />
    )})

    function checkValues (){
        let updatedObject = []
        givenAnswer.sort((a,b) => (a.questionId > b.questionId) ? 1 : ((b.questionId > a.questionId) ? -1 : 0))
        

        for (let i=0; i<allData.length; i++){

            if(givenAnswer[i].providedAnswer === allData[i].correct_answer ){
                updatedObject.push({...givenAnswer[i], foundIt:"yes"})
            } else updatedObject.push({...givenAnswer[i], foundIt:"no"})
        }
        setGivenAnswer(updatedObject)
        }

    return(
        <section className="questions">
            <Link to='/'>Starting Page</Link>
            {questionsElements}
            <button 
                onClick={()=>checkValues()} 
                className="btn"
            >
                Check Answers
            </button>
            
        </section>    
    )
}