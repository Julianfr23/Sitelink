import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DudesComponentComponent } from './dudes-component.component';

describe('DudesComponentComponent', () => {
  let component: DudesComponentComponent;
  let fixture: ComponentFixture<DudesComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DudesComponentComponent]
    });
    fixture = TestBed.createComponent(DudesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
