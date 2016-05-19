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
var picture_1 = require("../models/picture");
var PictureService = (function () {
    function PictureService() {
        this.categoryMap = {
            lions: [
                new picture_1.Picture('1', 'http://kids.nationalgeographic.com/content/dam/kids/photos/articles/Nature/Q-Z/10%20Cool%20Things%20about%20Lions/cool-things-lions-9.jpg', 1600, 1067),
                new picture_1.Picture('2', 'http://kids.nationalgeographic.com/content/dam/kids/photos/animals/Mammals/H-P/lion-male-roar.jpg', 1600, 900),
                new picture_1.Picture('3', 'http://www.awf.org/sites/default/files/media/gallery/wildlife/Lion/Federico_Veronesi_2009-01-28%20Masai%20Mara_4728.jpg?itok=96CysP6Y', 1000, 665),
                new picture_1.Picture('4', 'http://www.awf.org/sites/default/files/media/gallery/wildlife/Lion/lion_Theodore_mattis.jpg?itok=lAT56K6j', 892, 727),
                new picture_1.Picture('5', 'http://cbs.umn.edu/sites/cbs.umn.edu/files/public/african_lion_king-wide_1.jpg', 1920, 1200),
                new picture_1.Picture('6', 'http://kids.nationalgeographic.com/content/dam/kids/photos/articles/Nature/Q-Z/10%20Cool%20Things%20about%20Lions/cool-things-lions-9.jpg', 1600, 1067),
                new picture_1.Picture('7', 'http://kids.nationalgeographic.com/content/dam/kids/photos/animals/Mammals/H-P/lion-male-roar.jpg', 1600, 900),
                new picture_1.Picture('8', 'http://www.awf.org/sites/default/files/media/gallery/wildlife/Lion/Federico_Veronesi_2009-01-28%20Masai%20Mara_4728.jpg?itok=96CysP6Y', 1000, 665),
                new picture_1.Picture('9', 'http://www.awf.org/sites/default/files/media/gallery/wildlife/Lion/lion_Theodore_mattis.jpg?itok=lAT56K6j', 892, 727),
                new picture_1.Picture('10', 'http://cbs.umn.edu/sites/cbs.umn.edu/files/public/african_lion_king-wide_1.jpg', 1920, 1200),
                new picture_1.Picture('11', 'http://kids.nationalgeographic.com/content/dam/kids/photos/articles/Nature/Q-Z/10%20Cool%20Things%20about%20Lions/cool-things-lions-9.jpg', 1600, 1067),
                new picture_1.Picture('12', 'http://kids.nationalgeographic.com/content/dam/kids/photos/animals/Mammals/H-P/lion-male-roar.jpg', 1600, 900),
                new picture_1.Picture('13', 'http://www.awf.org/sites/default/files/media/gallery/wildlife/Lion/Federico_Veronesi_2009-01-28%20Masai%20Mara_4728.jpg?itok=96CysP6Y', 1000, 665),
                new picture_1.Picture('14', 'http://www.awf.org/sites/default/files/media/gallery/wildlife/Lion/lion_Theodore_mattis.jpg?itok=lAT56K6j', 892, 727),
                new picture_1.Picture('15', 'http://cbs.umn.edu/sites/cbs.umn.edu/files/public/african_lion_king-wide_1.jpg', 1920, 1200),
                new picture_1.Picture('16', 'http://kids.nationalgeographic.com/content/dam/kids/photos/articles/Nature/Q-Z/10%20Cool%20Things%20about%20Lions/cool-things-lions-9.jpg', 1600, 1067),
                new picture_1.Picture('17', 'http://kids.nationalgeographic.com/content/dam/kids/photos/animals/Mammals/H-P/lion-male-roar.jpg', 1600, 900),
                new picture_1.Picture('18', 'http://www.awf.org/sites/default/files/media/gallery/wildlife/Lion/Federico_Veronesi_2009-01-28%20Masai%20Mara_4728.jpg?itok=96CysP6Y', 1000, 665),
                new picture_1.Picture('19', 'http://www.awf.org/sites/default/files/media/gallery/wildlife/Lion/lion_Theodore_mattis.jpg?itok=lAT56K6j', 892, 727),
                new picture_1.Picture('20', 'http://cbs.umn.edu/sites/cbs.umn.edu/files/public/african_lion_king-wide_1.jpg', 1920, 1200),
                new picture_1.Picture('21', 'http://kids.nationalgeographic.com/content/dam/kids/photos/articles/Nature/Q-Z/10%20Cool%20Things%20about%20Lions/cool-things-lions-9.jpg', 1600, 1067),
                new picture_1.Picture('22', 'http://kids.nationalgeographic.com/content/dam/kids/photos/animals/Mammals/H-P/lion-male-roar.jpg', 1600, 900),
                new picture_1.Picture('23', 'http://www.awf.org/sites/default/files/media/gallery/wildlife/Lion/Federico_Veronesi_2009-01-28%20Masai%20Mara_4728.jpg?itok=96CysP6Y', 1000, 665),
                new picture_1.Picture('24', 'http://www.awf.org/sites/default/files/media/gallery/wildlife/Lion/lion_Theodore_mattis.jpg?itok=lAT56K6j', 892, 727),
                new picture_1.Picture('25', 'http://cbs.umn.edu/sites/cbs.umn.edu/files/public/african_lion_king-wide_1.jpg', 1920, 1200),
                new picture_1.Picture('26', 'http://kids.nationalgeographic.com/content/dam/kids/photos/articles/Nature/Q-Z/10%20Cool%20Things%20about%20Lions/cool-things-lions-9.jpg', 1600, 1067),
                new picture_1.Picture('27', 'http://kids.nationalgeographic.com/content/dam/kids/photos/animals/Mammals/H-P/lion-male-roar.jpg', 1600, 900),
                new picture_1.Picture('28', 'http://www.awf.org/sites/default/files/media/gallery/wildlife/Lion/Federico_Veronesi_2009-01-28%20Masai%20Mara_4728.jpg?itok=96CysP6Y', 1000, 665),
                new picture_1.Picture('29', 'http://www.awf.org/sites/default/files/media/gallery/wildlife/Lion/lion_Theodore_mattis.jpg?itok=lAT56K6j', 892, 727),
                new picture_1.Picture('30', 'http://cbs.umn.edu/sites/cbs.umn.edu/files/public/african_lion_king-wide_1.jpg', 1920, 1200),
            ],
            tigers: [
                new picture_1.Picture('1', 'http://kids.nationalgeographic.com/content/dam/kids/photos/articles/Nature/Q-Z/10%20Cool%20Things%20about%20Lions/cool-things-lions-9.jpg', 1600, 1067),
                new picture_1.Picture('2', 'http://kids.nationalgeographic.com/content/dam/kids/photos/animals/Mammals/H-P/lion-male-roar.jpg', 1600, 900),
                new picture_1.Picture('3', 'http://www.awf.org/sites/default/files/media/gallery/wildlife/Lion/Federico_Veronesi_2009-01-28%20Masai%20Mara_4728.jpg?itok=96CysP6Y', 1000, 665),
                new picture_1.Picture('4', 'http://www.awf.org/sites/default/files/media/gallery/wildlife/Lion/lion_Theodore_mattis.jpg?itok=lAT56K6j', 892, 727),
                new picture_1.Picture('5', 'http://cbs.umn.edu/sites/cbs.umn.edu/files/public/african_lion_king-wide_1.jpg', 1920, 1200),
            ]
        };
    }
    PictureService.prototype.byCategory = function (categoryId) {
        return this.categoryMap[categoryId];
    };
    PictureService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], PictureService);
    return PictureService;
}());
exports.PictureService = PictureService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGljdHVyZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicGljdHVyZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFDekMsd0JBQXNCLG1CQUFtQixDQUFDLENBQUE7QUFHMUM7SUFBQTtRQUNVLGdCQUFXLEdBQVc7WUFDNUIsS0FBSyxFQUFFO2dCQUNMLElBQUksaUJBQU8sQ0FBQyxHQUFHLEVBQUUsMklBQTJJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQztnQkFDekssSUFBSSxpQkFBTyxDQUFDLEdBQUcsRUFBRSxtR0FBbUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxDQUFDO2dCQUNoSSxJQUFJLGlCQUFPLENBQUMsR0FBRyxFQUFFLHVJQUF1SSxFQUFFLElBQUksRUFBRSxHQUFHLENBQUM7Z0JBQ3BLLElBQUksaUJBQU8sQ0FBQyxHQUFHLEVBQUUsMkdBQTJHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDdkksSUFBSSxpQkFBTyxDQUFDLEdBQUcsRUFBRSxnRkFBZ0YsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDO2dCQUM5RyxJQUFJLGlCQUFPLENBQUMsR0FBRyxFQUFFLDJJQUEySSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUM7Z0JBQ3pLLElBQUksaUJBQU8sQ0FBQyxHQUFHLEVBQUUsbUdBQW1HLEVBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBQztnQkFDaEksSUFBSSxpQkFBTyxDQUFDLEdBQUcsRUFBRSx1SUFBdUksRUFBRSxJQUFJLEVBQUUsR0FBRyxDQUFDO2dCQUNwSyxJQUFJLGlCQUFPLENBQUMsR0FBRyxFQUFFLDJHQUEyRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ3ZJLElBQUksaUJBQU8sQ0FBQyxJQUFJLEVBQUUsZ0ZBQWdGLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQztnQkFDL0csSUFBSSxpQkFBTyxDQUFDLElBQUks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