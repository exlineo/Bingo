import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BingoJeuComponent } from './bingo-jeu.component';

describe('BingoJeuComponent', () => {
  let component: BingoJeuComponent;
  let fixture: ComponentFixture<BingoJeuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BingoJeuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BingoJeuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
