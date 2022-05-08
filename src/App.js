import './App.css';
import './Keys.js';
import {useState, useEffect} from "react";
import {OWM_KEY} from "./Keys";


function App() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=41.093842&lon=-85.139236&units=Imperial&appid=${OWM_KEY}`)
            .then(res => res.json())
            .then(result => {
                setData(result);
                console.log(result);
            })
            .catch(console.error)
    }, []);

    if (data) {

        let date = new Date(`${data.current.dt}` * 1000);
        let allDates = date.toDateString();
        return <div className={"weather-section"}>
            <h1>{allDates}</h1>
            <h1>{data.current.weather[0].main}</h1>
            <img src={"http://openweathermap.org/img/wn/" + data.current.weather[0].icon + "@2x.png"} width={150}
                 alt={"current weather"}
                 className={"current-weather"}/>
            <h1>{data.current.temp}&deg;</h1>
            <h2>Feels like: {data.current.feels_like}&deg; </h2>
            <p>Description: {data.current.weather[0].description}</p>
            <p>Humidity: {data.current.humidity}</p>
            <p>Pressure: {data.current.pressure}</p>
        </div>
    }
}

export default App;
