import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FestivosConsultarComponent } from './festivos-consultar.component';

describe('FestivosConsultarComponent', () => {
  let component: FestivosConsultarComponent;
  let fixture: ComponentFixture<FestivosConsultarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FestivosConsultarComponent]
    });
    fixture = TestBed.createComponent(FestivosConsultarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
