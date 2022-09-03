import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstMainComponentComponent } from './first-main-component.component';

describe('FirstMainComponentComponent', () => {
  let component: FirstMainComponentComponent;
  let fixture: ComponentFixture<FirstMainComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstMainComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstMainComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
