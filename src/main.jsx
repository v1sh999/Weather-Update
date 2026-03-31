import { createRoot } from "react-dom/client";
import weatherData from "./apiTest";

let Box = (Weather) => {
    if ((Weather.input) === ""){
        console.log("Waiting for User Input")
    }else{
        <>
        <ol>
            {arr.map((item, i)=>{
        return <li key={i}>{item}</li>
    })}
        </ol>
        </>

    }
}
let fetchInput = ""
function handleSearch(e){
    e.preventDefault();
    let query =e.target.elements.city.value
    console.log("User Searched:",query)
    fetchInput = fetchWeather(query)
}
async function fetchWeather(city){
    try{
        // let res = await fetch(`http://api.weatherstack.com/current?access_key=b4754a6a6cced9cb9dba65afab06d9ed&query=${city}`)
        let res = weatherData
        // let data = await res.json()
        // console.log(data)
        console.log(res)
    }catch(err){
        // console.log(err)
    }
}
let val = (
    <div>
        <form onSubmit={handleSearch}>
            <input
                type="text"
                name="city"
                placeholder="Search a City"
            />
            <button type="submit">Search</button>
        </form>
        <Box input = {fetchInput}/>
    </div>
)
createRoot(document.getElementById("root")).render(val)
