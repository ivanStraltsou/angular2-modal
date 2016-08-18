"use strict";
var router_1 = require('@angular/router');
var home_1 = require('./home/home');
exports.routes = [
    { path: 'home', component: home_1.Home },
    { path: '', redirectTo: 'home', terminal: true }
];
exports.routing = router_1.RouterModule.forRoot(exports.routes);
//# sourceMappingURL=C:/_all/_bin/repo/kronos/migration/angular2-modal/src/demo/app/app.routes.js.map