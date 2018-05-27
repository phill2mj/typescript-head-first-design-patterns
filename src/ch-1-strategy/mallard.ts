import { Duck } from './duck';
import { DuckQuack } from './duck-quack';
import { FlyWithWings } from './fly-with-wings';

export class Mallard extends Duck {
    quackMethod = new DuckQuack;
    flyMethod = new FlyWithWings;

    display(): void {
        console.log('-Mallard-');
        this.performQuack();
        this.performFly();
        this.swim();
    }
}
