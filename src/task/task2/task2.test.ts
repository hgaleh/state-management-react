import { expectErrorAsync } from "./common";
import { task2 } from "./task2";

test('thePool should be defined', async function() {
    
    await expectErrorAsync(async () => {
        await task2(undefined as any, () => Promise.resolve(1), 1);
    });

});


test('thePool should not be empty', async function() {
    
    await expectErrorAsync(async () => {
        await task2([], () => Promise.resolve(1), 1);
    });

});

test('promiser func should not be undefined', async function() {
    
    await expectErrorAsync(async () => {
        await task2([1], undefined as any, 1);
    });

});

test('limit should not be undefined', async function() {
    
    await expectErrorAsync(async () => {
        await task2([1], () => Promise.resolve(1), undefined as any);
    });

});

test('limit should be positive', async function() {
    
    await expectErrorAsync(async () => {
        await task2([1], () => Promise.resolve(1), 0);
    });

});

test('if 3 tasks are given there should be three results as well', async function() {
    
    const res = await task2([2, 5, 3], (num: number) => Promise.resolve(2 * num), 1);
    expect(res).toEqual([4, 10, 6]);

});