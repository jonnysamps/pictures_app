import {Component, OnInit} from "angular2/core";
import {User} from "../../shared/user/user";
import {HTTP_PROVIDERS} from "angular2/http";
import {UserService} from "../../shared/user/user.service";
import {Router} from "angular2/router";
import {topmost} from "ui/frame";
import {Page} from "ui/page";
import {Color} from "color";

@Component({
  selector: "my-app",
  templateUrl: "pages/login/login.html",
  styleUrls: ["pages/login/login-common.css", "pages/login/login.css"],
  providers: [UserService, HTTP_PROVIDERS]
})
export class LoginPage implements OnInit {
  page: Page;
  user: User;
  isLoggingIn = true;

  constructor(private _userService: UserService, private _router: Router) {
    this.user = new User();
    this.user.email = "nativescriptrocks@telerik.com";
    this.user.password = "password";
  }
  submit() {
    if (this.isLoggingIn) {
      this.login();
    } else {
      this.signUp();
    }
  }

  toggleDisplay() {
    this.isLoggingIn = !this.isLoggingIn;
    this.page.getViewById("container").animate({
      backgroundColor: this.isLoggingIn ? new Color("white") : new Color("#301217"),
      duration: 200
    });
  }

  login() {
    this._userService.login(this.user)
      .subscribe(
      () => this._router.navigate(["List"]),
      (error) => alert("Unfortunately we could not find your account.")
      );
  }
  signUp() {
    this._userService.register(this.user)
      .subscribe(
      () => {
        alert("Your account was successfully created.");
        this.toggleDisplay();
      },
      () => alert("Unfortunately we were unable to create your account.")
      );
  }

  ngOnInit() {
    this.page = <Page>topmost().currentPage;
    this.page.actionBarHidden = true;
    this.page.backgroundImage = this.page.ios ? "res://bg_login.jpg" : "res://bg_login";
  }
}