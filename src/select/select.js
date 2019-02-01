var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
var SemanticSelectComponent = (function () {
    function SemanticSelectComponent() {
        this.control = new FormControl();
        this.silentOnChange = false;
        this.options = {};
        this.modelChange = new EventEmitter();
        this.onChange = new EventEmitter();
    }
    Object.defineProperty(SemanticSelectComponent.prototype, "disabled", {
        set: function (data) {
            var _this = this;
            setTimeout(function () {
                if (data) {
                    jQuery(_this.select.nativeElement.parentNode).addClass('disabled');
                }
                else {
                    jQuery(_this.select.nativeElement.parentNode).removeClass('disabled');
                }
            }, 1);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SemanticSelectComponent.prototype, "model", {
        set: function (data) {
            var _this = this;
            if (data) {
                setTimeout(function () {
                    jQuery(_this.select.nativeElement).dropdown('set selected', data);
                }, 1);
            }
        },
        enumerable: true,
        configurable: true
    });
    SemanticSelectComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (typeof this.class === 'string' && this.class.search('multiple') >= 0) {
            this.select.nativeElement.setAttribute('multiple', true);
        }
        var options = Object.assign({
            onChange: function (value) {
                _this.modelChange.emit(value);
                _this.onChange.emit(value);
            },
            onHide: function () { return _this.control.markAsTouched(); }
        }, this.options);
        jQuery(this.select.nativeElement)
            .dropdown(options);
    };
    __decorate([
        Input(),
        __metadata("design:type", FormControl)
    ], SemanticSelectComponent.prototype, "control", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], SemanticSelectComponent.prototype, "class", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], SemanticSelectComponent.prototype, "label", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], SemanticSelectComponent.prototype, "silentOnChange", void 0);
    __decorate([
        ViewChild('select'),
        __metadata("design:type", ElementRef)
    ], SemanticSelectComponent.prototype, "select", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], SemanticSelectComponent.prototype, "options", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], SemanticSelectComponent.prototype, "placeholder", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], SemanticSelectComponent.prototype, "modelChange", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], SemanticSelectComponent.prototype, "onChange", void 0);
    __decorate([
        Input('disabled'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], SemanticSelectComponent.prototype, "disabled", null);
    __decorate([
        Input('model'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], SemanticSelectComponent.prototype, "model", null);
    SemanticSelectComponent = __decorate([
        Component({
            changeDetection: ChangeDetectionStrategy.OnPush,
            selector: 'sm-select',
            template: "<div class=\"field\" [ngClass]=\"{error: (!control?.valid && control?.touched) }\">\n  <label *ngIf=\"label\">{{label}}</label>\n<select [formControl]=\"control\" class=\"ui {{class}} dropdown\"  #select>\n    <option value=\"\">{{placeholder}}</option>\n    <ng-content></ng-content>\n</select>\n</div>"
        })
    ], SemanticSelectComponent);
    return SemanticSelectComponent;
}());
export { SemanticSelectComponent };
