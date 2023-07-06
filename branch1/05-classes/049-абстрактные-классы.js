"use strict";
// Абстрактные классы
class Controller {
    handleWithLogs(req) {
        console.log('start');
        this.handle(req);
        console.log('end');
    }
}
class UserController extends Controller {
    handle(req) {
        console.log(req);
    }
}
// new Controller(); - нельзя создать instance
new UserController().handleWithLogs('Request');
