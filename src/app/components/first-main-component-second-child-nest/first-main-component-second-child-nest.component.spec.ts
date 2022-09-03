import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstMainComponentSecondChildNestComponent } from './first-main-component-second-child-nest.component';

describe('FirstMainComponentSecondChildNestComponent', () => {
  let component: FirstMainComponentSecondChildNestComponent;
  let fixture: ComponentFixture<FirstMainComponentSecondChildNestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstMainComponentSecondChildNestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstMainComponentSecondChildNestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
