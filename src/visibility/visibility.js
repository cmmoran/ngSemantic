var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Directive, ViewContainerRef, Input, Output, EventEmitter } from '@angular/core';
var SMVisibilityDirective = (function () {
    function SMVisibilityDirective(element) {
        this.element = element;
        this.onTopVisible = new EventEmitter();
        this.onTopPassed = new EventEmitter();
        this.onUpdate = new EventEmitter();
    }
    SMVisibilityDirective.prototype.ngOnInit = function () {
        var _this = this;
        if (this.element.element.nativeElement) {
            jQuery(this.element.element.nativeElement)
                .visibility({
                onTopPassed: function (calculations) { return _this.onTopPassed.emit(calculations); },
                onTopVisible: function (calculations) { return _this.onTopVisible.emit(calculations); },
                onUpdate: function (calculations) { return _this.onUpdate.emit(calculations); },
            });
        }
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], SMVisibilityDirective.prototype, "smDirVisibility", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], SMVisibilityDirective.prototype, "onTopVisible", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], SMVisibilityDirective.prototype, "onTopPassed", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], SMVisibilityDirective.prototype, "onUpdate", void 0);
    SMVisibilityDirective = __decorate([
        Directive({
            selector: '[smDirVisibility]'
        }),
        __metadata("design:paramtypes", [ViewContainerRef])
    ], SMVisibilityDirective);
    return SMVisibilityDirective;
}());
export { SMVisibilityDirective };
var SMDeviceVisibilityDirective = (function () {
    function SMDeviceVisibilityDirective(element) {
        this.element = element;
    }
    SMDeviceVisibilityDirective.prototype.ngOnInit = function () {
        var _a;
        (_a = this.element.element.nativeElement.classList).add.apply(_a, this.smDeviceVisibility.split(' '));
    };
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], SMDeviceVisibilityDirective.prototype, "smDeviceVisibility", void 0);
    SMDeviceVisibilityDirective = __decorate([
        Directive({
            selector: '[smDeviceVisibility]'
        }),
        __metadata("design:paramtypes", [ViewContainerRef])
    ], SMDeviceVisibilityDirective);
    return SMDeviceVisibilityDirective;
}());
export { SMDeviceVisibilityDirective };
