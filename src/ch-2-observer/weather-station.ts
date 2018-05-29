import { Subject } from "./subject";
import { Observer } from "./observer";
import { Weather } from "./weather";

export class WeatherStation implements Subject {
    private _subscriptionList: Array<Observer> = [];
    private _weather: Weather;

    public registerObserver(observer: Observer): void {
        this._subscriptionList.push(observer);
    }

    public removeObserver(observer: Observer): void {
        this._subscriptionList = this._subscriptionList.filter(obs => obs !== observer);
    }

    public notifyObservers(): void {
        this._subscriptionList.forEach(observer => observer.update(this));
    }

    get weather(): Weather {
        return this._weather;
    }

    set weather(newWeather: Weather) {
        this._weather = newWeather;
        this.notifyObservers();
    }
}
