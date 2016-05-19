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
var user_1 = require("../../shared/user/user");
var http_1 = require("angular2/http");
var user_service_1 = require("../../shared/user/user.service");
var router_1 = require("angular2/router");
var frame_1 = require("ui/frame");
var color_1 = require("color");
var LoginPage = (function () {
    function LoginPage(_userService, _router) {
        this._userService = _userService;
        this._router = _router;
        this.isLoggingIn = true;
        this.user = new user_1.User();
        this.user.email = "nativescriptrocks@telerik.com";
        this.user.password = "password";
    }
    LoginPage.prototype.submit = function () {
        if (this.isLoggingIn) {
            this.login();
        }
        else {
            this.signUp();
        }
    };
    LoginPage.prototype.toggleDisplay = function () {
        this.isLoggingIn = !this.isLoggingIn;
        this.page.getViewById("container").animate({
            backgroundColor: this.isLoggingIn ? new color_1.Color("white") : new color_1.Color("#301217"),
            duration: 200
        });
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        this._userService.login(this.user)
            .subscribe(function () { return _this._router.navigate(["List"]); }, function (error) { return alert("Unfortunately we could not find your account."); });
    };
    LoginPage.prototype.signUp = function () {
        var _this = this;
        this._userService.register(this.user)
            .subscribe(function () {
            alert("Your account was successfully created.");
            _this.toggleDisplay();
        }, function () { return alert("Unfortunately we were unable to create your account."); });
    };
    LoginPage.prototype.ngOnInit = function () {
        this.page = frame_1.topmost().currentPage;
        this.page.actionBarHidden = true;
        this.page.backgroundImage = this.page.ios ? "res://bg_login.jpg" : "res://bg_login";
    };
    LoginPage = __decorate([
        core_1.Component({
            selector: "my-app",
            templateUrl: "pages/login/login.html",
            styleUrls: ["pages/login/login-common.css", "pages/login/login.css"],
            providers: [user_service_1.UserService, http_1.HTTP_PROVIDERS]
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService, router_1.Router])
    ], LoginPage);
    return LoginPage;
}());
exports.LoginPage = LoginPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBZ0MsZUFBZSxDQUFDLENBQUE7QUFDaEQscUJBQW1CLHdCQUF3QixDQUFDLENBQUE7QUFDNUMscUJBQTZCLGVBQWUsQ0FBQyxDQUFBO0FBQzdDLDZCQUEwQixnQ0FBZ0MsQ0FBQyxDQUFBO0FBQzNELHVCQUFxQixpQkFBaUIsQ0FBQyxDQUFBO0FBQ3ZDLHNCQUFzQixVQUFVLENBQUMsQ0FBQTtBQUVqQyxzQkFBb0IsT0FBTyxDQUFDLENBQUE7QUFRNUI7SUFLRSxtQkFBb0IsWUFBeUIsRUFBVSxPQUFlO1FBQWxELGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUZ0RSxnQkFBVyxHQUFHLElBQUksQ0FBQztRQUdqQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksV0FBSSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsK0JBQStCLENBQUM7UUFDbEQsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDO0lBQ2xDLENBQUM7SUFDRCwwQkFBTSxHQUFOO1FBQ0UsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDckIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2YsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2hCLENBQUM7SUFDSCxDQUFDO0lBRUQsaUNBQWEsR0FBYjtRQUNFLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDLE9BQU8sQ0FBQztZQUN6QyxlQUFlLEVBQUUsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLGFBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxJQUFJLGFBQUssQ0FBQyxTQUFTLENBQUM7WUFDN0UsUUFBUSxFQUFFLEdBQUc7U0FDZCxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQseUJBQUssR0FBTDtRQUFBLGlCQU1DO1FBTEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzthQUMvQixTQUFTLENBQ1YsY0FBTSxPQUFBLEtBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBL0IsQ0FBK0IsRUFDckMsVUFBQyxLQUFLLElBQUssT0FBQSxLQUFLLENBQUMsK0NBQStDLENBQUMsRUFBdEQsQ0FBc0QsQ0FDaEUsQ0FBQztJQUNOLENBQUM7SUFDRCwwQkFBTSxHQUFOO1FBQUEsaUJBU0M7UUFSQyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQ2xDLFNBQVMsQ0FDVjtZQUNFLEtBQUssQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFDO1lBQ2hELEtBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN2QixDQUFDLEVBQ0QsY0FBTSxPQUFBLEtBQUssQ0FBQyxzREFBc0QsQ0FBQyxFQUE3RCxDQUE2RCxDQUNsRSxDQUFDO0lBQ04sQ0FBQztJQUVELDRCQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsSUFBSSxHQUFTLGVBQU8sRUFBRSxDQUFDLFdBQVcsQ0FBQztRQUN4QyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsb0JBQW9CLEdBQUcsZ0JBQWdCLENBQUM7SUFDdEYsQ0FBQztJQXRESDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsUUFBUTtZQUNsQixXQUFXLEVBQUUsd0JBQXdCO1lBQ3JDLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixFQUFFLHVCQUF1QixDQUFDO1lBQ3BFLFNBQVMsRUFBRSxDQUFDLDBCQUFXLEVBQUUscUJBQWMsQ0FBQztTQUN6QyxDQUFDOztpQkFBQTtJQWtERixnQkFBQztBQUFELENBQUMsQUFqREQsSUFpREM7QUFqRFksaUJBQVMsWUFpRHJCLENBQUEifQ==