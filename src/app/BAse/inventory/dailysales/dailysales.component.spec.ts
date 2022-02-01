import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailysalesComponent } from './dailysales.component';

describe('DailysalesComponent', () => {
  let component: DailysalesComponent;
  let fixture: ComponentFixture<DailysalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailysalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DailysalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
