var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, ChangeDetectionStrategy, ViewChild, ElementRef, Renderer } from "@angular/core";
jQuery.fn.fixSidebar = function () {
    var allModules = jQuery(this);
    allModules
        .each(function () {
        var selector = { pusher: ".pusher" }, module = jQuery(this), context = jQuery("body");
        if (module.nextAll(selector.pusher).length === 0) {
            module.detach().prependTo(context);
        }
    });
    return this;
};
export var SemanticSidebarComponent = (function () {
    function SemanticSidebarComponent(renderer) {
        this.renderer = renderer;
    }
    SemanticSidebarComponent.prototype.show = function (options) {
        jQuery(this.sidebar.nativeElement)
            .sidebar(options || {})
            .sidebar("toggle");
    };
    SemanticSidebarComponent.prototype.hide = function () {
        jQuery(this.sidebar.nativeElement)
            .sidebar("hide");
    };
    SemanticSidebarComponent.prototype.ngOnInit = function () {
        jQuery(this.sidebar.nativeElement)
            .fixSidebar();
    };
    SemanticSidebarComponent.prototype.ngOnDestroy = function () {
        this.renderer.detachView([this.sidebar.nativeElement]);
    };
    __decorate([
        Input(), 
        __metadata('design:type', String)
    ], SemanticSidebarComponent.prototype, "class", void 0);
    __decorate([
        ViewChild("sidebar"), 
        __metadata('design:type', ElementRef)
    ], SemanticSidebarComponent.prototype, "sidebar", void 0);
    SemanticSidebarComponent = __decorate([
        Component({
            changeDetection: ChangeDetectionStrategy.OnPush,
            selector: "sm-sidebar",
            template: "<div class=\"ui sidebar {{class}}\" #sidebar>\n<ng-content></ng-content>\n</div>"
        }), 
        __metadata('design:paramtypes', [Renderer])
    ], SemanticSidebarComponent);
    return SemanticSidebarComponent;
}());
