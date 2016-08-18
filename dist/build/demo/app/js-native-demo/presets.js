"use strict";
var js_native_1 = require('../../../components/angular2-modal/plugins/js-native');
exports.JSNativePresetBuilder = js_native_1.JSNativePresetBuilder;
function alert(modal) {
    return modal.alert().message('This is a native alert!');
}
exports.alert = alert;
function prompt(modal) {
    return modal.prompt()
        .message('This is a native prompt!')
        .promptDefault('This is a default value');
}
exports.prompt = prompt;
function confirm(modal) {
    return modal.confirm().message('Yes or No?');
}
exports.confirm = confirm;
//# sourceMappingURL=C:/_all/_bin/repo/kronos/migration/angular2-modal/src/demo/app/js-native-demo/presets.js.map