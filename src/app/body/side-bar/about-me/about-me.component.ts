import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent {
  birthYear = 2002;
  currentYear = new Date().getFullYear();
  age = this.currentYear - this.birthYear;
}
