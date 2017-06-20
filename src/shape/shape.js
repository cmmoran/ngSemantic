var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ChangeDetectionStrategy, ViewChild, ElementRef, Input, Output, EventEmitter } from "@angular/core";
export var SemanticShapeComponent = (function () {
    function SemanticShapeComponent() {
        this.options = {};
        this.beforeChange = new EventEmitter();
        this.onChange = new EventEmitter();
    }
    SemanticShapeComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.options = Object.assign({
            beforeChange: function () { return _this.beforeChange.emit(true); },
            onChange: function () { return _this.onChange.emit(true); }
        }, this.options);
    };
    SemanticShapeComponent.prototype.show = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        jQuery(this.shape.nativeElement)
            .shape(this.options)
            .shape(args.join(","));
    };
    __decorate([
        Input(), 
        __metadata('design:type', String)
    ], SemanticShapeComponent.prototype, "class", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', Object)
    ], SemanticShapeComponent.prototype, "options", void 0);
    __decorate([
        Output(), 
        __metadata('design:type', EventEmitter)
    ], SemanticShapeComponent.prototype, "beforeChange", void 0);
    __decorate([
        Output(), 
        __metadata('design:type', EventEmitter)
    ], SemanticShapeComponent.prototype, "onChange", void 0);
    __decorate([
        ViewChild("shape"), 
        __metadata('design:type', ElementRef)
    ], SemanticShapeComponent.prototype, "shape", void 0);
    SemanticShapeComponent = __decorate([
        Component({
            changeDetection: ChangeDetectionStrategy.OnPush,
            selector: "sm-shape",
            template: "\n    <div #shape class=\"ui shape {{class}}\">\n        <ng-content></ng-content>\n    </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], SemanticShapeComponent);
    return SemanticShapeComponent;
}());
