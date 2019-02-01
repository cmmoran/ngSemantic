var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, ChangeDetectionStrategy, Output, ViewContainerRef, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
var SemanticInputComponent = (function () {
    function SemanticInputComponent(viewRef) {
        this.viewRef = viewRef;
        this.type = 'text';
        this.control = new FormControl();
        this.modelChange = new EventEmitter();
        this.isInsideForm = false;
    }
    SemanticInputComponent.prototype.ngOnInit = function () {
        if (this.inForm(this.viewRef.element.nativeElement, 'form')) {
            this.isInsideForm = true;
        }
    };
    SemanticInputComponent.prototype.inForm = function (el, classname) {
        if (el.parentNode) {
            if (el.parentNode.nodeName.toLowerCase() === classname.toLowerCase()) {
                return !!el.parentNode;
            }
            else {
                return this.inForm(el.parentNode, classname);
            }
        }
        else {
            return false;
        }
    };
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], SemanticInputComponent.prototype, "label", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], SemanticInputComponent.prototype, "class", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], SemanticInputComponent.prototype, "icon", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], SemanticInputComponent.prototype, "type", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], SemanticInputComponent.prototype, "placeholder", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], SemanticInputComponent.prototype, "model", void 0);
    __decorate([
        Input(),
        __metadata("design:type", FormControl)
    ], SemanticInputComponent.prototype, "control", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], SemanticInputComponent.prototype, "modelChange", void 0);
    SemanticInputComponent = __decorate([
        Component({
            selector: 'sm-input',
            template: "<div class=\"field\" [ngClass]=\"{error: (!control.valid && control.dirty && isInsideForm) }\">\n  <label *ngIf=\"label && isInsideForm\">{{label}}</label>\n  <div class=\"ui input {{class}}\" [ngClass]=\"{'icon': icon, 'error': (!control.valid && control.dirty &&!isInsideForm)}\">\n  <label *ngIf=\"label && !isInsideForm\" class=\"ui label\">{{label}}</label>\n  <input [type]=\"type\" [formControl]=\"control\" (keyup)=\"modelChange.emit(input.value)\" #input placeholder=\"{{placeholder}}\">\n  <i *ngIf=\"icon\" class=\"{{icon}} icon\"></i>\n</div>\n</div>"
        }),
        __metadata("design:paramtypes", [ViewContainerRef])
    ], SemanticInputComponent);
    return SemanticInputComponent;
}());
export { SemanticInputComponent };
var SemanticCheckboxComponent = (function () {
    function SemanticCheckboxComponent() {
        this.control = new FormControl();
        this.inputType = 'checkbox';
        this.classType = 'checkbox';
    }
    Object.defineProperty(SemanticCheckboxComponent.prototype, "type", {
        set: function (data) {
            if (data && data !== 'checkbox') {
                this.classType = data;
                if (data === 'radio') {
                    this.inputType = data;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Input(),
        __metadata("design:type", FormControl)
    ], SemanticCheckboxComponent.prototype, "control", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], SemanticCheckboxComponent.prototype, "label", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], SemanticCheckboxComponent.prototype, "disabled", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], SemanticCheckboxComponent.prototype, "value", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], SemanticCheckboxComponent.prototype, "name", void 0);
    __decorate([
        Input('type'),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], SemanticCheckboxComponent.prototype, "type", null);
    SemanticCheckboxComponent = __decorate([
        Component({
            changeDetection: ChangeDetectionStrategy.OnPush,
            selector: 'sm-checkbox',
            template: "<div class=\"field\" [ngClass]=\"{error: (!control.value && control?.validator) }\">\n    <div class=\"ui {{classType}} checkbox\">\n      <input type=\"checkbox\" \n      [attr.value]=\"value\"\n      [attr.type]=\"inputType\" tabindex=\"0\" [attr.name]=\"name\" [formControl]=\"control\" [attr.disabled]=\"disabled\">\n      <label *ngIf=\"label\">{{label}}</label>\n    </div>\n  </div>"
        })
    ], SemanticCheckboxComponent);
    return SemanticCheckboxComponent;
}());
export { SemanticCheckboxComponent };
var SemanticTextareaComponent = (function () {
    function SemanticTextareaComponent() {
        this.control = new FormControl();
    }
    __decorate([
        Input(),
        __metadata("design:type", FormControl)
    ], SemanticTextareaComponent.prototype, "control", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], SemanticTextareaComponent.prototype, "label", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], SemanticTextareaComponent.prototype, "rows", void 0);
    SemanticTextareaComponent = __decorate([
        Component({
            changeDetection: ChangeDetectionStrategy.OnPush,
            selector: 'sm-textarea',
            template: "<div class=\"field\" [ngClass]=\"{error: (!control.valid && control.dirty) }\">\n    <label *ngIf=\"label\">{{label}}</label>\n    <textarea rows=\"{{rows}}\" [formControl]=\"control\"></textarea>\n  </div>"
        })
    ], SemanticTextareaComponent);
    return SemanticTextareaComponent;
}());
export { SemanticTextareaComponent };
