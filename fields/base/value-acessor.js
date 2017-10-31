import { NgControl } from '@angular/forms';
var ValueAccessorBase = (function () {
    function ValueAccessorBase(_injector) {
        this._injector = _injector;
        this.changed = new Array();
        this.touched = new Array();
        this.dirty = false;
    }
    Object.defineProperty(ValueAccessorBase.prototype, "control", {
        /**
         * The control (NgModel or FormControl) that exists on our custom component.
         * Lazy loaded.
         * @readonly
         * @protected
         * @type {NgControl}
         * @memberof ValueAccessorBase
         */
        get: function () {
            if (this._control != null) {
                return this._control;
            }
            this._control = this._injector.get(NgControl, null).control;
            return this._control;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ValueAccessorBase.prototype, "value", {
        get: function () {
            return this.innerValue;
        },
        set: function (value) {
            if (this.innerValue !== value) {
                this.innerValue = value;
                this.changed.forEach(function (f) { return f(value); });
            }
        },
        enumerable: true,
        configurable: true
    });
    ValueAccessorBase.prototype.writeValue = function (value) {
        //this.parentControl = this._injector.get(NgControl, null);
        this.innerValue = value;
    };
    ValueAccessorBase.prototype.registerOnChange = function (fn) {
        this.changed.push(fn);
    };
    ValueAccessorBase.prototype.registerOnTouched = function (fn) {
        this.touched.push(fn);
    };
    ValueAccessorBase.prototype.touch = function () {
        this.touched.forEach(function (f) { return f(); });
    };
    return ValueAccessorBase;
}());
export { ValueAccessorBase };
