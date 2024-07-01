import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GorrosComponent } from './gorros.component';

describe('GorrosComponent', () => {
  let component: GorrosComponent;
  let fixture: ComponentFixture<GorrosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GorrosComponent]
    });
    fixture = TestBed.createComponent(GorrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
