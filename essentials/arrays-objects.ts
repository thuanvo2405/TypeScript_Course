let hobbies = ["Sport", "Game"];

// hobbies.push(123); can't push number becacuse TS can assign type .

// let users: (number | string)[];
// alternative syntax declare array
let users: Array<string | number>;

users = [1, "Thuan"];
users = ["Thuan", "Ne"];

//tuples if you know exactly the number (phần tử) in array declare like under

let possibleResults: [number, number];

possibleResults = [1, -1];
// possibleResults = [1, 2, 3];
