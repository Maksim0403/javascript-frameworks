"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cat = void 0;
var Cat = /** @class */ (function () {
    function Cat(name, speed) {
        this.name = name;
        this.speed = speed;
    }
    Cat.prototype.move = function () {
        var _a;
        console.log("".concat(this.name, " \u0431\u0456\u0436\u0438\u0442\u044C \u0437\u0456 \u0448\u0432\u0438\u0434\u043A\u0456\u0441\u0442\u044E: ").concat((_a = this.speed) !== null && _a !== void 0 ? _a : "невідомо", " \u043A\u043C/\u0433\u043E\u0434"));
    };
    return Cat;
}());
exports.Cat = Cat;
