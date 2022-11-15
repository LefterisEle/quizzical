import React, {useState, useEffect} from "react"

const Context = React.createContext()

function ContextProvider({children}) {
    const [allData, setAllData] = useState([])
    const [givenAnswer, setGivenAnswer] = useState([])

    function getData(values){
        const {questions, category, difficulty, type } = values
        const url = `https://opentdb.com/api.php?amount=${questions}${category ? `&category=${category}` : ""}${difficulty ? `&difficulty=${difficulty}` : ""}&type=multiple`
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setAllData(data.results)})
    }

    useEffect(()=>{
        
    },[givenAnswer])

    return (
        <Context.Provider value={{
            getData,
            allData,
            setAllData,
            givenAnswer,
            setGivenAnswer
        }}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}