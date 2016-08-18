/// <reference types="core-js" />
import { NgModuleRef } from '@angular/core';
import { AppModule } from './demo/app/app.module';
export declare function main(): Promise<NgModuleRef<AppModule>>;
export declare function isBootstrapped(): boolean;
