import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormComponentGeneratorComponent } from './form-component-generator.component';

describe('FormComponentGeneratorComponent', () => {
  let component: FormComponentGeneratorComponent;
  let fixture: ComponentFixture<FormComponentGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormComponentGeneratorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormComponentGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
