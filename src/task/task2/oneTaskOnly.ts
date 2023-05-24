import assert  from "assert";
import { Promiser } from "./common";

export async function oneTaskOnly(taskPool: unknown[], func: Promiser): Promise<unknown[]> {
    assert(taskPool);
    assert(func);
    assert(taskPool.length !== 0);

    const results: unknown[] = [];
    while(taskPool.length > 0) {
        const firstTask = taskPool.splice(0, 1)[0];
        const firstResult = await func(firstTask);
        results.push(firstResult);
    }
    return results;
}