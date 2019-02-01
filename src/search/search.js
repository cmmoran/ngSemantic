var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
var SemanticSearchComponent = (function () {
    function SemanticSearchComponent() {
        this.debounce = 0;
        this.onSearch = new EventEmitter();
        this.searchControl = new FormControl();
    }
    SemanticSearchComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.searchControl
            .valueChanges
            .pipe(distinctUntilChanged(), debounceTime(this.debounce))
            .subscribe(function (data) { return _this.onSearch.emit(data); });
    };
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], SemanticSearchComponent.prototype, "class", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], SemanticSearchComponent.prototype, "icon", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], SemanticSearchComponent.prototype, "loading", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], SemanticSearchComponent.prototype, "debounce", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], SemanticSearchComponent.prototype, "placeholder", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], SemanticSearchComponent.prototype, "onSearch", void 0);
    SemanticSearchComponent = __decorate([
        Component({
            changeDetection: ChangeDetectionStrategy.OnPush,
            selector: 'sm-search',
            template: "<div class=\"ui search\" [ngClass]=\"{'loading': loading}\">\n      <div class=\"ui icon input {{class}} \">\n          <input class=\"prompt\" [formControl]=\"searchControl\" type=\"text\" [attr.placeholder]=\"placeholder\">\n          <i *ngIf=\"icon\" class=\"search icon\"></i>\n      </div>\n      <div class=\"results\"></div>\n  </div>"
        })
    ], SemanticSearchComponent);
    return SemanticSearchComponent;
}());
export { SemanticSearchComponent };
