// let hobbies = ["Sport", "Game"];

// // hobbies.push(123); can't push number becacuse TS can assign type .

// // let users: (number | string)[];
// // alternative syntax declare array
// let users: Array<string | number>;

// users = [1, "Thuan"];
// users = ["Thuan", "Ne"];

// //tuples if you know exactly the number (phần tử) in array declare like under

// let possibleResults: [number, number];

// possibleResults = [1, -1];
// // possibleResults = [1, 2, 3];

// // Object

// let user: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: {
//     description: string;
//     id: number;
//   };
// } = {
//   name: "Thuan",
//   age: 23,
//   hobbies: ["Watch TVB movie", "Learn new tech"],
//   role: {
//     description: "student",
//     id: 1,
//   },
// };

// let val: {} = "can asign any value but can't undified and null";

// let data: Record<string, string | number>;

// data = {
//   entry1: 1,
//   entry2: "string",
// };

enum Role {
  GUEST,
  ADMIN,
  EDITOR,
}

const guest: Role = Role.ADMIN;
console.log(guest);

// literal type
let numbers: [1 | 1, number];

// numbers = [1, 3];


