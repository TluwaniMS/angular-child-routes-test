import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstMainComponentFirstChildNestComponent } from './first-main-component-first-child-nest.component';

describe('FirstMainComponentFirstChildNestComponent', () => {
  let component: FirstMainComponentFirstChildNestComponent;
  let fixture: ComponentFixture<FirstMainComponentFirstChildNestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstMainComponentFirstChildNestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstMainComponentFirstChildNestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
