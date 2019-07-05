import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaAgregarComponent } from './tarjeta-agregar.component';

describe('TarjetaAgregarComponent', () => {
  let component: TarjetaAgregarComponent;
  let fixture: ComponentFixture<TarjetaAgregarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarjetaAgregarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetaAgregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
