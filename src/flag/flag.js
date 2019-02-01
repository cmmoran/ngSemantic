var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
var SemanticFlagComponent = (function () {
    function SemanticFlagComponent() {
    }
    __decorate([
        Input('flag'),
        __metadata("design:type", String)
    ], SemanticFlagComponent.prototype, "flag", void 0);
    SemanticFlagComponent = __decorate([
        Component({
            changeDetection: ChangeDetectionStrategy.OnPush,
            selector: 'sm-flag',
            template: "<i class=\"{{flag}} flag\"></i>"
        })
    ], SemanticFlagComponent);
    return SemanticFlagComponent;
}());
export { SemanticFlagComponent };
