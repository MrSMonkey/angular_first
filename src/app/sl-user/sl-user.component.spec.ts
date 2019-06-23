import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlUserComponent } from './sl-user.component';

describe('SlUserComponent', () => {
  let component: SlUserComponent;
  let fixture: ComponentFixture<SlUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
