import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BingoConneComponent } from './bingo-conne.component';

describe('BingoConneComponent', () => {
  let component: BingoConneComponent;
  let fixture: ComponentFixture<BingoConneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BingoConneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BingoConneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
