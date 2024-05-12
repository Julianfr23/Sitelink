import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtectionComponentComponent } from './protection-component.component';

describe('ProtectionComponentComponent', () => {
  let component: ProtectionComponentComponent;
  let fixture: ComponentFixture<ProtectionComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProtectionComponentComponent]
    });
    fixture = TestBed.createComponent(ProtectionComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
