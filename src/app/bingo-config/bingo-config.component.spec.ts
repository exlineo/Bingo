import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BingoConfigComponent } from './bingo-config.component';

describe('BingoConfigComponent', () => {
  let component: BingoConfigComponent;
  let fixture: ComponentFixture<BingoConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BingoConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BingoConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
