import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Experience } from 'src/app/models/Experience';

@Component({
  selector: 'app-experience-resume',
  templateUrl: './experience-resume.component.html',
  styleUrls: ['./experience-resume.component.css']
})
export class ExperienceResumeComponent {
  @Input() experience: Experience = new Experience(0,"","","","");
  @Output() selectExperienceEvent = new EventEmitter<number>();

  public setExperienceSelected(idSelected:number){
    this.selectExperienceEvent.emit(idSelected);
  }
}
