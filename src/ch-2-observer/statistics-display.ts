import { Observer } from "./observer";
import { Subject } from "./subject";
import { WeatherStation } from "./weather-station";

export class Statistics implements Observer {
    private _temperatures: Array<number>;
    private _humidities: Array<number>;

    constructor() {
        this._temperatures = [];
        this._humidities = [];
    }

    public update(subject: Subject) {
        if (subject instanceof WeatherStation) {
            this._temperatures.push(subject.weather.temperature);
            this._humidities.push(subject.weather.humidity);
            console.log('The average weather is: Temp ' + this.calculateAverage(this._temperatures) + ', Hum ' + this.calculateAverage(this._humidities));
        }
    }

    private calculateAverage(list: Array<number>): number {
        let sum: number = 0;
        list.forEach(temp => sum += temp)
        return Math.round((sum / list.length) * 10) / 10;
    }
}