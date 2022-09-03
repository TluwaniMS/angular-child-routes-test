import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondMainComponentComponent } from './second-main-component.component';

describe('SecondMainComponentComponent', () => {
  let component: SecondMainComponentComponent;
  let fixture: ComponentFixture<SecondMainComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondMainComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondMainComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
