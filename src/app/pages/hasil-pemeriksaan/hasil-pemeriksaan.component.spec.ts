import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HasilPemeriksaanComponent } from './hasil-pemeriksaan.component';

describe('HasilPemeriksaanComponent', () => {
  let component: HasilPemeriksaanComponent;
  let fixture: ComponentFixture<HasilPemeriksaanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HasilPemeriksaanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HasilPemeriksaanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
