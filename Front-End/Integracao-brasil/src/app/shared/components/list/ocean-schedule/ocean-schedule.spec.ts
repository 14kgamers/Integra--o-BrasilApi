import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OceanSchedule } from './ocean-schedule';

describe('OceanSchedule', () => {
  let component: OceanSchedule;
  let fixture: ComponentFixture<OceanSchedule>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OceanSchedule],
    }).compileComponents();

    fixture = TestBed.createComponent(OceanSchedule);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
