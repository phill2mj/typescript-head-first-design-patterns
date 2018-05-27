import { FlyMethod } from './fly-method.interface';

export class SitsMagestically implements FlyMethod {
    fly(): void {
        console.log('I\'m not flying');
    }
}
