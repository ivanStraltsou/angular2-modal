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
var angular2_modal_1 = require('../../../../components/angular2-modal');
var ModalCustomisationWizard = (function () {
    function ModalCustomisationWizard(modal) {
        this.modal = modal;
        this.type = 'alert';
        this.preset = {
            size: 'lg',
            isBlocking: true,
            showClose: true,
            keyboard: 27,
            dialogClass: '',
            headerClass: '',
            title: 'Hello World',
            titleHtml: '',
            body: 'A Customized Modal',
            bodyClass: '',
            footerClass: '',
            okBtn: '',
            okBtnClass: '',
        };
    }
    ModalCustomisationWizard.prototype.createModal = function () {
        var p = this.preset;
        var fluent = this.modal[this.type]();
        for (var key in p) {
            var value = p[key];
            if (value === null || value === '')
                continue;
            fluent[key](value);
        }
        fluent.open();
    };
    Object.defineProperty(ModalCustomisationWizard.prototype, "code", {
        get: function () {
            var p = this.preset, code = "modal." + this.type + "()\n";
            for (var key in p) {
                var value = p[key];
                if (value === null || value === '')
                    continue;
                code += "    ." + key + "(" + (typeof value === 'string' ? "'" + value + "'" : value) + ")\n";
            }
            code += '    .open();';
            return code;
        },
        enumerable: true,
        configurable: true
    });
    ModalCustomisationWizard = __decorate([
        core_1.Component({
            selector: 'customize-wizard',
            templateUrl: 'demo/app/bootstrap-demo/modal-customisation-wizard/modal-customisation-wizard.tpl.html'
        }), 
        __metadata('design:paramtypes', [angular2_modal_1.Modal])
    ], ModalCustomisationWizard);
    return ModalCustomisationWizard;
}());
exports.ModalCustomisationWizard = ModalCustomisationWizard;
//# sourceMappingURL=C:/_all/_bin/repo/kronos/migration/angular2-modal/src/demo/app/bootstrap-demo/modal-customisation-wizard/modal-customisation-wizard.js.map