import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlinesearchComponent } from './onlinesearch.component';

describe('OnlinesearchComponent', () => {
  let component: OnlinesearchComponent;
  let fixture: ComponentFixture<OnlinesearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnlinesearchComponent]
    });
    fixture = TestBed.createComponent(OnlinesearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
