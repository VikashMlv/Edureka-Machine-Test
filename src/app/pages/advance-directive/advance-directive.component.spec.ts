import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvanceDirectiveComponent } from './advance-directive.component';

describe('AdvanceDirectiveComponent', () => {
  let component: AdvanceDirectiveComponent;
  let fixture: ComponentFixture<AdvanceDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvanceDirectiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvanceDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
