import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FacturarPage } from './facturar.page';

describe('FacturarPage', () => {
  let component: FacturarPage;
  let fixture: ComponentFixture<FacturarPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
