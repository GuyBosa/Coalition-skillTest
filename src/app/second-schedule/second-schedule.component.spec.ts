import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondScheduleComponent } from './second-schedule.component';

describe('SecondScheduleComponent', () => {
  let component: SecondScheduleComponent;
  let fixture: ComponentFixture<SecondScheduleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecondScheduleComponent]
    });
    fixture = TestBed.createComponent(SecondScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
