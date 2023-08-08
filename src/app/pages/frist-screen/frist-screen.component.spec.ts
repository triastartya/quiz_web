import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FristScreenComponent } from './frist-screen.component';

describe('FristScreenComponent', () => {
  let component: FristScreenComponent;
  let fixture: ComponentFixture<FristScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FristScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FristScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
