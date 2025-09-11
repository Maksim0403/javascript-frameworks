"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fish = void 0;
var Fish = /** @class */ (function () {
    function Fish(name, speed) {
        this.name = name;
        this.speed = speed;
    }
    Fish.prototype.move = function () {
        var _a;
        console.log("".concat(this.name, " \u043F\u043B\u0438\u0432\u0435 \u0437\u0456 \u0448\u0432\u0438\u0434\u043A\u0456\u0441\u0442\u044E: ").concat((_a = this.speed) !== null && _a !== void 0 ? _a : "невідомо", " \u043A\u043C/\u0433\u043E\u0434"));
    };
    return Fish;
}());
exports.Fish = Fish;
