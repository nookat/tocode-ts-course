"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// массив чисел
const numArr = [1, 3, 22, 45];
function testPromise() {
    return __awaiter(this, void 0, void 0, function* () {
        const a = yield new Promise((resolve, reject) => {
            resolve(3);
        });
    });
}
const check = {
    drive: true,
    kpp: false
};
