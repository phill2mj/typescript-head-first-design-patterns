import { QuackMethod } from './quack-method.interface';

export class Squeak implements QuackMethod {
    quack(): void {
        console.log('I\'m squeaking');
    }
}