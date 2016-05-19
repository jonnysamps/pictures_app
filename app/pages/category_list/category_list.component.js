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
var category_1 = require('../../shared/models/category');
var page_1 = require("ui/page");
var platform_1 = require("platform");
var application_1 = require("application");
var CategoryListPage = (function () {
    function CategoryListPage(changeDetectorRef, router, page) {
        this.changeDetectorRef = changeDetectorRef;
        this.router = router;
        this.page = page;
        this.categories = [
            new category_1.Category('', 'lion_category', 'Lions'),
            new category_1.Category('', 'tiger_category', 'Tigers'),
            new category_1.Category('', 'lion_category', 'Bears'),
            new category_1.Category('', 'lion_category', 'Elephants'),
            new category_1.Category('', 'lion_category', 'Cats'),
            new category_1.Category('', 'lion_category', 'Dogs'),
            new category_1.Category('', 'lion_category', 'Mice'),
            new category_1.Category('', 'lion_category', 'Cows'),
            new category_1.Category('', 'lion_category', 'Kangeroo'),
        ];
        this.rowHeight = 80;
        this.screen = platform_1.screen.mainScreen;
    }
    CategoryListPage.prototype.ngOnInit = function () {
        // this.page.actionBarHidden = true;
        // if (this.page.ios)
        // this.page.ios.title = '';
        // register event listener for when the orientation changes    
        application_1.on(application_1.orientationChangedEvent, this.layout, this);
        this.layout();
    };
    CategoryListPage.prototype.ngOnDestroy = function () {
        // Unregister event listener
        application_1.off(application_1.orientationChangedEvent, this.layout, this);
    };
    /**
     * For iOS this event occurs BEFORE the orientation has changed
     * For Android this event occurs AFTER
     */
    CategoryListPage.prototype.layout = function (data) {
        if (data === void 0) { data = null; }
        if (data && this.page.ios) {
            var currentOrientation = platform_1.screen.mainScreen.widthDIPs > platform_1.screen.mainScreen.heightDIPs ? 'landscape' : 'portrait';
            // Upside down not supported      
            if (data.ios._currentOrientation === 2) { }
            else if (data.newValue !== currentOrientation) {
                this.rowWidth = platform_1.screen.mainScreen.heightDIPs / 3.0;
            }
        }
        else {
            this.rowWidth = platform_1.screen.mainScreen.widthDIPs / 3.0;
        }
        // For some reason the changes affected when we get an onOrientationChangedEvent 
        // do not trigger change detection... so do it manually.
        this.changeDetectorRef.detectChanges();
    };
    CategoryListPage.prototype.goToGallery = function (category) {
        console.log("Navigating to gallery: " + category.name);
        this.router.navigate(["Gallery"]);
    };
    CategoryListPage = __decorate([
        core_1.Component({
            selector: "list",
            templateUrl: "pages/category_list/category_list.html",
            styleUrls: ["pages/category_list/category_list-common.css", "pages/category_list/category_list.css"]
        }), 
        __metadata('design:paramtypes', [core_1.ChangeDetectorRef, router_1.Router, page_1.Page])
    ], CategoryListPage);
    return CategoryListPage;
}());
exports.CategoryListPage = CategoryListPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnlfbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjYXRlZ29yeV9saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQThELGVBQWUsQ0FBQyxDQUFBO0FBQzlFLHVCQUFxQixpQkFBaUIsQ0FBQyxDQUFBO0FBQ3ZDLHlCQUF1Qiw4QkFBOEIsQ0FBQyxDQUFBO0FBQ3RELHFCQUFtQixTQUFTLENBQUMsQ0FBQTtBQUU3Qix5QkFBNEMsVUFBVSxDQUFDLENBQUE7QUFDdkQsNEJBQTRFLGFBQWEsQ0FBQyxDQUFBO0FBTzFGO0lBaUJFLDBCQUFvQixpQkFBb0MsRUFBVSxNQUFjLEVBQVUsSUFBVTtRQUFoRixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLFNBQUksR0FBSixJQUFJLENBQU07UUFoQnBHLGVBQVUsR0FBZTtZQUN2QixJQUFJLG1CQUFRLENBQUMsRUFBRSxFQUFFLGVBQWUsRUFBRSxPQUFPLENBQUM7WUFDMUMsSUFBSSxtQkFBUSxDQUFDLEVBQUUsRUFBRSxnQkFBZ0IsRUFBRSxRQUFRLENBQUM7WUFDNUMsSUFBSSxtQkFBUSxDQUFDLEVBQUUsRUFBRSxlQUFlLEVBQUUsT0FBTyxDQUFDO1lBQzFDLElBQUksbUJBQVEsQ0FBQyxFQUFFLEVBQUUsZUFBZSxFQUFFLFdBQVcsQ0FBQztZQUM5QyxJQUFJLG1CQUFRLENBQUMsRUFBRSxFQUFFLGVBQWUsRUFBRSxNQUFNLENBQUM7WUFDekMsSUFBSSxtQkFBUSxDQUFDLEVBQUUsRUFBRSxlQUFlLEVBQUUsTUFBTSxDQUFDO1lBQ3pDLElBQUksbUJBQVEsQ0FBQyxFQUFFLEVBQUUsZUFBZSxFQUFFLE1BQU0sQ0FBQztZQUN6QyxJQUFJLG1CQUFRLENBQUMsRUFBRSxFQUFFLGVBQWUsRUFBRSxNQUFNLENBQUM7WUFDekMsSUFBSSxtQkFBUSxDQUFDLEVBQUUsRUFBRSxlQUFlLEVBQUUsVUFBVSxDQUFDO1NBQzlDLENBQUE7UUFFRCxjQUFTLEdBQVcsRUFBRSxDQUFDO1FBRXZCLFdBQU0sR0FBa0IsaUJBQU0sQ0FBQyxVQUFVLENBQUM7SUFFOEQsQ0FBQztJQUV6RyxtQ0FBUSxHQUFSO1FBQ0Usb0NBQW9DO1FBRXBDLHFCQUFxQjtRQUNuQiw0QkFBNEI7UUFDOUIsK0RBQStEO1FBQy9ELGdCQUFFLENBQUMscUNBQXVCLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDaEIsQ0FBQztJQUVELHNDQUFXLEdBQVg7UUFDRSw0QkFBNEI7UUFDNUIsaUJBQUcsQ0FBQyxxQ0FBdUIsRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFRDs7O09BR0c7SUFDSCxpQ0FBTSxHQUFOLFVBQU8sSUFBd0M7UUFBeEMsb0JBQXdDLEdBQXhDLFdBQXdDO1FBQzdDLEVBQUUsQ0FBQyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDMUIsSUFBTSxrQkFBa0IsR0FBRyxpQkFBTSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsaUJBQU0sQ0FBQyxVQUFVLENBQUMsVUFBVSxHQUFHLFdBQVcsR0FBRyxVQUFVLENBQUM7WUFDakgsa0NBQWtDO1lBQ2xDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDM0MsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEtBQUssa0JBQWtCLENBQUMsQ0FBQyxDQUFDO2dCQUM5QyxJQUFJLENBQUMsUUFBUSxHQUFHLGlCQUFNLENBQUMsVUFBVSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUM7WUFDckQsQ0FBQztRQUNILENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLElBQUksQ0FBQyxRQUFRLEdBQUcsaUJBQU0sQ0FBQyxVQUFVLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQztRQUNwRCxDQUFDO1FBQ0QsaUZBQWlGO1FBQ2pGLHdEQUF3RDtRQUN4RCxJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDekMsQ0FBQztJQUVELHNDQUFXLEdBQVgsVUFBWSxRQUFrQjtRQUM1QixPQUFPLENBQUMsR0FBRyxDQUFDLDRCQUEwQixRQUFRLENBQUMsSUFBTSxDQUFDLENBQUM7UUFDdkQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUE5REg7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU07WUFDaEIsV0FBVyxFQUFFLHdDQUF3QztZQUNyRCxTQUFTLEVBQUUsQ0FBQyw4Q0FBOEMsRUFBRSx1Q0FBdUMsQ0FBQztTQUNyRyxDQUFDOzt3QkFBQTtJQTRERix1QkFBQztBQUFELENBQUMsQUEzREQsSUEyREM7QUEzRFksd0JBQWdCLG1CQTJENUIsQ0FBQSJ9