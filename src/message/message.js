var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, ChangeDetectionStrategy, ViewEncapsulation, ViewChild, ElementRef, Renderer } from "@angular/core";
export var SemanticMessageComponent = (function () {
    function SemanticMessageComponent(renderer) {
        this.renderer = renderer;
    }
    SemanticMessageComponent.prototype.close = function () {
        this.renderer.detachView([this.message.nativeElement]);
    };
    __decorate([
        Input(), 
        __metadata('design:type', String)
    ], SemanticMessageComponent.prototype, "icon", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', String)
    ], SemanticMessageComponent.prototype, "class", void 0);
    __decorate([
        ViewChild("message"), 
        __metadata('design:type', ElementRef)
    ], SemanticMessageComponent.prototype, "message", void 0);
    SemanticMessageComponent = __decorate([
        Component({
            changeDetection: ChangeDetectionStrategy.OnPush,
            encapsulation: ViewEncapsulation.None,
            selector: "sm-message",
            styles: ["sm-message { display: block; margin: 1em 0; } message-header {display: block}"],
            template: "<div class=\"ui message {{class}}\" [ngClass]=\"{'icon': icon}\" #message>\n<i class=\"close icon\" (click)=\"close()\"></i>\n<i *ngIf=\"icon\" class=\"icon {{icon}}\"></i>\n  <div class=\"content\">\n    <div class=\"header\">\n      <ng-content select=\"message-header\"></ng-content>\n    </div>\n    <ng-content select=\"message-content\"></ng-content>\n  </div>\n</div>"
        }), 
        __metadata('design:paramtypes', [Renderer])
    ], SemanticMessageComponent);
    return SemanticMessageComponent;
}());
