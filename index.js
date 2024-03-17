var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.speak = function () {
        console.log("My name is ".concat(this.name, " and my age is ").concat(this.age, "."));
    };
    return Person;
}());
var Profession = /** @class */ (function (_super) {
    __extends(Profession, _super);
    function Profession(name, age, profession) {
        var _this = _super.call(this, name, age) || this;
        _this.profession = profession;
        return _this;
    }
    Profession.prototype.speak = function () {
        console.log("My name is ".concat(this.name, " and I am a ").concat(this.profession, "."));
    };
    return Profession;
}(Person));
var personName = new Person("Mubeen Ul Hassan", 19);
var personProfession = new Profession("Mubeen Ul Hassan", 19, "GenAI Engineer");
personName.speak();
personProfession.speak();
