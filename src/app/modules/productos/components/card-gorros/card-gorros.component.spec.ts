import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardGorrosComponent } from './card-gorros.component';

describe('CardGorrosComponent', () => {
  let component: CardGorrosComponent;
  let fixture: ComponentFixture<CardGorrosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardGorrosComponent]
    });
    fixture = TestBed.createComponent(CardGorrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
