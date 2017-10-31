import { Injector, OnInit, SimpleChanges } from '@angular/core';
import { NgModel } from '@angular/forms';
import { ElementBase } from './base/element-base';
import { SelectItem } from 'primeng/primeng';
export declare class FormListboxComponent extends ElementBase<any | any[]> implements OnInit {
    model: NgModel;
    options: SelectItem[];
    filterable: boolean;
    multiple: boolean;
    withCheckbox: boolean;
    identifier: string;
    constructor(validators: Array<any>, asyncValidators: Array<any>, injector: Injector);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
}
