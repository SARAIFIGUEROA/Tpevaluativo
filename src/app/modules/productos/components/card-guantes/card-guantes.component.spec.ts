import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardGuantesComponent } from './card-guantes.component';

describe('CardGuantesComponent', () => {
  let component: CardGuantesComponent;
  let fixture: ComponentFixture<CardGuantesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardGuantesComponent]
    });
    fixture = TestBed.createComponent(CardGuantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
