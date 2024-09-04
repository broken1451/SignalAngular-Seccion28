import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import {MatBottomSheetModule, MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import { OptionBtnSheetsComponent } from './ui/option-btn-sheets/option-btn-sheets.component';


@Component({
  selector: 'app-material',
  standalone: true,
  imports: [CommonModule, MatSlideToggleModule, MatIconModule, MatBadgeModule, MatButtonModule, MatBottomSheetModule, OptionBtnSheetsComponent ],
  templateUrl: './material.component.html',
  styleUrl: './material.component.scss'
})
export class MaterialComponent {

  private _bottomSheet = inject(MatBottomSheet);

  openBottomSheet(): void {
    this._bottomSheet.open(OptionBtnSheetsComponent);
  }



}
