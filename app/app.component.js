"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("angular2/core");
var router_1 = require("angular2/router");
var router_2 = require("nativescript-angular/router");
var category_list_component_1 = require("./pages/category_list/category_list.component");
var gallery_component_1 = require("./pages/gallery/gallery.component");
var picture_service_1 = require("./shared/services/picture.service");
var image_cache_1 = require("./shared/services/image_cache");
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: "main",
            directives: [router_2.NS_ROUTER_DIRECTIVES],
            providers: [router_2.NS_ROUTER_PROVIDERS, picture_service_1.PictureService, image_cache_1.ImageCache],
            template: "<page-router-outlet></page-router-outlet>"
        }),
        router_1.RouteConfig([
            { path: "/category_list", component: category_list_component_1.CategoryListPage, as: "List", useAsDefault: true },
            { path: "/gallery", component: gallery_component_1.GalleryPage, as: "Gallery" }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF3QixlQUFlLENBQUMsQ0FBQTtBQUV4Qyx1QkFBMEIsaUJBQWlCLENBQUMsQ0FBQTtBQUM1Qyx1QkFBd0QsNkJBQTZCLENBQUMsQ0FBQTtBQUN0Rix3Q0FBK0IsK0NBQStDLENBQUMsQ0FBQTtBQUMvRSxrQ0FBMEIsbUNBQW1DLENBQUMsQ0FBQTtBQUM5RCxnQ0FBNkIsbUNBQW1DLENBQUMsQ0FBQTtBQUNqRSw0QkFBeUIsK0JBQStCLENBQUMsQ0FBQTtBQVl6RDtJQUFBO0lBQTRCLENBQUM7SUFWN0I7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU07WUFDaEIsVUFBVSxFQUFFLENBQUMsNkJBQW9CLENBQUM7WUFDbEMsU0FBUyxFQUFFLENBQUMsNEJBQW1CLEVBQUUsZ0NBQWMsRUFBRSx3QkFBVSxDQUFDO1lBQzVELFFBQVEsRUFBRSwyQ0FBMkM7U0FDdEQsQ0FBQztRQUNELG9CQUFXLENBQUM7WUFDWCxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRSxTQUFTLEVBQUUsMENBQWdCLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFO1lBQ3ZGLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsK0JBQVcsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFO1NBQzVELENBQUM7O29CQUFBO0lBQzBCLG1CQUFDO0FBQUQsQ0FBQyxBQUE3QixJQUE2QjtBQUFoQixvQkFBWSxlQUFJLENBQUEifQ==