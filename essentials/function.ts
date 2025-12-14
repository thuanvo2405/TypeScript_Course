function add(a: number, b: number) {
  return a + b;
}

function log(a: string): void {
  console.log(a);
}

function logAndThrow(errorMessage: string): never {
  throw new Error(errorMessage);
}

const logMsg = (msg: string) => {
  console.log(msg);
};

function performanceJob(cb: (m: string) => void) {
  cb("Job done!");
}

type User = {
  name: string;
  age: number;
  greet: () => string;
};

let user: User = {
  name: "Thuan",
  age: 23,
  greet() {
    console.log(this.name);
    return this.name;
  },
};
