import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfGeneralPageComponent } from './inf-general-page.component';

describe('InfGeneralPageComponent', () => {
  let component: InfGeneralPageComponent;
  let fixture: ComponentFixture<InfGeneralPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfGeneralPageComponent]
    });
    fixture = TestBed.createComponent(InfGeneralPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
