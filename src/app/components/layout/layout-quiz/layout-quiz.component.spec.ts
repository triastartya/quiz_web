import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutQuizComponent } from './layout-quiz.component';

describe('LayoutQuizComponent', () => {
  let component: LayoutQuizComponent;
  let fixture: ComponentFixture<LayoutQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutQuizComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
