import './WeatherApp.css';
import searchIcon from "../Assets/search-icon.png"
import cloudIcon from "../Assets/cloud-icon.png"
import windIcon from "../Assets/wind-icon.png"
import humidityIcon from "../Assets/humidity-icon.png"

const WeatherApp = () => {
    return (
        <div className='container'>
            <div className='top-bar'>
                <input type='text' className='cityInput' placeholder='Search' />
                <div className='search-div'>
                    <img src={searchIcon} alt='' className='search-icon' />
                </div>
            </div>
            <div className='weather-image'>
                <img src={cloudIcon} alt='' className='cloud-icon' />
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
                        <div className='humidity-percent'>18 Km/hr</div>
                        <div className='text'>Wind Speed</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WeatherApp