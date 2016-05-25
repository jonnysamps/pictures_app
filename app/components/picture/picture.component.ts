import {Component, OnInit, OnDestroy, ChangeDetectorRef, Input} from "@angular/core";
import {Picture} from '../../shared/models/picture';
import {Page} from "ui/page";
import {Frame, topmost} from "ui/frame";
import {Image} from "ui/image";
import {device, screen, ScreenMetrics} from "platform";
import {on, off, orientationChangedEvent, OrientationChangedEventData} from "application";
import {ImageCache} from '../../shared/services/image_cache';
import {ImageSource} from "image-source";

@Component({
  selector: "picture",
  templateUrl: "components/picture/picture.html",
  styleUrls: ["components/picture/picture.css"]
})
export class PictureComponent implements OnInit, OnDestroy {
  static count: number = 0;
  id: number = ++PictureComponent.count;
  picture: Picture;
  showImage: boolean = false;
  imageSource: ImageSource;
  frame: Frame;
  screen: ScreenMetrics = screen.mainScreen;
  dimensions = {
    width: this.screen.widthDIPs,
    height: this.screen.heightDIPs,
  };

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private imageCache: ImageCache
  ) { }

  loadImageIfNeeded() {
    if (this.showImage) {
      this.imageCache.load(this.picture)
        .then((imageSource: ImageSource) => {
          this.imageSource = imageSource;
          console.log(`${this.id} - image loaded: ${this.picture.id}`);
        })
    }
  }

  @Input()
  set pic(pic: Picture) {
    this.picture = pic;
    this.imageSource = null;
    this.loadImageIfNeeded();
  }

  @Input()
  set show(val: boolean) {
    this.showImage = val;
    if (!this.showImage) {
      // this is necessary because this method is invoked by change-detection.
      setTimeout(() => { this.imageSource = null }, 0);
    } else {
      this.loadImageIfNeeded();
    }
  }

  ngOnInit() {
    this.frame = <Frame>topmost();
    on(orientationChangedEvent, this.layout, this);
    this.layout();
  }

  ngOnDestroy() {
    off(orientationChangedEvent, this.layout, this);
  }

  get page() {
    return this.frame.currentPage;
  }

  layout(data: OrientationChangedEventData = null) {
    if (data && this.page.ios) {
      const currentOrientation = this.screen.widthDIPs > this.screen.heightDIPs ? 'landscape' : 'portrait';
      // Upside down not supported      
      if (data.ios._currentOrientation === 2) { }
      else if (data.newValue !== currentOrientation) {
        this.dimensions.width = this.screen.heightDIPs;
        this.dimensions.height = this.screen.widthDIPs;
      }
    } else {
      this.dimensions.width = this.screen.widthDIPs;
      this.dimensions.height = this.screen.heightDIPs;
    }
    // For some reason the changes affected when we get an onOrientationChangedEvent 
    // do not trigger change detection... so do it manually.
    this.changeDetectorRef.detectChanges();
  }

}  