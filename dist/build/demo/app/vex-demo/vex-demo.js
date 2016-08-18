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
var vex_1 = require('../../../components/angular2-modal/plugins/vex');
var index_1 = require('../demo-head/index');
var presets = require('./presets');
var login_dialog_1 = require('./login-dialog');
var VexDemo = (function () {
    function VexDemo(modal, viewContainer) {
        var _this = this;
        this.modal = modal;
        this.theme = 'default';
        /**
         * A Default view container ref, usually the app root container ref.
         * Has to be set manually until we can find a way to get it automatically.
         */
        this.modal.defaultViewContainer = viewContainer;
        this.modalCommands = [
            {
                text: 'alert drop in',
                factory: function () { return presets.alert.call(_this, _this.modal).open(); }
            },
            {
                text: 'prompt drop in',
                factory: function () { return presets.prompt.call(_this, _this.modal).open(); }
            },
            {
                text: 'confirm drop in',
                factory: function () { return presets.confirm.call(_this, _this.modal).open(); }
            },
            {
                text: 'Cascading example',
                factory: function () { return presets.cascading.call(_this, _this.modal).open(); }
            },
            {
                text: 'In Element example',
                factory: function () { return presets.alert.call(_this, _this.modal).open(_this.demoHead.vcCommands); }
            },
            {
                text: 'Custom Modal example',
                factory: function () {
                    return new vex_1.DialogPresetBuilder(_this.modal)
                        .className(_this.theme)
                        .content(login_dialog_1.LoginDialog)
                        .message('Ary you coming to the event?')
                        .addOkButton('Yep!')
                        .addButton('vex-dialog-button-primary vex-dialog-button', 'Maybe?', function (cmp, $event) { return cmp.dialog.close('Maybe'); })
                        .addCancelButton('Nope!')
                        .open();
                }
            },
            {
                text: 'no buttons',
                factory: function () { return presets.noButtons.call(_this, _this.modal).open(); }
            },
            {
                text: 'custom buttons',
                factory: function () { return presets.customButtons.call(_this, _this.modal).open(); }
            }
        ];
    }
    __decorate([
        core_1.ViewChild(index_1.DemoHead), 
        __metadata('design:type', index_1.DemoHead)
    ], VexDemo.prototype, "demoHead", void 0);
    VexDemo = __decorate([
        core_1.Component({
            selector: 'vex-demo',
            styleUrls: [
                'demo/app/vex-demo//css/vex.css',
                'demo/app/vex-demo//css/vex-theme-default.css',
                'demo/app/vex-demo//css/vex-theme-os.css',
                'demo/app/vex-demo//css/vex-theme-plain.css',
                'demo/app/vex-demo//css/vex-theme-wireframe.css',
                'demo/app/vex-demo//css/vex-theme-flat-attack.css',
                'demo/app/vex-demo//css/vex-theme-top.css',
                'demo/app/vex-demo//css/vex-theme-bottom-right-corner.css'
            ],
            templateUrl: 'demo/app/vex-demo/vex-demo.tpl.html',
            // We override providers set by the Module since this app is using multiple module plugins
            // (js-native, vex, bootstrap) which messes up the provider tree (last plugin wins)
            // usually an app will use one plugin and this line is not needed.
            providers: vex_1.VexModalModule.getProviders(),
            encapsulation: core_1.ViewEncapsulation.None
        }), 
        __metadata('design:paramtypes', [vex_1.Modal, core_1.ViewContainerRef])
    ], VexDemo);
    return VexDemo;
}());
exports.VexDemo = VexDemo;
//# sourceMappingURL=C:/_all/_bin/repo/kronos/migration/angular2-modal/src/demo/app/vex-demo/vex-demo.js.map