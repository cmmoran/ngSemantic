var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ChangeDetectionStrategy, Input, ElementRef, ViewChild } from '@angular/core';
var SemanticAccordionComponent = (function () {
    function SemanticAccordionComponent() {
    }
    SemanticAccordionComponent.prototype.ngAfterViewInit = function () {
        var inAccordion = this.inAccordion(this.accordion.nativeElement, 'accordion');
        if (inAccordion) {
            this.accordion.nativeElement.classList.remove('ui');
            jQuery(inAccordion).accordion(this.options || {});
        }
        else {
            jQuery(this.accordion.nativeElement).accordion(this.options || {});
        }
    };
    SemanticAccordionComponent.prototype.inAccordion = function (el, className) {
        if (el.parentNode) {
            if (el.parentNode.classList && el.parentNode.classList.contains(className)) {
                return el.parentNode;
            }
            else {
                return this.inAccordion(el.parentNode, className);
            }
        }
        else {
            return false;
        }
    };
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], SemanticAccordionComponent.prototype, "class", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], SemanticAccordionComponent.prototype, "options", void 0);
    __decorate([
        ViewChild('accordion'),
        __metadata("design:type", ElementRef)
    ], SemanticAccordionComponent.prototype, "accordion", void 0);
    SemanticAccordionComponent = __decorate([
        Component({
            changeDetection: ChangeDetectionStrategy.OnPush,
            selector: 'sm-accordion',
            styles: ["sm-accordion sm-accordion-item:first-child .title { border-top: none !important; }"],
            template: "\n<div class=\"ui accordion {{class}}\" #accordion>\n    <ng-content></ng-content>\n</div>\n"
        })
    ], SemanticAccordionComponent);
    return SemanticAccordionComponent;
}());
export { SemanticAccordionComponent };
var SemanticAccordionItemComponent = (function () {
    function SemanticAccordionItemComponent() {
    }
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], SemanticAccordionItemComponent.prototype, "class", void 0);
    SemanticAccordionItemComponent = __decorate([
        Component({
            changeDetection: ChangeDetectionStrategy.OnPush,
            selector: 'sm-accordion-item',
            template: "\n<div class='{{class}} title'>\n    <i class='dropdown icon'></i>\n    <ng-content select='accordion-title'></ng-content>\n</div>\n<div class='{{class}} content'>\n    <ng-content select='accordion-content'></ng-content>\n</div>\n"
        })
    ], SemanticAccordionItemComponent);
    return SemanticAccordionItemComponent;
}());
export { SemanticAccordionItemComponent };
