import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BossComponentComponent } from './boss-component.component';

describe('BossComponentComponent', () => {
  let component: BossComponentComponent;
  let fixture: ComponentFixture<BossComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BossComponentComponent]
    });
    fixture = TestBed.createComponent(BossComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
