const weatherData = {
    request: {
        type: "City",
        query: "Pune, India",
        language: "en",
        unit: "m"
    },
    location: {
        name: "Pune",
        country: "India",
        region: "Maharashtra",
        lat: "18.533",
        lon: "73.867",
        timezone_id: "Asia/Kolkata",
        localtime: "2026-03-31 19:09",
        utc_offset: "5.50"
    },
    current: {
        temperature: 31,
        feelslike: 31,
        humidity: 36,
        weather_descriptions: ["Clear"],
        weather_icons: [
            "https://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0008_clear_sky_night.png"
        ],
        wind_speed: 19,
        wind_dir: "WSW",
        pressure: 1009,
        visibility: 10,
        cloudcover: 11,
        uv_index: 0,
        is_day: "no",
        observation_time: "01:39 PM",
        air_quality: {
            co: "300.85",
            no2: "2.75",
            o3: "164",
            pm2_5: "26.85",
            pm10: "36.05",
            so2: "6.85",
            "us-epa-index": "2",
            "gb-defra-index": "2"
        },
        astro: {
            sunrise: "06:30 AM",
            sunset: "06:48 PM",
            moonrise: "05:26 PM",
            moonset: "05:13 AM",
            moon_phase: "Waxing Gibbous",
            moon_illumination: 95
        }
    }
};

let rawData = {"request":{"type":"City","query":"Pune, India","language":"en","unit":"m"},"location":{"name":"Pune","country":"India","region":"Maharashtra","lat":"18.533","lon":"73.867","timezone_id":"Asia\/Kolkata","localtime":"2026-03-31 19:21","localtime_epoch":1774984860,"utc_offset":"5.50"},"current":{"observation_time":"01:51 PM","temperature":31,"weather_code":113,"weather_icons":["https:\/\/cdn.worldweatheronline.com\/images\/wsymbols01_png_64\/wsymbol_0008_clear_sky_night.png"],"weather_descriptions":["Clear "],"astro":{"sunrise":"06:30 AM","sunset":"06:48 PM","moonrise":"05:26 PM","moonset":"05:13 AM","moon_phase":"Waxing Gibbous","moon_illumination":95},"air_quality":{"co":"300.85","no2":"2.75","o3":"164","so2":"6.85","pm2_5":"26.85","pm10":"36.05","us-epa-index":"2","gb-defra-index":"2"},"wind_speed":19,"wind_degree":242,"wind_dir":"WSW","pressure":1009,"precip":0,"humidity":36,"cloudcover":11,"feelslike":31,"uv_index":0,"visibility":10,"is_day":"no"}}

export default weatherData;