import { Component, Input } from '@angular/core';
import { Formation } from 'src/app/models/Formation';

@Component({
  selector: 'app-formation-resume',
  templateUrl: './formation-resume.component.html',
  styleUrls: ['./formation-resume.component.css']
})
export class FormationResumeComponent {
  @Input() formation?: Formation;
}
