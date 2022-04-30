import logo from './logo.svg';
import './App.css';
import './Keys.js';
import {useState, useEffect} from "react";
import OWM_KEY from "./Keys";


function App() {

    const [lat, setLat] = useState([]);

    const [long, setLong] = useState([]);

    const [data, setData] = useState(null);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(function (position) {
            setLat(position.coords.latitude);
            setLong(position.coords.longitude);
        });

        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&units=Imperial&appid=${OWM_KEY}`)
            .then(res => res.json())
            .then(result => {
                console.log(result);
                setData(result);
            });

    }, [lat, long]);


    return (
        <div className="App">

        </div>
    );
}

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
