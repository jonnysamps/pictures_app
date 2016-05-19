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
var picture_1 = require('../../shared/models/picture');
var frame_1 = require("ui/frame");
var platform_1 = require("platform");
var application_1 = require("application");
var image_cache_1 = require('../../shared/services/image_cache');
var PictureComponent = (function () {
    function PictureComponent(changeDetectorRef, imageCache) {
        this.changeDetectorRef = changeDetectorRef;
        this.imageCache = imageCache;
        this.id = ++PictureComponent.count;
        this.showImage = false;
        this.screen = platform_1.screen.mainScreen;
        this.dimensions = {
            width: this.screen.widthDIPs,
            height: this.screen.heightDIPs,
        };
    }
    PictureComponent.prototype.loadImageIfNeeded = function () {
        var _this = this;
        if (this.showImage) {
            this.imageCache.load(this.picture)
                .then(function (imageSource) {
                _this.imageSource = imageSource;
                console.log(_this.id + " - image loaded: " + _this.picture.id);
            });
        }
    };
    Object.defineProperty(PictureComponent.prototype, "pic", {
        set: function (pic) {
            this.picture = pic;
            this.imageSource = null;
            this.loadImageIfNeeded();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PictureComponent.prototype, "show", {
        set: function (val) {
            var _this = this;
            this.showImage = val;
            if (!this.showImage) {
                // this is necessary because this method is invoked by change-detection.
                setTimeout(function () { _this.imageSource = null; }, 0);
            }
            else {
                this.loadImageIfNeeded();
            }
        },
        enumerable: true,
        configurable: true
    });
    PictureComponent.prototype.ngOnInit = function () {
        this.frame = frame_1.topmost();
        application_1.on(application_1.orientationChangedEvent, this.layout, this);
        this.layout();
    };
    PictureComponent.prototype.ngOnDestroy = function () {
        application_1.off(application_1.orientationChangedEvent, this.layout, this);
    };
    Object.defineProperty(PictureComponent.prototype, "page", {
        get: function () {
            return this.frame.currentPage;
        },
        enumerable: true,
        configurable: true
    });
    PictureComponent.prototype.layout = function (data) {
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
    PictureComponent.count = 0;
    __decorate([
        core_1.Input(), 
        __metadata('design:type', picture_1.Picture), 
        __metadata('design:paramtypes', [picture_1.Picture])
    ], PictureComponent.prototype, "pic", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean), 
        __metadata('design:paramtypes', [Boolean])
    ], PictureComponent.prototype, "show", null);
    PictureComponent = __decorate([
        core_1.Component({
            selector: "picture",
            templateUrl: "components/picture/picture.html",
            styleUrls: ["components/picture/picture.css"]
        }), 
        __metadata('design:paramtypes', [core_1.ChangeDetectorRef, image_cache_1.ImageCache])
    ], PictureComponent);
    return PictureComponent;
}());
exports.PictureComponent = PictureComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGljdHVyZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwaWN0dXJlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXFFLGVBQWUsQ0FBQyxDQUFBO0FBQ3JGLHdCQUFzQiw2QkFBNkIsQ0FBQyxDQUFBO0FBRXBELHNCQUE2QixVQUFVLENBQUMsQ0FBQTtBQUV4Qyx5QkFBNEMsVUFBVSxDQUFDLENBQUE7QUFDdkQsNEJBQTRFLGFBQWEsQ0FBQyxDQUFBO0FBQzFGLDRCQUF5QixtQ0FBbUMsQ0FBQyxDQUFBO0FBUTdEO0lBYUUsMEJBQ1UsaUJBQW9DLEVBQ3BDLFVBQXNCO1FBRHRCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDcEMsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQWJoQyxPQUFFLEdBQVcsRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7UUFFdEMsY0FBUyxHQUFZLEtBQUssQ0FBQztRQUczQixXQUFNLEdBQWtCLGlCQUFNLENBQUMsVUFBVSxDQUFDO1FBQzFDLGVBQVUsR0FBRztZQUNYLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVM7WUFDNUIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVTtTQUMvQixDQUFDO0lBS0UsQ0FBQztJQUVMLDRDQUFpQixHQUFqQjtRQUFBLGlCQVFDO1FBUEMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDbkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztpQkFDL0IsSUFBSSxDQUFDLFVBQUMsV0FBd0I7Z0JBQzdCLEtBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO2dCQUMvQixPQUFPLENBQUMsR0FBRyxDQUFJLEtBQUksQ0FBQyxFQUFFLHlCQUFvQixLQUFJLENBQUMsT0FBTyxDQUFDLEVBQUksQ0FBQyxDQUFD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