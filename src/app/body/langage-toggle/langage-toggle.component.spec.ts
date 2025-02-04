import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LangageToggleComponent } from './langage-toggle.component';

describe('LangageToggleComponent', () => {
  let component: LangageToggleComponent;
  let fixture: ComponentFixture<LangageToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LangageToggleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LangageToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
