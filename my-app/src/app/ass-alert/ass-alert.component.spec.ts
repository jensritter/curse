import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AssAlertComponent} from './ass-alert.component';

describe('AssMsgboxComponent', () => {
  let component: AssAlertComponent;
  let fixture: ComponentFixture<AssAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AssAlertComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
