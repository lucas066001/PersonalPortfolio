import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { LocalStorageService } from './services/local-storage.service';
import { AppTimings } from './constantes/AppTimings';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private meta: Meta, private localStorageService: LocalStorageService) {}

  ngOnInit(): void {
    this.meta.addTag({ name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1' });
    this.meta.addTag({ name: 'title', content: 'Lucas\' Portfolio' });
    
    let lastReload = this.localStorageService.getLastReload();
    let breakDate = new Date();
    breakDate.setMinutes(breakDate.getMinutes() - AppTimings.RELOAD_ANIMATION);
    if(lastReload && lastReload > breakDate){
      this.isAnimationFinished = true;
      this.noAnimation = true;
    }else{
      this.displayNextIntroTile();
    }
  }

  public title:string = 'Lucas\' Portfolio';
  public isDetailVisible:boolean = false;
  public isScrollActive:boolean = true;
  public actualExpId:number = 0;
  public isAnimationFinished: boolean = false;
  public noAnimation: boolean = false;
  public currentAnimationState: number = 0;

  private totalIntroTiles: number = 4;

  public showDetail(idExp:number){
    this.actualExpId = idExp;
    this.isDetailVisible = true;
    this.isScrollActive = false;
  }

  public hideDetail(){
    this.isDetailVisible = false;
    this.isScrollActive = true;
  }

  public stopAnimation(){
    this.isAnimationFinished = true;
    this.localStorageService.setLastReload();
    document.getElementById("introContainer")?.classList.add("hideLeft");
  }

  private displayNextIntroTile():void{
    if(!this.isAnimationFinished){
      this.currentAnimationState++;
  
      if(this.currentAnimationState < this.totalIntroTiles -1){
        setTimeout(() => {
          this.displayNextIntroTile();
        }, 3000);
      }else if(this.currentAnimationState == this.totalIntroTiles -1){
        setTimeout(() => {
          this.displayNextIntroTile();
        }, 4000);
      }else if(this.currentAnimationState == this.totalIntroTiles){
        setTimeout(() => {
          this.isAnimationFinished = true;
          this.localStorageService.setLastReload();
          document.getElementById("introContainer")?.classList.add("hideLeft");
        }, 4000);
      }
    }
  }
}
