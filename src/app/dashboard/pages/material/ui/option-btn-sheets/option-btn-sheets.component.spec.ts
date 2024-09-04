import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionBtnSheetsComponent } from './option-btn-sheets.component';

describe('OptionBtnSheetsComponent', () => {
  let component: OptionBtnSheetsComponent;
  let fixture: ComponentFixture<OptionBtnSheetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OptionBtnSheetsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptionBtnSheetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
