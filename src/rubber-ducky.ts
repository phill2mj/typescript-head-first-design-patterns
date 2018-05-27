import { Duck } from './duck';
import { Squeak } from './squeak';
import { SitsMagestically } from './sits-magestically';

export class RubberDucky extends Duck {
    quackMethod = new Squeak;
    flyMethod = new SitsMagestically;

    display(): void {
        console.log('Rubber Ducky');
        this.performQuack();
        this.performFly();
        this.swim();
    }
}
