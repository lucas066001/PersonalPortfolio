import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainResumeComponent } from './main-resume.component';

describe('MainResumeComponent', () => {
  let component: MainResumeComponent;
  let fixture: ComponentFixture<MainResumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainResumeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
