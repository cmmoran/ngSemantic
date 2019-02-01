var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, ViewChild, ChangeDetectionStrategy, ElementRef, EventEmitter, Output } from '@angular/core';
var SemanticRatingComponent = (function () {
    function SemanticRatingComponent() {
        this.onRate = new EventEmitter();
    }
    SemanticRatingComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        jQuery(this.rating.nativeElement)
            .rating({
            initialRating: this.initialRating || 0,
            maxRating: this.maxRating || 5,
            onRate: function (value) {
                _this.onRate.emit(value);
            }
        });
    };
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], SemanticRatingComponent.prototype, "class", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], SemanticRatingComponent.prototype, "initialRating", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], SemanticRatingComponent.prototype, "maxRating", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], SemanticRatingComponent.prototype, "onRate", void 0);
    __decorate([
        ViewChild('rating'),
        __metadata("design:type", ElementRef)
    ], SemanticRatingComponent.prototype, "rating", void 0);
    SemanticRatingComponent = __decorate([
        Component({
            changeDetection: ChangeDetectionStrategy.OnPush,
            selector: 'sm-rating',
            template: "<div class=\"ui {{class}} rating\" #rating></div>"
        })
    ], SemanticRatingComponent);
    return SemanticRatingComponent;
}());
export { SemanticRatingComponent };
