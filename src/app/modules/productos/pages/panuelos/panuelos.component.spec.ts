import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanuelosComponent } from './panuelos.component';

describe('PanuelosComponent', () => {
  let component: PanuelosComponent;
  let fixture: ComponentFixture<PanuelosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PanuelosComponent]
    });
    fixture = TestBed.createComponent(PanuelosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
