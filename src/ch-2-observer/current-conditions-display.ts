import { Observer } from "./observer";
import { Subject } from "./subject";
import { WeatherStation } from "./weather-station";

export class CurrentConditions implements Observer {
    public update(subject: Subject): void {
        if (subject instanceof WeatherStation) {
            console.log('The current conditions are:');
            console.log('Temperature: ' + subject.weather.temperature);
            console.log('Humidity: ' + subject.weather.humidity);
            console.log('Pressure: ' + subject.weather.pressure);
        }
    }
}
