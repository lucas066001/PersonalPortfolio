import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationResumeComponent } from './formation-resume.component';

describe('FormationResumeComponent', () => {
  let component: FormationResumeComponent;
  let fixture: ComponentFixture<FormationResumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormationResumeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormationResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
