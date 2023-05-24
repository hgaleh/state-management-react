import { oneTaskOnly } from "./oneTaskOnly";
import { AwarePromise, Promiser, expectErrorAsync } from "./common";

test('thePool should be defined', async function() {
    
    await expectErrorAsync(async () => {
        await oneTaskOnly(undefined as any, () => Promise.resolve())
    });

});

test('thePool should not be empty list', async function() {
    
    await expectErrorAsync(async () => {
        await oneTaskOnly([], () => Promise.resolve())
    });

});

test('func should not be defined', async function() {
    
    await expectErrorAsync(async () => {
        await oneTaskOnly([1], undefined as any);
    });

});

test('when two tasks are in task pool, it should return two values asynchronously', async function() {
    const values = [4, 7];
    const func: Promiser = async (val: number) => {
        return val * 2;
    }
    const res = await oneTaskOnly(values, func);
    expect(res).toEqual([8, 14]);
});
