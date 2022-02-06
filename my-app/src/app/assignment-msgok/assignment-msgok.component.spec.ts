import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AssignmentMsgokComponent} from './assignment-msgok.component';

describe('AssignmentMsgokComponent', () => {
  let component: AssignmentMsgokComponent;
  let fixture: ComponentFixture<AssignmentMsgokComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AssignmentMsgokComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentMsgokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
