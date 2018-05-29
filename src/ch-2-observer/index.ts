import { WeatherStation } from './weather-station';
import { CurrentConditions } from './current-conditions-display';
import { Statistics } from './statistics-display';

const weatherStation = new WeatherStation;
const currentConditions = new CurrentConditions;
const statistics = new Statistics;

weatherStation.registerObserver(currentConditions);
weatherStation.registerObserver(statistics);

weatherStation.weather = {
    temperature: 78,
    humidity: 15,
    pressure: 1
};

weatherStation.weather = {
    temperature: 80,
    humidity: 14,
    pressure: 0.99
};

weatherStation.removeObserver(currentConditions);

weatherStation.weather = {
    temperature: 74,
    humidity: 52,
    pressure: 0.97
}
