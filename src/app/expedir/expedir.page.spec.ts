import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExpedirPage } from './expedir.page';

describe('ExpedirPage', () => {
  let component: ExpedirPage;
  let fixture: ComponentFixture<ExpedirPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpedirPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
