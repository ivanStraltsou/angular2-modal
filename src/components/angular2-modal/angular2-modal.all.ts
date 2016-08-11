import {Provider} from '@angular/core';
import {OverlayRenderer} from './models/tokens';
import { DOMOverlayRenderer, Modal } from './providers';

export * from './framework/fluent-assign';
export * from './models/tokens';
export * from './models/dialog-ref';
export * from './models/modal-context';
export * from './models/modal-open-context';
export { DOMOverlayRenderer, Modal } from './providers';

export const MODAL_PROVIDERS: any[] = [
    new Provider(Modal, {useClass: Modal}),
    new Provider(OverlayRenderer, {useClass: DOMOverlayRenderer})
];

import * as bootstrap from './plugins/bootstrap/index';
import * as vex from './plugins/vex/index';
export const plugins = { bootstrap, vex };
