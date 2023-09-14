import { Component, Input } from '@angular/core';
import { ToolCompetence } from 'src/app/models/ToolCompetence';

@Component({
  selector: 'app-tool-competence',
  templateUrl: './tool-competence.component.html',
  styleUrls: ['./tool-competence.component.css']
})
export class ToolCompetenceComponent {
  @Input() toolCompetence?:ToolCompetence;
}
