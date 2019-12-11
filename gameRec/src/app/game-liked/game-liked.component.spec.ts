import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameLikedComponent } from './game-liked.component';

describe('GameLikedComponent', () => {
  let component: GameLikedComponent;
  let fixture: ComponentFixture<GameLikedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameLikedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameLikedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
