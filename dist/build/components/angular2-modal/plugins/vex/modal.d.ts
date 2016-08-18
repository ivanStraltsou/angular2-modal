import { Modal as BaseModal } from '../../providers';
import { DropInPresetBuilder } from './presets/dropin-preset';
export interface VEXModal extends BaseModal {
    alert(): DropInPresetBuilder;
    prompt(): DropInPresetBuilder;
    confirm(): DropInPresetBuilder;
}
export declare const Modal: typeof BaseModal;
export declare type Modal = VEXModal;
