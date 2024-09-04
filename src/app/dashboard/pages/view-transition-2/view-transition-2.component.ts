import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  selector: 'app-view-transition-2',
  standalone: true,
  imports: [CommonModule, TitleComponent],
  templateUrl: './view-transition-2.component.html',
  styleUrl: './view-transition-2.component.scss'
})
export class ViewTransitionComponent {

}
