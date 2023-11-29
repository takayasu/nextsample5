import { fizzBuzz, isLeapYear } from './utils';

describe('isLeapYearの単体テスト', () => {
    test('2023年は閏年ではない', () => {
        expect(isLeapYear(2023)).toBe(false);
    });

    test('2024年は閏年', () => {
        expect(isLeapYear(2024)).toBe(true);
    });

    test('1900年は閏年ではない', () => {
        expect(isLeapYear(1900)).toBe(false);
    });

    test('2000年は閏年', () => {
        expect(isLeapYear(2000)).toBe(true);
    });

    test('紀元前45年は閏年ではない',()=>{
        expect(isLeapYear(-45)).toBe(false);
    })

    test('紀元前46年は概念がないからエラー（ユリウス暦前）',()=>{
        expect(()=>isLeapYear(-46)).toThrow(Error)
    })

});

describe('fizzBuzzの単体テスト', () => {
    test('3の倍数でFizz', () => {
        expect(fizzBuzz(3)).toBe("Fizz");
    });

    test('5の倍数でBuzz', () => {
        expect(fizzBuzz(5)).toBe("Buzz");
    });

    test('3の倍数かつ5の倍数でFizzBuzz', () => {
        expect(fizzBuzz(15)).toBe("FizzBuzz");
    });

    test('それ以外はそのまま', () => {
        expect(fizzBuzz(1)).toBe("1");
    });

});
