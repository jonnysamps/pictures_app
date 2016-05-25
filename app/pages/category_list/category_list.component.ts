import {Component, OnInit, OnDestroy, ChangeDetectorRef} from "@angular/core";
import {Router} from "@angular/router-deprecated";
import {Category} from '../../shared/models/category';
import {Page} from "ui/page";
import {topmost} from "ui/frame";
import {device, screen, ScreenMetrics} from "platform";
import {on, off, orientationChangedEvent, OrientationChangedEventData} from "application";

@Component({
  selector: "list",
  templateUrl: "pages/category_list/category_list.html",
  styleUrls: ["pages/category_list/category_list-common.css", "pages/category_list/category_list.css"]
})
export class CategoryListPage implements OnInit, OnDestroy {
  categories: Category[] = [
    new Category('', 'lion_category', 'Lions'),
    new Category('', 'tiger_category', 'Tigers'),
    new Category('', 'lion_category', 'Bears'),
    new Category('', 'lion_category', 'Elephants'),
    new Category('', 'lion_category', 'Cats'),
    new Category('', 'lion_category', 'Dogs'),
    new Category('', 'lion_category', 'Mice'),
    new Category('', 'lion_category', 'Cows'),
    new Category('', 'lion_category', 'Kangeroo'),
  ]

  rowHeight: number = 80;
  rowWidth: number;
  screen: ScreenMetrics = screen.mainScreen;

  constructor(private changeDetectorRef: ChangeDetectorRef, private router: Router, private page: Page) { }

  ngOnInit() {
    // this.page.actionBarHidden = true;
    
    // if (this.page.ios)
      // this.page.ios.title = '';
    // register event listener for when the orientation changes    
    on(orientationChangedEvent, this.layout, this);
    this.layout();
  }

  ngOnDestroy() {
    // Unregister event listener
    off(orientationChangedEvent, this.layout, this);
  }

  /**
   * For iOS this event occurs BEFORE the orientation has changed
   * For Android this event occurs AFTER
   */
  layout(data: OrientationChangedEventData = null) {
    if (data && this.page.ios) {
      const currentOrientation = screen.mainScreen.widthDIPs > screen.mainScreen.heightDIPs ? 'landscape' : 'portrait';
      // Upside down not supported      
      if (data.ios._currentOrientation === 2) { }
      else if (data.newValue !== currentOrientation) {
        this.rowWidth = screen.mainScreen.heightDIPs / 3.0;
      }
    } else {
      this.rowWidth = screen.mainScreen.widthDIPs / 3.0;
    }
    // For some reason the changes affected when we get an onOrientationChangedEvent 
    // do not trigger change detection... so do it manually.
    this.changeDetectorRef.detectChanges();
  }

  goToGallery(category: Category) {
    console.log(`Navigating to gallery: ${category.name}`);
    this.router.navigate(["Gallery"]);
  }

}  