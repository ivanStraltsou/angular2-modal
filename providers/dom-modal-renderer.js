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
var createComponent_1 = require('../framework/createComponent');
var DOMModalRenderer = (function () {
    function DOMModalRenderer(_cr) {
        this._cr = _cr;
    }
    DOMModalRenderer.prototype.render = function (type, viewContainer, bindings, dialog) {
        var cmpRef = createComponent_1.default(this._cr, type, viewContainer, bindings);
        if (dialog.inElement) {
            viewContainer.element.nativeElement.appendChild(cmpRef.location.nativeElement);
        }
        else {
            document.body.appendChild(cmpRef.location.nativeElement);
        }
        dialog.onDestroy.subscribe(function () {
            if (typeof cmpRef.instance.canDestroy === 'function') {
                cmpRef.instance.canDestroy().then(function () { return cmpRef.destroy(); });
            }
            else {
                cmpRef.destroy();
            }
        });
        return dialog;
    };
    DOMModalRenderer = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [core_1.ComponentFactoryResolver])
    ], DOMModalRenderer);
    return DOMModalRenderer;
}());
exports.DOMModalRenderer = DOMModalRenderer;
//# sourceMappingURL=C:/_all/_bin/repo/kronos/migration/angular2-modal/src/components/angular2-modal/providers/dom-modal-renderer.js.map