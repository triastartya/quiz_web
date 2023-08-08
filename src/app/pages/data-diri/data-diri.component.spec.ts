import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataDiriComponent } from './data-diri.component';

describe('DataDiriComponent', () => {
  let component: DataDiriComponent;
  let fixture: ComponentFixture<DataDiriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataDiriComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataDiriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
