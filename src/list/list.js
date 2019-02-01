var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, ChangeDetectionStrategy, ViewChild, ElementRef } from '@angular/core';
var SemanticListComponent = (function () {
    function SemanticListComponent() {
    }
    SemanticListComponent.prototype.ngAfterViewInit = function () {
        Array.from(this.innerElement.nativeElement.childNodes)
            .filter(function (element) { return element.nodeName === 'SM-LIST'; })
            .map(function (element) { return element.firstElementChild.classList.remove('ui'); });
    };
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], SemanticListComponent.prototype, "class", void 0);
    __decorate([
        ViewChild('innerElement'),
        __metadata("design:type", ElementRef)
    ], SemanticListComponent.prototype, "innerElement", void 0);
    SemanticListComponent = __decorate([
        Component({
            changeDetection: ChangeDetectionStrategy.OnPush,
            selector: 'sm-list',
            template: "\n<div class=\"ui list {{class}}\" #innerElement>\n<ng-content></ng-content>\n</div>\n"
        })
    ], SemanticListComponent);
    return SemanticListComponent;
}());
export { SemanticListComponent };
