let Box = ({input}) => {
    let arr =["weather_descriptions","temperature","feelslike","wind_speed","wind_dir","humidity","visibility",'pressure','uv_index',"cloudcover","observation_time"]
    // console.group("box",input.current)
    if (input !== ""){
        return (
        <div>
            {arr.map((item, i) => (
                <p key={i}>{item}: {input.current[item]}</p>
            ))}
        </div>
        )
    }
}

export default Box