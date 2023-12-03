import { getPrice } from '../form';

describe('basic form test', () => {
    test('basic price', () => {
        const price = getPrice(); // 30

        expect(price).toBe(30);
    });

    test('price + breakfast', () => {
        const price = getPrice({
            breakfast: true,
        });

        expect(price).toBe(70);
    });

    test('price + lunch', () => {
        const price = getPrice({
            lunch: true,
        });

        expect(price).toBe(110);
    });

    test('price + breakfast + lunch', () => {
        const price = getPrice({
            breakfast: true,
            lunch: true,
        });

        expect(price).toBe(150);
    });
});