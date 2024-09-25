import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBotasComponent } from './card-botas.component';

describe('CardBotasComponent', () => {
  let component: CardBotasComponent;
  let fixture: ComponentFixture<CardBotasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardBotasComponent]
    });
    fixture = TestBed.createComponent(CardBotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
