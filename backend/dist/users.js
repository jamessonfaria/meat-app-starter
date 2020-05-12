"use strict";
exports.__esModule = true;
var User = /** @class */ (function () {
    function User(email, name, password) {
        this.email = email;
        this.name = name;
        this.password = password;
    }
    User.prototype.matches = function (another) {
        return another !== undefined &&
            another.email === this.email &&
            another.password === this.password;
    };
    return User;
}());
exports.User = User;
exports.users = {
    "jualiana@aol.com": new User('jualiana@aol.com', 'juliaa', 'ju123'),
    "a@aol.com": new User('a@aol.com', 'amanda', 'a123')
};
