import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAntiparrasComponent } from './card-antiparras.component';

describe('CardAntiparrasComponent', () => {
  let component: CardAntiparrasComponent;
  let fixture: ComponentFixture<CardAntiparrasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardAntiparrasComponent]
    });
    fixture = TestBed.createComponent(CardAntiparrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
