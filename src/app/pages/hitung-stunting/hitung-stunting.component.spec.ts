import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HitungStuntingComponent } from './hitung-stunting.component';

describe('HitungStuntingComponent', () => {
  let component: HitungStuntingComponent;
  let fixture: ComponentFixture<HitungStuntingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HitungStuntingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HitungStuntingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
