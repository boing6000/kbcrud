import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
var KbFormComponent = (function () {
    function KbFormComponent(fb) {
        this.fb = fb;
        this.model = {};
        this.submit = new EventEmitter();
        this.cancel = new EventEmitter();
        this.formBlocked = false;
        this.form = this.fb.group({});
    }
    KbFormComponent.prototype.ngOnInit = function () {
        var fbConnfig = {};
        this.fields.forEach(function (field) {
            fbConnfig[field.name] = new FormControl('', field.validation);
        });
        this.form = this.fb.group(fbConnfig);
    };
    KbFormComponent.prototype.onSubmit = function (event) {
        this.submit.emit(this.model);
    };
    KbFormComponent.prototype.onCancel = function () {
        this.cancel.emit(true);
    };
    return KbFormComponent;
}());
export { KbFormComponent };
KbFormComponent.decorators = [
    { type: Component, args: [{
                selector: 'kb-form',
                templateUrl: './kb-form.component.html',
                styleUrls: ['./kb-form.component.scss']
            },] },
];
/** @nocollapse */
KbFormComponent.ctorParameters = function () { return [
    { type: FormBuilder, },
]; };
KbFormComponent.propDecorators = {
    'model': [{ type: Input },],
    'submit': [{ type: Output, args: ['onSubmit',] },],
    'cancel': [{ type: Output, args: ['onCancel',] },],
    'formBlocked': [{ type: Input, args: ['blocked',] },],
    'fields': [{ type: Input },],
};
