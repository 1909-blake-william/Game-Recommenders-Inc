import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameOwnedComponent } from './game-owned.component';

describe('GameOwnedComponent', () => {
  let component: GameOwnedComponent;
  let fixture: ComponentFixture<GameOwnedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameOwnedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameOwnedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
