"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    _firstName = "";
    _lastName = "";
    set firstName(name) {
        if (name.trim() === "") {
            throw new Error("Invalid name");
        }
        this._firstName = name;
    }
    set lastName(name) {
        if (name.trim() === "") {
            throw new Error("Invalid name");
        }
        this._lastName = name;
    }
    get getFullName() {
        return this._firstName + " " + this._lastName;
    }
}
const thuan = new User();
thuan.firstName = "thuan";
thuan.lastName = "";
console.log(thuan.getFullName);
//# sourceMappingURL=advance.js.map