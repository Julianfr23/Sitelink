import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntenaComponentComponent } from './antena-component.component';

describe('AntenaComponentComponent', () => {
  let component: AntenaComponentComponent;
  let fixture: ComponentFixture<AntenaComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AntenaComponentComponent]
    });
    fixture = TestBed.createComponent(AntenaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
