import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '@services/user.service';
import { TitleComponent } from '@shared/title/title.component';
import { Data, UserSingleResponse } from '../../../interfaces/single.user.interface';
import { toSignal } from '@angular/core/rxjs-interop';
import { catchError, of, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, TitleComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {


  public userSvs = inject(UserService);
  public activatedRoute = inject(ActivatedRoute);
  public userCompueted =  this.userSvs.userComputed;
  // public user = signal<UserSingleResponse | Data | undefined>(undefined);
  public user = toSignal(
    this.activatedRoute.params.pipe(
      switchMap((params: any) => {
        // console.log (params.id)
        return this.userSvs.getUserByID2(params.id)
      }),
      tap((data) => {
        // console.log(data)
        // this.userRes.set(data)
      }),
    )
  );

  public titleLabel = computed(() => {
    if (!this.user()) {
      return 'Informacion del usuario';
    }
    return `Informacion de ${this.user()?.first_name} ${this.user()?.last_name}`;
  });

  constructor() {
    console.log (this.user()?.avatar)
    // console.log (this.userRes())
    // this.activatedRoute.params.subscribe((params) =>{
    //   this.userSvs.getUserByID(params['id']);
    // });
    // console.log (this.userCompueted()?.avatar)
  }

}
