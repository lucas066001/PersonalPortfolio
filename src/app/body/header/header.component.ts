import { Component } from '@angular/core';
import { Label } from 'src/app/models/Label';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  public labels: Label[] = [
    new Label("Curieux", "#7f08b7"),
    new Label("Motivé","#3b26c2"),
    new Label("Investit","rgb(100 51 122)")
  ]
}
