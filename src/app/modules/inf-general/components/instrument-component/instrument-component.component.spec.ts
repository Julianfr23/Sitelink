import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstrumentComponentComponent } from './instrument-component.component';

describe('InstrumentComponentComponent', () => {
  let component: InstrumentComponentComponent;
  let fixture: ComponentFixture<InstrumentComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InstrumentComponentComponent]
    });
    fixture = TestBed.createComponent(InstrumentComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
