import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideComponentComponent } from './slide-component.component';

describe('SlideComponentComponent', () => {
  let component: SlideComponentComponent;
  let fixture: ComponentFixture<SlideComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SlideComponentComponent]
    });
    fixture = TestBed.createComponent(SlideComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
