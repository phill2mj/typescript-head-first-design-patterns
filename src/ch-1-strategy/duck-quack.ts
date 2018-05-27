import { QuackMethod } from './quack-method.interface';

export class DuckQuack implements QuackMethod {
    quack(): void {
        console.log('I\'m quacking');
    }
}
