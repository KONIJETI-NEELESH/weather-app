import './WeatherApp.css';
import searchIcon from "../Assets/search-icon.png";
import cloudIcon from "../Assets/cloud-icon.png";
import windIcon from "../Assets/wind-icon.png";
import humidityIcon from "../Assets/humidity-icon.png";
import clearIcon from "../Assets/clear-icon.png";
import drizzleIcon from "../Assets/drizzle-icon.png";
import snowIcon from "../Assets/snow-icon.png";
import rainIcon from "../Assets/rain-icon.png";
import { useState } from 'react';

const WeatherApp = () => {

    const [wicon, setWicon] = useState(cloudIcon);
    const search = async () => {
        const element = document.getElementsByClassName("cityInput");
        console.log(element.value);
        if (element[0].value === "") {
            return 0;
        }
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=dd94f859a0e52d6e4767fddf735f04a7`;
        fetch(url).
            then((response) => response.json()).
            then((data) => {

                const humidity = document.getElementsByClassName("humidity-percent");
                const wind = document.getElementsByClassName("wind-speed");
                const temperature = document.getElementsByClassName("weather-temp");
                const location = document.getElementsByClassName("weather-location");

                humidity[0].innerHTML = Math.floor(data.main.humidity) + " %";
                wind[0].innerHTML = Math.floor(+ data.wind.speed) + " Km/Hr";
                temperature[0].innerHTML = Math.floor(+ data.main.temp) + "&deg;c";
                location[0].innerHTML = data.name;

                if (data.weather[0].icon === "01d" || data.weather[0].icon === "01n") {
                    setWicon(clearIcon)
                }
                else if (data.weather[0].icon === "02d" || data.weather[0].icon === "02n") {
                    setWicon(cloudIcon)
                }
                else if (data.weather[0].icon === "03d" || data.weather[0].icon === "03n") {
                    setWicon(drizzleIcon)
                }
                else if (data.weather[0].icon === "04d" || data.weather[0].icon === "04n") {
                    setWicon(drizzleIcon)
                }
                else if (data.weather[0].icon === "09d" || data.weather[0].icon === "09n") {
                    setWicon(rainIcon)
                }
                else if (data.weather[0].icon === "10d" || data.weather[0].icon === "10n") {
                    setWicon(rainIcon)
                }
                else if (data.weather[0].icon === "13d" || data.weather[0].icon === "13n") {
                    setWicon(snowIcon)
                }
                else {
                    setWicon(clearIcon)
                }

            }).catch((data) => {
                alert("Please Enter Valid City Name")
            })

    }

    return (
        <div className='container'>
            <div className='top-bar'>
                <input type='text' className='cityInput' placeholder='Search' />
                <div className='search-div' onClick={search}>
                    <img src={searchIcon} alt='' className='search-icon' />
                </div>
            </div>
            <div className='weather-image'>
                <img src={wicon} alt='' className='cloud-icon' />
            </div>
            <div className='weather-temp'>24&deg;C</div>
            <div className='weather-location'>London</div>
            <div className='data-container'>
                <div className='element'>
                    <img src={humidityIcon} alt='' className='humidity-icon' />
                    <div className='data'>
                        <div className='humidity-percent'>64%</div>
                        <div className='text'>Humidity</div>
                    </div>
                </div>
                <div className='element'>
                    <img src={windIcon} alt='' className='wind-icon' />
                    <div className='data'>
                        <div className='wind-speed'>18 Km/hr</div>
                        <div className='text'>Wind Speed</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WeatherApp