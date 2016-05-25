import {Component} from "@angular/core";
import {HTTP_PROVIDERS} from "@angular/http";
import {RouteConfig} from "@angular/router-deprecated";
import {NS_ROUTER_DIRECTIVES, NS_ROUTER_PROVIDERS} from "nativescript-angular/router";
import {CategoryListPage} from "./pages/category_list/category_list.component";
import {GalleryPage} from "./pages/gallery/gallery.component";
import {PictureService} from "./shared/services/picture.service";
import {ImageCache} from "./shared/services/image_cache";

@Component({
  selector: "main",
  directives: [NS_ROUTER_DIRECTIVES],
  providers: [NS_ROUTER_PROVIDERS, PictureService, ImageCache],
  template: "<page-router-outlet></page-router-outlet>"
})
@RouteConfig([
  { path: "/category_list", component: CategoryListPage, as: "List", useAsDefault: true },
  { path: "/gallery", component: GalleryPage, as: "Gallery" }
])
export class AppComponent { }