import { Injectable } from '@angular/core';
import {Camera, CameraResultType, CameraSource, Photo} from '@capacitor/camera'
import {Filesystem, Directory} from '@capacitor/filesystem'


@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  public photos: UserPhoto[]=[];

  constructor() { }

  public async addNewToGallery(){
    const capturePhoto = await Camera.getPhoto({
      resultType : CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });

    this.photos.unshift({
      filepath:"soon...",
      webviewPath: capturePhoto.webPath!
    })
    

  }}
  export interface UserPhoto{
    filepath:string;
    webviewPath?:string;
  }

