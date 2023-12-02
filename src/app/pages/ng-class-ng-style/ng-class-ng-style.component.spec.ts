import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgClassNgStyleComponent } from './ng-class-ng-style.component';

describe('NgClassNgStyleComponent', () => {
  let component: NgClassNgStyleComponent;
  let fixture: ComponentFixture<NgClassNgStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgClassNgStyleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgClassNgStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
