import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArkazaComponent } from './arkaza.component';

describe('ArkazaComponent', () => {
  let component: ArkazaComponent;
  let fixture: ComponentFixture<ArkazaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArkazaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArkazaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
