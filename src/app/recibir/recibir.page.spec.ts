import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecibirPage } from './recibir.page';

describe('RecibirPage', () => {
  let component: RecibirPage;
  let fixture: ComponentFixture<RecibirPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RecibirPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
