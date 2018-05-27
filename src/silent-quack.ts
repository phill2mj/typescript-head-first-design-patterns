import { QuackMethod } from './quack-method.interface';

export class SilentQuack implements QuackMethod {
    quack(): void {
        console.log('* watches you silently *');
    }
}
