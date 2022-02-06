import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AssignmentMsgfailComponent} from './assignment-msgfail.component';

describe('AssignmentMsgfailComponent', () => {
  let component: AssignmentMsgfailComponent;
  let fixture: ComponentFixture<AssignmentMsgfailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AssignmentMsgfailComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentMsgfailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
