import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompradosComponent } from './comprados.component';

describe('CompradosComponent', () => {
  let component: CompradosComponent;
  let fixture: ComponentFixture<CompradosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompradosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompradosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
