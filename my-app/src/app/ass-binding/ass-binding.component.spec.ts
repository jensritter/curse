import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AssBindingComponent} from './ass-binding.component';

describe('AssBindingComponent', () => {
  let component: AssBindingComponent;
  let fixture: ComponentFixture<AssBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AssBindingComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
