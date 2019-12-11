import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestPieChartComponent } from './test-pie-chart.component';

describe('TestPieChartComponent', () => {
  let component: TestPieChartComponent;
  let fixture: ComponentFixture<TestPieChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestPieChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestPieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
