import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  selector: 'app-change-detection',
  standalone: true,
  imports: [CommonModule, TitleComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './change-detection.component.html',
  styleUrl: './change-detection.component.scss'
})
export class ChangeDetectionComponent {

  public currentFramework = computed(() => `Change Detection - ${this.frameworksSignal().name}`);

  public frameworksProperty = {
    name: 'Angular',
    releaseDate: 2016
  };

  public frameworksSignal = signal({
    name: 'Angular',
    releaseDate: 2016
  });

  constructor() {

    setTimeout(() => {

      console.log('hecho')
      // this.frameworksProperty.name = 'React';
      this.frameworksSignal.update((current) => {
        console.log ('current', current)
        return {
          ...current,
          name: 'React'
        }
      })

    }, 3000);
  }
}
