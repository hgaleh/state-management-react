export type Promiser = (inp: any) => Promise<any>;

export async function expectErrorAsync(func: () => Promise<unknown>) {
    let hasError = false;
    try {
        await func();
    } catch(e) {
        hasError = true;
    }
    if (!hasError) {
        throw 'error expected!';
    }
}

export function AwarePromise(num: number): Promise<any> {
    const changedPromise = new Proxy(Promise as any, {
        construct: function(target, args) {
            if(++changedPromise.concurrent > num) {
                throw `number of concurrent promises exceeded ${num}`;
            }
    
            return new target(...args);
        }
    });
    changedPromise.prototype.then = new Proxy(changedPromise.prototype.then, {
        apply: function(target, thisArg, args) {
            args[0] = new Proxy(args[0], {
                apply: function (target, thisArg, argument) {
                    changedPromise.concurrent--;
                    return target.apply(thisArg, argument);
                }
            });
            const res = target.apply(thisArg, args);
            return res;
        }
    });
    changedPromise.concurrent = 0;
    return changedPromise as any as Promise<any>;
}