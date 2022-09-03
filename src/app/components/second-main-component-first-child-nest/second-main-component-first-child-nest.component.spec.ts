import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondMainComponentFirstChildNestComponent } from './second-main-component-first-child-nest.component';

describe('SecondMainComponentFirstChildNestComponent', () => {
  let component: SecondMainComponentFirstChildNestComponent;
  let fixture: ComponentFixture<SecondMainComponentFirstChildNestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondMainComponentFirstChildNestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondMainComponentFirstChildNestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
