import { Duck } from './duck';
import { SilentQuack } from './silent-quack';
import { SitsMagestically } from './sits-magestically';

export class Decoy extends Duck {
    quackMethod = new SilentQuack;
    flyMethod = new SitsMagestically;

    display(): void {
        console.log('Decoy');
        this.performQuack();
        this.performFly();
        this.swim();
    }
}
