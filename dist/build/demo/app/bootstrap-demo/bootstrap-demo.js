"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var bootstrap_1 = require('../../../components/angular2-modal/plugins/bootstrap');
var BootstrapDemo = (function () {
    function BootstrapDemo(modal, viewContainer) {
        this.modal = modal;
        /**
         * A Default view container ref, usually the app root container ref.
         * Has to be set manually until we can find a way to get it automatically.
         */
        modal.defaultViewContainer = viewContainer;
    }
    BootstrapDemo = __decorate([
        core_1.Component({
            selector: 'bootstrap-demo',
            template: "<router-outlet></router-outlet>",
            // We override providers set by the Module since this app is using multiple module plugins
            // (js-native, vex, bootstrap) which messes up the provider tree (last plugin wins)
            // usually an app will use one plugin and this line is not needed.
            providers: bootstrap_1.BootstrapModalModule.getProviders(),
            encapsulation: core_1.ViewEncapsulation.None
        }), 
        __metadata('design:paramtypes', [bootstrap_1.Modal, core_1.ViewContainerRef])
    ], BootstrapDemo);
    return BootstrapDemo;
}());
exports.BootstrapDemo = BootstrapDemo;
//# sourceMappingURL=C:/_all/_bin/repo/kronos/migration/angular2-modal/src/demo/app/bootstrap-demo/bootstrap-demo.js.map