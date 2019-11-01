import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GadgetCardComponent } from './gadget-card.component';

describe('GadgetCardComponent', () => {
  let component: GadgetCardComponent;
  let fixture: ComponentFixture<GadgetCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GadgetCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GadgetCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
