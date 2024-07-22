import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HobbieResumeComponent } from './hobbie-resume.component';

describe('HobbieResumeComponent', () => {
  let component: HobbieResumeComponent;
  let fixture: ComponentFixture<HobbieResumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HobbieResumeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HobbieResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
