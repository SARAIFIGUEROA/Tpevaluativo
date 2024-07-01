import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BufandasComponent } from './bufandas.component';

describe('BufandasComponent', () => {
  let component: BufandasComponent;
  let fixture: ComponentFixture<BufandasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BufandasComponent]
    });
    fixture = TestBed.createComponent(BufandasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
