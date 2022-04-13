"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// #5
class Human {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}
const bom = new Human("suebom", 22, "female");
const sayHi = (person) => {
    return (`Hello ${person.name}, you are ${person.age} old ${person.gender}.! `);
};
console.log("function types", sayHi(bom));
//#4
// interface human {
//     name: string;
//     age: number;
//     gender: string;
// }
// const person = {
//     name: "Bom",
//     age: 24,
//     gender: "male"
// };
// const sayHi = (person: human): string => {
//     return (`Hello ${person.name}, you are ${person.age} old ${person.gender}.! `);
// }
// console.log("function types", sayHi(person));
// export { };
//#3
// "scripts": {
//     "start": "node index.js",
//     "prestart": "tsc"
//   },
// const name = "Bom",
//     age = 24,
//     gender = "male";
// const sayHi = (name: string, age: number, gender: string): string => {
//     return (`Hello ${name}, you are ${age} old ${gender}.! `);
// }
// console.log("function types", sayHi(name, age, gender));
// export { };
//#2
// const name = "Bom",
//     age = 24,
//     gender = "male";
// const sayHi = (name, age, gender?) => {
//     console.log(`Hello ${name}, you are ${age} old ${gender}.`);
// }
// sayHi(name, age, gender);
// export { };
//#1
// console.log("hello");
//# sourceMappingURL=index1.js.map