// class User {
//   name: string;
//   age: number;

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
// }

class User {
  readonly hobbies: string[] = [];
  constructor(public name: string, private age: number) {}
}

const thuan = new User("Thuan", 23);

console.log(thuan.name);
