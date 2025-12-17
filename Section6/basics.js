"use strict";
// class User {
//   name: string;
//   age: number;
Object.defineProperty(exports, "__esModule", { value: true });
//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
// }
class User {
    name;
    age;
    hobbies = [];
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const thuan = new User("Thuan", 23);
console.log(thuan.name);
//# sourceMappingURL=basics.js.map