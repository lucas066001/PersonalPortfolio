import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolCompetenceComponent } from './tool-competence.component';

describe('ToolCompetenceComponent', () => {
  let component: ToolCompetenceComponent;
  let fixture: ComponentFixture<ToolCompetenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolCompetenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToolCompetenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
