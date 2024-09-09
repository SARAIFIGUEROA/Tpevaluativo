import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriashomeComponent } from './categoriashome.component';

describe('CategoriashomeComponent', () => {
  let component: CategoriashomeComponent;
  let fixture: ComponentFixture<CategoriashomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoriashomeComponent]
    });
    fixture = TestBed.createComponent(CategoriashomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
