import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasBingoComponent } from './pas-bingo.component';

describe('PasBingoComponent', () => {
  let component: PasBingoComponent;
  let fixture: ComponentFixture<PasBingoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasBingoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasBingoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
