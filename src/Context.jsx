import React, {useState, useEffect} from "react"


const Context = React.createContext()

function ContextProvider({children}) {
    const [allData, setAllData] = useState([])
    const [isChecked, setIsChecked] = useState(false)
    
    function getData(values){
        const {category, difficulty} = values
        const url = `https://opentdb.com/api.php?amount=5${category ? `&category=${category}` : ""}${difficulty ? `&difficulty=${difficulty}` : ""}&type=multiple`
        fetch(url)
        .then(res => res.json())
        .then(data => {
           const idea = data.results.map((item, id) => {
                return {
                    ID: id,
                    question : item.question,
                    answers : [...item.incorrect_answers, item.correct_answer ].sort((a, b) => 0.5 - Math.random()).map((item, i) => ({answer:item, selected : false, answerID : i})),
                    correctAnswer : item.correct_answer,
                    selectedAnswer : '',
                    isCorrect: false
                    }
            })
            setAllData(idea)})
    }

    function toggleAnswer(query, answer_ID, givenAnswer) {
        const updatedAnswers = query.answers.map(answer => {
            if(answer.answerID == answer_ID) {
                return {...answer, selected: !answer.selected}
            }
            return {...answer, selected: false}
        })
        

        const updatedData = allData.map(question =>{
            if(question.ID === query.ID) {
                return {...question, answers: updatedAnswers, selectedAnswer: givenAnswer}
            }
            return question
        })

        setAllData(updatedData)
    }

    function handleCheck() {
        const updatedAnswers = allData.map((item)=>{
            if(item.correctAnswer === item.selectedAnswer){
                return {...item, isCorrect : true}
            }
            return item
        })
        setAllData(updatedAnswers)
    }

    useEffect(()=>{
        console.log(allData)
    },[allData])

    return (
        <Context.Provider value={{
            getData,
            allData,
            setAllData,
            toggleAnswer,
            handleCheck,
            setIsChecked,
            isChecked

        }}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}
