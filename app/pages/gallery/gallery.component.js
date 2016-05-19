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
var picture_service_1 = require('../../shared/services/picture.service');
var page_1 = require("ui/page");
var frame_1 = require("ui/frame");
var platform_1 = require("platform");
var application_1 = require("application");
var buffer_1 = require("../../shared/models/buffer");
var picture_component_1 = require("../../components/picture/picture.component");
var NUM_TO_LOAD = 5;
var LOAD_MARGIN = 2;
var SCROLL_SETTLE_PERIOD = 50;
var GalleryPage = (function () {
    function GalleryPage(changeDetectorRef, router, pictureService, page) {
        this.changeDetectorRef = changeDetectorRef;
        this.router = router;
        this.pictureService = pictureService;
        this.page = page;
        this.pageNum = 0;
        this.bufferIndex = 0;
        this.screen = platform_1.screen.mainScreen;
        this.loadedRange = { min: 0, max: 0 };
        this.buffer = new buffer_1.Buffer(NUM_TO_LOAD);
        this.dimensions = {
            width: this.screen.widthDIPs,
            height: this.screen.heightDIPs,
        };
        this.categoryName = 'Lions';
    }
    GalleryPage.prototype.ngOnInit = function () {
        this.frame = frame_1.topmost();
        this.pictures = this.pictureService.byCategory('lions');
        for (var i = 0; i < NUM_TO_LOAD; i++) {
            this.buffer.append(this.pictures[i]);
        }
        if (this.page.ios)
            this.iosInit();
        else
            this.androidInit();
        this.pageNumber = 0;
        this.changeDetectorRef.detectChanges();
        application_1.on(application_1.orientationChangedEvent, this.layout, this);
        this.layout();
    };
    GalleryPage.prototype.ngOnDestroy = function () {
        application_1.off(application_1.orientationChangedEvent, this.layout, this);
    };
    GalleryPage.prototype.iosInit = function () {
    };
    GalleryPage.prototype.layout = function (data) {
        if (data === void 0) { data = null; }
        if (data && this.page.ios) {
            var currentOrientation = this.screen.widthDIPs > this.screen.heightDIPs ? 'landscape' : 'portrait';
            // Upside down not supported      
            if (data.ios._currentOrientation === 2) { }
            else if (data.newValue !== currentOrientation) {
                this.dimensions.width = this.screen.heightDIPs;
                this.dimensions.height = this.screen.widthDIPs;
            }
        }
        else {
            this.dimensions.width = this.screen.widthDIPs;
            this.dimensions.height = this.screen.heightDIPs;
        }
        // For some reason the changes affected when we get an onOrientationChangedEvent 
        // do not trigger change detection... so do it manually.
        this.changeDetectorRef.detectChanges();
    };
    GalleryPage.prototype.androidInit = function () {
    };
    GalleryPage.prototype.didScroll = function (data) {
        var newBufferIndex = Math.round(data.scrollX / this.dimensions.width);
        if (newBufferIndex !== this.bufferIndex) {
            this.pageNumber += newBufferIndex - this.bufferIndex;
        }
    };
    Object.defineProperty(GalleryPage.prototype, "pageNumber", {
        set: function (newPageNum) {
            if (newPageNum > this.pageNum) {
                var nextIndexToLoad = newPageNum + LOAD_MARGIN;
                var nextBufferIndex = newPageNum + LOAD_MARGIN;
                if (nextBufferIndex >= this.buffer.length && nextIndexToLoad < this.pictures.length) {
                    this.buffer.append(this.pictures[nextIndexToLoad]);
                }
            }
            else if (newPageNum === this.pageNum) {
            }
            else {
                var nextIndexToLoad = newPageNum - LOAD_MARGIN;
                var nextBufferIndex = this.bufferIndex - LOAD_MARGIN;
                if (nextBufferIndex < 0 && nextIndexToLoad >= 0) {
                    this.buffer.prepend(this.pictures[nextIndexToLoad]);
                }
            }
            this.bufferIndex += newPageNum - this.pageNum;
            this.pageNum = newPageNum;
            console.log("Page: " + this.pageNum);
        },
        enumerable: true,
        configurable: true
    });
    GalleryPage.prototype.centerScrollView = function () {
        var scrollView = this.page.getViewById('sv');
        scrollView.scrollToHorizontalOffset(scrollView.horizontalOffset - this.dimensions.width, false);
    };
    GalleryPage.prototype.calcLoadedRange = function () {
        var min = this.pageNum < LOAD_MARGIN ? 0 : this.pageNum - LOAD_MARGIN;
        var max = this.pageNum > this.pictures.length - LOAD_MARGIN - 1 ? this.pictures.length - 1 : this.pageNum + LOAD_MARGIN;
        var result = { min: min, max: max };
        return result;
    };
    GalleryPage = __decorate([
        core_1.Component({
            selector: "gallery",
            templateUrl: "pages/gallery/gallery.html",
            styleUrls: ["pages/gallery/gallery.css"],
            directives: [picture_component_1.PictureComponent]
        }), 
        __metadata('design:paramtypes', [core_1.ChangeDetectorRef, router_1.Router, picture_service_1.PictureService, page_1.Page])
    ], GalleryPage);
    return GalleryPage;
}());
exports.GalleryPage = GalleryPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJnYWxsZXJ5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQThELGVBQWUsQ0FBQyxDQUFBO0FBQzlFLHVCQUFxQixpQkFBaUIsQ0FBQyxDQUFBO0FBRXZDLGdDQUE2Qix1Q0FBdUMsQ0FBQyxDQUFBO0FBQ3JFLHFCQUFtQixTQUFTLENBQUMsQ0FBQTtBQUM3QixzQkFBNkIsVUFBVSxDQUFDLENBQUE7QUFDeEMseUJBQTRDLFVBQVUsQ0FBQyxDQUFBO0FBQ3ZELDRCQUE0RSxhQUFhLENBQUMsQ0FBQTtBQUkxRix1QkFBcUIsNEJBQTRCLENBQUMsQ0FBQTtBQUNsRCxrQ0FBK0IsNENBQTRDLENBQUMsQ0FBQTtBQUU1RSxJQUFNLFdBQVcsR0FBRyxDQUFDLENBQUM7QUFDdEIsSUFBTSxXQUFXLEdBQUcsQ0FBQyxDQUFDO0FBQ3RCLElBQU0sb0JBQW9CLEdBQUcsRUFBRSxDQUFDO0FBUWhDO0lBZUUscUJBQ1UsaUJBQW9DLEVBQ3BDLE1BQWMsRUFDZCxjQUE4QixFQUM5QixJQUFVO1FBSFYsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUNwQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLFNBQUksR0FBSixJQUFJLENBQU07UUFqQnBCLFlBQU8sR0FBVyxDQUFDLENBQUM7UUFDcEIsZ0JBQVcsR0FBVyxDQUFDLENBQUM7UUFFeEIsV0FBTSxHQUFrQixpQkFBTSxDQUFDLFVBQVUsQ0FBQztRQUMxQyxnQkFBVyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUM7UUFDakMsV0FBTSxHQUFvQixJQUFJLGVBQU0sQ0FBVSxXQUFXLENBQUMsQ0FBQztRQUMzRCxlQUFVLEdBQUc7WUFDWCxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0s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