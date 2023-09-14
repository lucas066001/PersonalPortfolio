import { Component, Input } from '@angular/core';
import { Hobbie } from 'src/app/models/Hobbie';

@Component({
  selector: 'app-hobbie-resume',
  templateUrl: './hobbie-resume.component.html',
  styleUrls: ['./hobbie-resume.component.css']
})
export class HobbieResumeComponent {
  @Input() hobbie?:Hobbie;
}
