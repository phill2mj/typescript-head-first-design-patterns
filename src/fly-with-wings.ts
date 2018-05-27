import { FlyMethod } from './fly-method.interface';

export class FlyWithWings implements FlyMethod {
    fly(): void {
        console.log('I\'m flying with wings');
    }
}
