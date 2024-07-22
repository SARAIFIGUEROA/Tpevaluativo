import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CamperasComponent } from './camperas.component';

describe('CamperasComponent', () => {
  let component: CamperasComponent;
  let fixture: ComponentFixture<CamperasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CamperasComponent]
    });
    fixture = TestBed.createComponent(CamperasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
