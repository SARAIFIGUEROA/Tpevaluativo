import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotasComponent } from './botas.component';

describe('BotasComponent', () => {
  let component: BotasComponent;
  let fixture: ComponentFixture<BotasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BotasComponent]
    });
    fixture = TestBed.createComponent(BotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
