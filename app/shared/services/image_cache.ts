import {Injectable} from "angular2/core";
import {Cache} from "ui/image-cache";
import {fromNativeSource, ImageSource, fromFile} from "image-source";
import {ImageFormat} from "ui/enums";
import {Picture} from "../models/picture";
import {knownFolders, File} from "file-system";

@Injectable()
export class ImageCache {
  cache: Cache = new Cache();

  constructor() {
    this.cache.maxRequests = 5;
    this.cache.enableDownload();
  }

  disableDownload() {
    this.cache.disableDownload();
  }
  enableDownload() {
    this.cache.enableDownload();
  }

  load(picture: Picture): Promise<ImageSource> {
    return new Promise<ImageSource>((resolve, reject) => {
      let imageSource = this.loadLocal(picture);
      if (imageSource) {
        resolve(imageSource);
      } else {
        this.download(picture)
          .then(
          (imageSource: ImageSource) => {
            this.writeLocal(picture, imageSource);
            resolve(imageSource);
          },
          error => {
            console.error(error);
            reject(error);
          })
      }
    });
  }

  download(picture: Picture) {
    return new Promise<ImageSource>((resolve, reject) => {
      this.cache.enqueue({
        key: picture.id,
        url: picture.originUrl,
        completed: (image, key) => {
          let imgSource = fromNativeSource(image);
          resolve(imgSource);
          this.cache.clear(); // Don't want it to cache in memory
        }
      });
    });
  }

  haveLocal(picture: Picture): boolean {
    const temp = knownFolders.temp();
    const fileName = picture.id;
    return File.exists(this.file(picture).path);
  }

  loadLocal(picture: Picture): ImageSource {
    const file = this.file(picture);
    return fromFile(file.path);
  }

  writeLocal(picture: Picture, imageSource: ImageSource): void {
    imageSource.saveToFile(this.file(picture).path, ImageFormat.png);
  }

  file(picture: Picture): File {
    const temp = knownFolders.temp();
    const fileName = picture.id;
    const file = temp.getFile(fileName);
    return file;
  }
}