import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FetchRandomComponent} from './fetch-random.component';

describe('FetchRandomComponent', () => {
  let component: FetchRandomComponent;
  let fixture: ComponentFixture<FetchRandomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FetchRandomComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FetchRandomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
