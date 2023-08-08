import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBalitaComponent } from './data-balita.component';

describe('DataBalitaComponent', () => {
  let component: DataBalitaComponent;
  let fixture: ComponentFixture<DataBalitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataBalitaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataBalitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
