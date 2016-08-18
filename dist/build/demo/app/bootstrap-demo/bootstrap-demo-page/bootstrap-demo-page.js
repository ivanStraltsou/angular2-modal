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
var bootstrap_1 = require('../../../../components/angular2-modal/plugins/bootstrap');
var index_1 = require('../../demo-head/index');
var custom_modal_sample_1 = require('./custom-modal-sample');
var presets = require('../presets');
var BootstrapDemoPage = (function () {
    function BootstrapDemoPage(modal) {
        var _this = this;
        this.modal = modal;
        this.modalCommands = [
            {
                text: 'alert drop in',
                factory: function () { return presets.alert(_this.modal).open(); }
            },
            {
                text: 'prompt drop in',
                factory: function () { return presets.prompt(_this.modal).open(); }
            },
            {
                text: 'confirm drop in',
                factory: function () { return presets.confirm(_this.modal).open(); }
            },
            {
                text: 'Cascading example',
                factory: function () { return presets.cascading(_this.modal).open(); }
            },
            {
                text: 'In Element example',
                factory: function () { return presets.inElement(_this.modal).open(_this.demoHead.vcCommands); }
            },
            {
                text: 'Custom Modal example',
                factory: function () {
                    return _this.modal.open(custom_modal_sample_1.AdditionCalculateWindow, new custom_modal_sample_1.AdditionCalculateWindowData(2, 3));
                }
            }
        ];
    }
    __decorate([
        core_1.ViewChild(index_1.DemoHead), 
        __metadata('design:type', index_1.DemoHead)
    ], BootstrapDemoPage.prototype, "demoHead", void 0);
    BootstrapDemoPage = __decorate([
        core_1.Component({
            selector: 'bootstrap-demo-page',
            styleUrls: ['demo/app/bootstrap-demo/bootstrap-demo-page/bootstrap-demo-page.css'],
            templateUrl: 'demo/app/bootstrap-demo/bootstrap-demo-page/bootstrap-demo-page.tpl.html'
        }), 
        __metadata('design:paramtypes', [bootstrap_1.Modal])
    ], BootstrapDemoPage);
    return BootstrapDemoPage;
}());
exports.BootstrapDemoPage = BootstrapDemoPage;
//# sourceMappingURL=C:/_all/_bin/repo/kronos/migration/angular2-modal/src/demo/app/bootstrap-demo/bootstrap-demo-page/bootstrap-demo-page.js.map