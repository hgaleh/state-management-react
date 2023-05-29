import assert  from "assert";
import { oneTaskOnly } from "./oneTaskOnly";
import { Promiser } from "./common";

export async function task2(taskPool: any[], func: Promiser, limit: number): Promise<unknown[]> {
    assert(taskPool, 'taskPool should be defined');
    assert(func, 'func should be defined');
    assert(limit, 'limit should be defined');
    assert(Array.isArray(taskPool));
    assert(taskPool.length !== 0);
    assert(limit > 0);

    const resultOfAllWorks = await Promise.all(Array.from({length: limit}).map(() => oneTaskOnly(taskPool, func)));

    return resultOfAllWorks.flat();
}

