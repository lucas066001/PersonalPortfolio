import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Experience } from 'src/app/models/Experience';
import { Label } from 'src/app/models/Label';

@Component({
  selector: 'app-experience-resume',
  templateUrl: './experience-resume.component.html',
  styleUrls: ['./experience-resume.component.css']
})
export class ExperienceResumeComponent {
  @Input() experience: Experience = new Experience(0, "", new Label("", ""), "", "");
  @Output() selectExperienceEvent = new EventEmitter<number>();

  public setExperienceSelected(idSelected: number) {
    console.log("Experience selected : " + idSelected);
    this.selectExperienceEvent.emit(idSelected);
  }
}
