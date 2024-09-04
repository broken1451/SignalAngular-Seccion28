import { Component, inject } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-option-btn-sheets',
  standalone: true,
  imports: [MatListModule],
  templateUrl: './option-btn-sheets.component.html',
  styleUrl: './option-btn-sheets.component.scss'
})
export class OptionBtnSheetsComponent {

  private _bottomSheetRef = inject<MatBottomSheetRef<OptionBtnSheetsComponent>>(MatBottomSheetRef);

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
    console.log('Option button clicked', event);
  }
}
