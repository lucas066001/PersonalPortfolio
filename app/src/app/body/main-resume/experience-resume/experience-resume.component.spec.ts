import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceResumeComponent } from './experience-resume.component';

describe('ExperienceResumeComponent', () => {
  let component: ExperienceResumeComponent;
  let fixture: ComponentFixture<ExperienceResumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienceResumeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperienceResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
