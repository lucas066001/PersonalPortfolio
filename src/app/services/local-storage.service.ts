import { Injectable } from '@angular/core';
import { LocalStorageKey } from '../constants/LocalStorageKeys';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }
  
  public getLastReload():Date | undefined {
    let dateFromStorage = localStorage.getItem(LocalStorageKey.LAST_RELOAD);

    if(dateFromStorage){
      let dateObj: Date = new Date(dateFromStorage);
      if(dateObj){
        return dateObj;
      }
    }

    return;
  }

  public setLastReload():void {
    let dateObj: Date = new Date();
    localStorage.setItem(LocalStorageKey.LAST_RELOAD, dateObj.toUTCString());
  }
}
