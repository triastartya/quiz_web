import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataIbuComponent } from './data-ibu.component';

describe('DataIbuComponent', () => {
  let component: DataIbuComponent;
  let fixture: ComponentFixture<DataIbuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataIbuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataIbuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
