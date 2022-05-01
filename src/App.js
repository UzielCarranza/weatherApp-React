import './App.css';
import './Keys.js';
import {useState, useEffect} from "react";
import OWM_KEY from "./Keys";


function App() {

    // const [lat, setLat] = useState([]);
    //
    // const [long, setLong] = useState([]);

    const [data, setData] = useState(null);

    useEffect(() => {
        //     navigator.geolocation.getCurrentPosition(function (position) {
        //         setLat(position.coords.latitude);
        //         setLong(position.coords.longitude);
        //     });
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=41.093842&lon=-85.139236&units=Imperial&appid=${OWM_KEY}`)
            .then(res => res.json())
            .then(result => {
                setData(result);
                console.log(result);
            })
            .catch(console.error)
    }, []);
    // }, [lat, long]);

    if (data) {
        return <div className={"weather-section"}>
            <h1>{data.current.weather[0].main}</h1>
            <img src={"http://openweathermap.org/img/wn/" + data.current.weather[0].icon + "@2x.png"} width={100} alt={"current weather"}
            className={"current-weather"}/>
            <h1>{data.current.temp}&deg;</h1>
            <h2>Feels like: </h2>
            <p>{data.current.weather[0].description}</p>
            <p>Humidity: {data.current.humidity}</p>
            <p>Pressure: {data.current.pressure}</p>
        </div>
    }
}

//
// placed: data.timezone,
//     manDescription: data.current.weather[0].main,
//     currentDayDescription: data.current.weather[0].description,
//     currentDayIcon: data.current.weather[0].icon,
//     userLan: data.lat,
//     userLon: data.lon,
//     currentTemp: data.current.temp,
//     dt: data.current.dt,
//     wind: data.current.wind_speed,
//     humidity: data.current.humidity,
//     pressure: data.current.pressure,
//     currentMain: data.current.weather[0].main,
//     feelsLike: data.current.feels_like,

//
// function GetWeather({OWM_URL}, {userLat}, {userLong}) {
//
//     // eslint-disable-next-line react-hooks/rules-of-hooks
//     const [data, setData] = useState(null);
//     // fetch(`${OWM_URL}/onecall?lat=${88.02}&lon=${-80.02}&units=${Imperial}&appid=${OWM_KEY}`)
//     //    .then(res => res.json())
//     //    .then(result => {
//     //        console.log(result);
//     //    })
//     useEffect(() =>{
//         fetch(`${OWM_URL}/onecall?lat=${latUser}&lon=${lonUser}&units=Imperial&appid=${OWM_KEY}`)
//     })
// }
// function GitHubUser({login}){
//     const [data, setData] = useState(null);
//     useEffect(() => {
//         fetch(`https://api.github.com/users/${login}`)
//             .then(res => res.json())
//             .then(setData)
//             .catch(console.errora)
//     }, []);
//     if (data){
//         return <div>
//             <h1>{data.login}</h1>
//             <img src={data.avatar_url} width={100}/>
//         </div>
//     }
//     return null
//
// }

export default App;
