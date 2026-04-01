import { createRoot } from "react-dom/client";
import { useState } from "react";
import weatherData from "./apiTest";
import Box from "./display"

let Val = () => {
    let [fetchInput,setFetchInput] = useState("")
    const API_KEY = import.meta.env.VITE_API_KEY

    async function fetchWeather(city){
        try{
            // let res = await fetch(`http://api.weatherstack.com/current?access_key=${API_KEY}&query=${city}`)
            // let data = await res.json()
            let data = weatherData
            console.log(data)
            return data
        }catch(err){
            // console.log(err)
        }
    }

    async function handleSearch(e){
        e.preventDefault();
        let query =e.target.elements.city.value
        console.log("User Searched:",query)
        let data = await fetchWeather(query)
        setFetchInput(data)
    }
    
    return <div>
        <form onSubmit={handleSearch}>
            <input
                type="text"
                name="city"
                placeholder="Search a City"
            />
            <button type="submit">Search</button>
        </form>
        <Box input = {fetchInput} />
    </div>
}

createRoot(document.getElementById("root")).render(<Val/>)