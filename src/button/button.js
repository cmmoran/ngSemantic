var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
var SemanticButtonComponent = (function () {
    function SemanticButtonComponent() {
        this.disabled = false;
    }
    __decorate([
        Input('class'),
        __metadata("design:type", String)
    ], SemanticButtonComponent.prototype, "class", void 0);
    __decorate([
        Input('icon'),
        __metadata("design:type", String)
    ], SemanticButtonComponent.prototype, "icon", void 0);
    __decorate([
        Input('disabled'),
        __metadata("design:type", Boolean)
    ], SemanticButtonComponent.prototype, "disabled", void 0);
    SemanticButtonComponent = __decorate([
        Component({
            changeDetection: ChangeDetectionStrategy.OnPush,
            selector: 'sm-button',
            template: "<button [ngClass]=\"{icon: icon}\" [attr.disabled]=\"disabled ? true : null\" class=\"ui {{class}} button\">\n      <i *ngIf=\"icon\" class=\"{{icon}} icon\"></i>\n    <ng-content></ng-content>\n</button>"
        })
    ], SemanticButtonComponent);
    return SemanticButtonComponent;
}());
export { SemanticButtonComponent };
