import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BingoMenuComponent } from './bingo-menu.component';

describe('BingoMenuComponent', () => {
  let component: BingoMenuComponent;
  let fixture: ComponentFixture<BingoMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BingoMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BingoMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
