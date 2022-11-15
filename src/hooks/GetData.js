import {useState, useEffect, useRef} from "react"

function GetData({questions, category, difficulty, type }){

    const [allData, setAllData] = useState([])
    const ref = useRef(null)
    
    
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => setAllData(data.results))
    }, [])

    return [allData, ref]
}

export default GetData