import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from "react";

function App() {

    const [lat, setLat] = useState([]);

    const [long, setLong] = useState([]);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(function (position) {
            setLat(position.coords.latitude);
            setLong(position.coords.longitude);
        });
        console.log(`latitude is ${lat}`)
        console.log(`latitude is ${long}`)
    }, [lat, long]);
    return (
        <div className="App">

          <p>{lat}</p>

          <p>{long}</p>
        </div>
    );
}

export default App;
