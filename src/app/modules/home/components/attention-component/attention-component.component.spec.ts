import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttentionComponentComponent } from './attention-component.component';

describe('AttentionComponentComponent', () => {
  let component: AttentionComponentComponent;
  let fixture: ComponentFixture<AttentionComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AttentionComponentComponent]
    });
    fixture = TestBed.createComponent(AttentionComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
