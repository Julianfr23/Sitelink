import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisionComponentComponent } from './vision-component.component';

describe('VisionComponentComponent', () => {
  let component: VisionComponentComponent;
  let fixture: ComponentFixture<VisionComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VisionComponentComponent]
    });
    fixture = TestBed.createComponent(VisionComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
