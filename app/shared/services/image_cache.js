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
var image_cache_1 = require("ui/image-cache");
var image_source_1 = require("image-source");
var enums_1 = require("ui/enums");
var file_system_1 = require("file-system");
var ImageCache = (function () {
    function ImageCache() {
        this.cache = new image_cache_1.Cache();
        this.cache.maxRequests = 5;
        this.cache.enableDownload();
    }
    ImageCache.prototype.disableDownload = function () {
        this.cache.disableDownload();
    };
    ImageCache.prototype.enableDownload = function () {
        this.cache.enableDownload();
    };
    ImageCache.prototype.load = function (picture) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var imageSource = _this.loadLocal(picture);
            if (imageSource) {
                resolve(imageSource);
            }
            else {
                _this.download(picture)
                    .then(function (imageSource) {
                    _this.writeLocal(picture, imageSource);
                    resolve(imageSource);
                }, function (error) {
                    console.error(error);
                    reject(error);
                });
            }
        });
    };
    ImageCache.prototype.download = function (picture) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.cache.enqueue({
                key: picture.id,
                url: picture.originUrl,
                completed: function (image, key) {
                    var imgSource = image_source_1.fromNativeSource(image);
                    resolve(imgSource);
                    _this.cache.clear(); // Don't want it to cache in memory
                }
            });
        });
    };
    ImageCache.prototype.haveLocal = function (picture) {
        var temp = file_system_1.knownFolders.temp();
        var fileName = picture.id;
        return file_system_1.File.exists(this.file(picture).path);
    };
    ImageCache.prototype.loadLocal = function (picture) {
        var file = this.file(picture);
        return image_source_1.fromFile(file.path);
    };
    ImageCache.prototype.writeLocal = function (picture, imageSource) {
        imageSource.saveToFile(this.file(picture).path, enums_1.ImageFormat.png);
    };
    ImageCache.prototype.file = function (picture) {
        var temp = file_system_1.knownFolders.temp();
        var fileName = picture.id;
        var file = temp.getFile(fileName);
        return file;
    };
    ImageCache = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], ImageCache);
    return ImageCache;
}());
exports.ImageCache = ImageCache;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2VfY2FjaGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbWFnZV9jYWNoZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBQ3pDLDRCQUFvQixnQkFBZ0IsQ0FBQyxDQUFBO0FBQ3JDLDZCQUFzRCxjQUFjLENBQUMsQ0FBQTtBQUNyRSxzQkFBMEIsVUFBVSxDQUFDLENBQUE7QUFFckMsNEJBQWlDLGFBQWEsQ0FBQyxDQUFBO0FBRy9DO0lBR0U7UUFGQSxVQUFLLEdBQVUsSUFBSSxtQkFBSyxFQUFFLENBQUM7UUFHekIsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQzNCLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUVELG9DQUFlLEdBQWY7UUFDRSxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQy9CLENBQUM7SUFDRCxtQ0FBYyxHQUFkO1FBQ0UsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBRUQseUJBQUksR0FBSixVQUFLLE9BQWdCO1FBQXJCLGlCQWtCQztRQWpCQyxNQUFNLENBQUMsSUFBSSxPQUFPLENBQWMsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUM5QyxJQUFJLFdBQVcsR0FBRyxLQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzFDLEVBQUUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7Z0JBQ2hCLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUN2QixDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ04sS0FBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUM7cUJBQ25CLElBQUksQ0FDTCxVQUFDLFdBQXdCO29CQUN2QixLQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxXQUFXLENBQUMsQ0FBQztvQkFDdEMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUN2QixDQUFDLEVBQ0QsVUFBQSxLQUFLO29CQUNILE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ3JCLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDaEIsQ0FBQyxDQUFDLENBQUE7WUFDTixDQUFDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsNkJBQVEsR0FBUixVQUFTLE9BQWdCO1FBQXpCLGlCQVlDO1FBWEMsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFjLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDOUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUM7Z0JBQ2pCLEdBQUcsRUFBRSxPQUFPLENBQUMsRUFBRTtnQkFDZixHQUFHLEVBQUUsT0FBTyxDQUFDLFNBQVM7Z0JBQ3RCLFNBQVMsRUFBRSxVQUFDLEtBQUssRUFBRSxHQUFHO29CQUNwQixJQUFJLFNBQVMsR0FBRywrQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDeEMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO29CQUNuQixLQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsbUNBQW1DO2dCQUN6RCxDQUFDO2FBQ0YsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsOEJBQVMsR0FBVCxVQUFVLE9BQWdCO1FBQ3hCLElBQU0sSUFBSSxHQUFHLDBCQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDakMsSUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLEVBQUUsQ0FBQztRQUM1QixNQUFNLENBQUMsa0JBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRUQsOEJBQVMsR0FBVCxVQUFVLE9BQWdCO1FBQ3hCLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDaEMsTUFBTSxDQUFDLHVCQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFRCwrQkFBVSxHQUFWLFVBQVcsT0FBZ0IsRUFBRSxXQUF3QjtRQUNuRCxXQUFXLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLG1CQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDbkUsQ0FBQztJQUVELHlCQUFJLEdBQUosVUFBSyxPQUFnQjtRQUNuQixJQUFNLElBQUksR0FBRywwQkFBWSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2pDLElBQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyxFQUFFLENBQUM7UUFDNUIsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNwQyxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQXRFSDtRQUFDLGlCQUFVLEVBQUU7O2tCQUFBO0lBdUViLGlCQUFDO0FBQUQsQ0FBQyxBQXRFRCxJQXNFQztBQXRFWSxrQkFBVSxhQXNFdEIsQ0FBQSJ9