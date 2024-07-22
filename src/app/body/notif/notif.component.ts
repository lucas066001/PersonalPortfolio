import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-notif',
  templateUrl: './notif.component.html',
  styleUrls: ['./notif.component.css']
})
export class NotifComponent {
  public isNotifVisible:boolean = false;
  public isFirstShow:boolean = true;
  @ViewChild('notifButton') chatButton: ElementRef | undefined;
  @ViewChild('notifCard') chatCard: ElementRef | undefined;

  constructor(private renderer: Renderer2){
    this.renderer.listen('window', 'click',(e:Event)=>{

      if(e.target !== this.chatButton?.nativeElement && e.target!==this.chatCard?.nativeElement && !this.chatCard?.nativeElement.contains(e.target) && !this.chatButton?.nativeElement.contains(e.target)){
          this.isNotifVisible = false;
      }
    });
  }

  public updateNotifVisibility(){
    this.isNotifVisible = !this.isNotifVisible;
    this.isFirstShow = false;
  }
}
