var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { FormControl } from '@angular/forms';
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
export var SemanticDropdownComponent = (function () {
    function SemanticDropdownComponent() {
        this.control = new FormControl();
        this.arrowIcon = "dropdown";
        this.options = {};
        this.valueChange = new EventEmitter();
        this.onChange = new EventEmitter();
        this.onFocus = new EventEmitter();
        this.onBlur = new EventEmitter();
    }
    SemanticDropdownComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var options = Object.assign({
            onChange: function (value, a, b) {
                if (b != null && b.length) {
                    _this.value = parseInt(b[0].dataset['value']);
                    _this.control.setValue(_this.value);
                    _this.input.nativeElement.value = _this.value;
                    _this.valueChange.emit(_this.value);
                    _this.onChange.emit(b[0].innerText);
                }
            }
        }, this.options);
        jQuery(this.dropdown.nativeElement)
            .dropdown(options);
    };
    SemanticDropdownComponent.prototype.select = function (items) {
        jQuery(this.dropdown.nativeElement)
            .dropdown('set selected', items);
    };
    SemanticDropdownComponent.prototype.clear = function () {
        this.control.setValue(null);
        jQuery(this.dropdown.nativeElement)
            .dropdown('clear');
    };
    __decorate([
        Input(), 
        __metadata('design:type', FormControl)
    ], SemanticDropdownComponent.prototype, "control", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', String)
    ], SemanticDropdownComponent.prototype, "class", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', String)
    ], SemanticDropdownComponent.prototype, "title", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', String)
    ], SemanticDropdownComponent.prototype, "icon", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', String)
    ], SemanticDropdownComponent.prototype, "arrowIcon", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', String)
    ], SemanticDropdownComponent.prototype, "name", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', Array)
    ], SemanticDropdownComponent.prototype, "items", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', Object)
    ], SemanticDropdownComponent.prototype, "options", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', Number)
    ], SemanticDropdownComponent.prototype, "value", void 0);
    __decorate([
        Output(), 
        __metadata('design:type', EventEmitter)
    ], SemanticDropdownComponent.prototype, "valueChange", void 0);
    __decorate([
        Output(), 
        __metadata('design:type', EventEmitter)
    ], SemanticDropdownComponent.prototype, "onChange", void 0);
    __decorate([
        Output(), 
        __metadata('design:type', EventEmitter)
    ], SemanticDropdownComponent.prototype, "onFocus", void 0);
    __decorate([
        Output(), 
        __metadata('design:type', EventEmitter)
    ], SemanticDropdownComponent.prototype, "onBlur", void 0);
    __decorate([
        ViewChild("dropdown"), 
        __metadata('design:type', ElementRef)
    ], SemanticDropdownComponent.prototype, "dropdown", void 0);
    __decorate([
        ViewChild("input"), 
        __metadata('design:type', ElementRef)
    ], SemanticDropdownComponent.prototype, "input", void 0);
    SemanticDropdownComponent = __decorate([
        Component({
            changeDetection: ChangeDetectionStrategy.OnPush,
            selector: "sm-dropdown",
            template: "\n    <div\n      class=\"ui {{class}} dropdown\"\n      (focus)=\"onFocus.next($event)\"\n      (blur)=\"onBlur.next($event)\"\n      #dropdown>\n        <input type=\"hidden\" name=\"{{name}}\" [formControl]=\"control\" #input>\n        <i *ngIf=\"icon\" class=\"{{icon}} icon\"></i>\n        <div *ngIf=\"title\" class=\"default text\">{{title}}</div>\n        <i class=\"{{arrowIcon}} icon\"></i>\n        <div class=\"menu\">\n            <ng-content></ng-content>\n        </div>\n    </div>\n"
        }), 
        __metadata('design:paramtypes', [])
    ], SemanticDropdownComponent);
    return SemanticDropdownComponent;
}());
