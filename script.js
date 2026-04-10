const API_KEY = "b4f4d0e13d75b1842445088ef7bfb394";
let darkmode = false;
let units = "C";
let loading = false;
let data = null;

const toggleUnitsBtn = document.getElementById("toggle-units");
const toggleDarkModeBtn = document.getElementById("toggle-darkmode");
const searchForm = document.getElementById("search-form");
const cityInput = document.getElementById("city-input");
const searchBtn = document.getElementById("search-btn");
const weatherDisplay = document.getElementById("weather-display");

toggleUnitsBtn.addEventListener("click", () => {
    units = units === "F" ? "C" : "F";
    toggleUnitsBtn.textContent = `°${units}`;
});

toggleDarkModeBtn.addEventListener("click", () => {
    darkmode = !darkmode;
    document.body.classList.toggle("dark");
    toggleDarkModeBtn.textContent = darkmode ? "Light" : "Dark";
});

searchForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const city = cityInput.value.trim();
    if (!city) return;
    
    console.log("User Searched:", city);
    await fetchWeather(city);
});

async function fetchWeather(city) {
    loading = true;
    setLoadingState(true);
    
    try {
        const res = await fetch(`http://api.weatherstack.com/current?access_key=${API_KEY}&query=${city}`);
        if (!res.ok) throw new Error("Https error : " + res.status);
        
        const result = await res.json();
        console.log("em", result);
        console.log();
        data = result;
        
        renderWeather();
    } catch (err) {
        console.log(err);
    } finally {
        loading = false;
        setLoadingState(false);
    }
}

function setLoadingState(isLoading) {
    cityInput.disabled = isLoading;
    searchBtn.disabled = isLoading;
}

function unitsCheck(temp){
    if (toggleUnitsBtn.textContent === "°C"){
        return temp
    }else{
        return (temp*(9/5)) + 32
    }

}

function renderWeather() {
    if (!data || !data.current) return;
    
    const arr = [["weather_descriptions",""], ["temperature",toggleUnitsBtn.textContent === "°C" ? "°C" : "°F"], ["feelslike",toggleUnitsBtn.textContent === "°C" ? "°C" : "°F"], ["wind_speed","m/s"], ["wind_dir",""], ["humidity","%"], ["visibility","km"], ['pressure',"hpa"],[ 'uv_index',"UV"], ["cloudcover","dew"], ["observation_time",""]];
    
    console.log("data: " + data);
    
    weatherDisplay.innerHTML = "";
    
    arr.forEach(item => {
        const p = document.createElement("p");
        if (item[0] === "temperature" || item[0] ==="feelslike"){
            p.textContent = `${item[0]}: ${unitsCheck(data.current[item[0]])} ${item[1]}`;
        }else{
            p.textContent = `${item[0]}: ${data.current[item[0]]} ${item[1]}`;
        }
        weatherDisplay.appendChild(p);
    });
    }