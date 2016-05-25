import {Component, OnInit, OnDestroy, ChangeDetectorRef} from "@angular/core";
import {Router} from "@angular/router-deprecated";
import {Picture} from '../../shared/models/picture';
import {PictureService} from '../../shared/services/picture.service';
import {Page} from "ui/page";
import {Frame, topmost} from "ui/frame";
import {device, screen, ScreenMetrics} from "platform";
import {on, off, orientationChangedEvent, OrientationChangedEventData} from "application";
import {ScrollEventData, ScrollView} from "ui/scroll-view";
import {StackLayout} from "ui/layouts/stack-layout"
import {Image} from "ui/image";
import {Buffer} from "../../shared/models/buffer";
import {PictureComponent} from "../../components/picture/picture.component";

const NUM_TO_LOAD = 5;
const LOAD_MARGIN = 2;
const SCROLL_SETTLE_PERIOD = 50;

@Component({
  selector: "gallery",
  templateUrl: "pages/gallery/gallery.html",
  styleUrls: ["pages/gallery/gallery.css"],
  directives: [PictureComponent]
})
export class GalleryPage implements OnInit, OnDestroy {
  pictures: Picture[];
  pageNum: number = 0;
  bufferIndex: number = 0;
  frame: Frame;
  screen: ScreenMetrics = screen.mainScreen;
  loadedRange = { min: 0, max: 0 };
  buffer: Buffer<Picture> = new Buffer<Picture>(NUM_TO_LOAD);
  dimensions = {
    width: this.screen.widthDIPs,
    height: this.screen.heightDIPs,
  };
  categoryName: string = 'Lions';
  scrollingSettled: any;
  
  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private router: Router,
    private pictureService: PictureService,
    private page: Page
  ) { }

  ngOnInit() {
    this.frame = <Frame>topmost();

    this.pictures = this.pictureService.byCategory('lions');
    
    for (let i = 0; i < NUM_TO_LOAD; i++) {
      this.buffer.append(this.pictures[i]);
    }
    if (this.page.ios)
      this.iosInit();
    else
      this.androidInit();

    this.pageNumber = 0;

    this.changeDetectorRef.detectChanges();

    on(orientationChangedEvent, this.layout, this);
    this.layout();
  }

  ngOnDestroy() {
    off(orientationChangedEvent, this.layout, this);
  }

  iosInit() {

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

  androidInit() {

  }

  didScroll(data: ScrollEventData) {
    const newBufferIndex = Math.round(data.scrollX / this.dimensions.width);
    if (newBufferIndex !== this.bufferIndex) {
      
      this.pageNumber += newBufferIndex-this.bufferIndex;
    }
  }


  set pageNumber(newPageNum: number) {
    if (newPageNum > this.pageNum) {
      const nextIndexToLoad = newPageNum + LOAD_MARGIN;
      const nextBufferIndex = newPageNum + LOAD_MARGIN;
      if (nextBufferIndex >= this.buffer.length && nextIndexToLoad < this.pictures.length) {
        this.buffer.append(this.pictures[nextIndexToLoad])
      }
    } else if (newPageNum === this.pageNum) {
      // DO nothing
    }
    else {
      const nextIndexToLoad = newPageNum - LOAD_MARGIN;
      const nextBufferIndex = this.bufferIndex - LOAD_MARGIN;
      if (nextBufferIndex < 0 && nextIndexToLoad >= 0) {
        this.buffer.prepend(this.pictures[nextIndexToLoad]);
      }
    }

    this.bufferIndex += newPageNum - this.pageNum;    
    this.pageNum = newPageNum;
    console.log(`Page: ${this.pageNum}`);
  }

  centerScrollView() {
    let scrollView: ScrollView = <ScrollView>this.page.getViewById('sv');    
     scrollView.scrollToHorizontalOffset(scrollView.horizontalOffset - this.dimensions.width, false);    
  }

  calcLoadedRange() {
    let min = this.pageNum < LOAD_MARGIN ? 0 : this.pageNum - LOAD_MARGIN;
    let max = this.pageNum > this.pictures.length - LOAD_MARGIN - 1 ? this.pictures.length - 1 : this.pageNum + LOAD_MARGIN;
    const result = { min, max };
    return result;
  }
}  