import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

type Grade = 'A' | 'B' | 'F';

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [CommonModule, TitleComponent],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.scss'
})
export class ControlFlowComponent {

  public showContent = signal(false);
  public grade = signal<Grade>('F');
  public frameworks = signal<string[]>(['Angular', 'React', 'Vue', 'Svelte', 'Ember', 'NestJS']);
  public frameworks2 = signal<string[]>([]);

  toggleContent() {
    this.showContent.update( value => !value);
  }
}
