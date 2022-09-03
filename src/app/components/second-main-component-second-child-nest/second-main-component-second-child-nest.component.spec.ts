import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondMainComponentSecondChildNestComponent } from './second-main-component-second-child-nest.component';

describe('SecondMainComponentSecondChildNestComponent', () => {
  let component: SecondMainComponentSecondChildNestComponent;
  let fixture: ComponentFixture<SecondMainComponentSecondChildNestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondMainComponentSecondChildNestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondMainComponentSecondChildNestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
