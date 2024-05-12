import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegulationsPageComponent } from './regulations-page.component';

describe('RegulationsPageComponent', () => {
  let component: RegulationsPageComponent;
  let fixture: ComponentFixture<RegulationsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegulationsPageComponent]
    });
    fixture = TestBed.createComponent(RegulationsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
