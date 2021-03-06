var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ContentChildren, ElementRef, Input, QueryList, ViewChild } from '@angular/core';
import { debounceTime } from 'rxjs/operators';
var SemanticTabComponent = (function () {
    function SemanticTabComponent() {
    }
    SemanticTabComponent.prototype.ngAfterViewInit = function () {
        jQuery(this.tabEl.nativeElement).parent().addClass('ui tab bottom attached segment');
        if (this.active) {
            jQuery(this.tabEl.nativeElement).parent().addClass('active');
        }
    };
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], SemanticTabComponent.prototype, "tab", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], SemanticTabComponent.prototype, "title", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], SemanticTabComponent.prototype, "active", void 0);
    __decorate([
        ViewChild('tab'),
        __metadata("design:type", ElementRef)
    ], SemanticTabComponent.prototype, "tabEl", void 0);
    SemanticTabComponent = __decorate([
        Component({
            selector: 'sm-tab',
            template: "\n<div #tab>\n    <ng-content></ng-content>\n</div>  "
        })
    ], SemanticTabComponent);
    return SemanticTabComponent;
}());
export { SemanticTabComponent };
var SemanticTabsComponent = (function () {
    function SemanticTabsComponent(elementRef) {
        this.elementRef = elementRef;
        this.options = {};
    }
    SemanticTabsComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.initItemsIndices();
        this.initTabs();
        this.updateTabContentIndices();
        this.tabs
            .changes.pipe(debounceTime(100))
            .subscribe(function () {
            _this.initItemsIndices();
            _this.updateTabContentIndices();
        });
    };
    SemanticTabsComponent.prototype.initItemsIndices = function () {
        Array
            .from(this.menu.nativeElement.getElementsByClassName('item'))
            .map(function (element, index) {
            element.setAttribute('data-tab', "tab-" + index);
            jQuery(element).data('tab', "tab-" + index);
        });
    };
    SemanticTabsComponent.prototype.updateTabContentIndices = function () {
        this.tabs
            .map(function (cmp, index) {
            cmp.tabEl.nativeElement.parentElement.setAttribute('data-tab', "tab-" + index.toString());
        });
        this.initTabs();
    };
    SemanticTabsComponent.prototype.initTabs = function () {
        this.options = Object.assign({
            childrenOnly: true,
            context: this.elementRef.nativeElement
        }, this.options);
        var tab = jQuery(this.menu.nativeElement.getElementsByClassName('item'))
            .tab(this.options);
        if (!this.menu.nativeElement.getElementsByClassName('item active').length) {
            tab.tab('change tab', 'tab-0');
        }
    };
    __decorate([
        ContentChildren(SemanticTabComponent),
        __metadata("design:type", QueryList)
    ], SemanticTabsComponent.prototype, "tabs", void 0);
    __decorate([
        ViewChild('menu'),
        __metadata("design:type", ElementRef)
    ], SemanticTabsComponent.prototype, "menu", void 0);
    __decorate([
        Input('options'),
        __metadata("design:type", Object)
    ], SemanticTabsComponent.prototype, "options", void 0);
    SemanticTabsComponent = __decorate([
        Component({
            selector: 'sm-tabs',
            template: "<div class=\"ui top attached tabular menu\" #menu>\n  <a class=\"item\" [ngClass]=\"{'active': tab.active}\" *ngFor=\"let tab of tabs\">{{tab.title}}</a>\n</div>\n<ng-content></ng-content>\n"
        }),
        __metadata("design:paramtypes", [ElementRef])
    ], SemanticTabsComponent);
    return SemanticTabsComponent;
}());
export { SemanticTabsComponent };
