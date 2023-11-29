export const isLeapYear: (year :number) => boolean = (year: number) => {

    if(year < -45){
        throw new Error("紀元前46年以前は概念がないからエラー（ユリウス暦前）");
    }
    return year % 400 === 0 ? true : year % 100 === 0 ? false : year % 4 === 0 ? true : false;
}

export const fizzBuzz: (number: number) => string = (number: number) => {

    return number % 15 === 0 ? "FizzBuzz" : number % 3 === 0 ? "Fizz" : number % 5 === 0 ? "Buzz" : number.toString();
}