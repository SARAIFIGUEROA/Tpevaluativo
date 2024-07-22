import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntiparrasComponent } from './antiparras.component';

describe('AntiparrasComponent', () => {
  let component: AntiparrasComponent;
  let fixture: ComponentFixture<AntiparrasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AntiparrasComponent]
    });
    fixture = TestBed.createComponent(AntiparrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
