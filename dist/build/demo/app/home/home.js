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
var index_1 = require('./in-app-plugin/index');
var Home = (function () {
    function Home(modal) {
        this.modal = modal;
    }
    Home.prototype.ngAfterViewInit = function () {
        this.modal.alert()
            .title('Angular 2 Modal')
            .templateRef(this.myTemplate)
            .open(this.injectVC);
    };
    __decorate([
        core_1.ViewChild('injectPoint', { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.ViewContainerRef)
    ], Home.prototype, "injectVC", void 0);
    __decorate([
        core_1.ViewChild('myTemplate', { read: core_1.TemplateRef }), 
        __metadata('design:type', core_1.TemplateRef)
    ], Home.prototype, "myTemplate", void 0);
    Home = __decorate([
        core_1.Component({
            selector: 'home',
            providers: index_1.InAppModalModule.getProviders(),
            templateUrl: 'demo/app/home/home.tpl.html',
            encapsulation: core_1.ViewEncapsulation.None
        }), 
        __metadata('design:paramtypes', [index_1.Modal])
    ], Home);
    return Home;
}());
exports.Home = Home;
//# sourceMappingURL=C:/_all/_bin/repo/kronos/migration/angular2-modal/src/demo/app/home/home.js.map