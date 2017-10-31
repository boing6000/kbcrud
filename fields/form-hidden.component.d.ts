import { Injector } from '@angular/core';
import { NgModel } from '@angular/forms';
import { ElementBase } from './base/element-base';
import { FieldChanges } from './field-change';
export declare class FormHiddenComponent extends ElementBase<any> {
    label: string;
    placeholder: string;
    name: string;
    hasFilter: boolean;
    cssClass: string;
    model: NgModel;
    identifier: string;
    constructor(validators: Array<any>, asyncValidators: Array<any>, injector: Injector);
    ngOnChanges(changes: FieldChanges): void;
}
