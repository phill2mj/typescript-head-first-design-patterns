import { QuackMethod } from './quack-method.interface';
import { FlyMethod } from './fly-method.interface';

export abstract class Duck {
    private _quackMethod: QuackMethod;
    private _flyMethod: FlyMethod;

    abstract display(): void;

    performQuack(): void {
        this._quackMethod.quack();
    }

    performFly(): void {
        this._flyMethod.fly();
    }

    swim(): void {
        console.log('All ducks swim');
    }

    set quackMethod(method: QuackMethod) {
        this._quackMethod = method;
    }

    set flyMethod(method: FlyMethod) {
        this._flyMethod = method;
    }
}