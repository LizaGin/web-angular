import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnotherBankComponent } from './another-bank.component';

describe('AnotherBankComponent', () => {
  let component: AnotherBankComponent;
  let fixture: ComponentFixture<AnotherBankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnotherBankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnotherBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
