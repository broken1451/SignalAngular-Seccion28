import { computed, inject, Injectable, signal } from '@angular/core';
import { State } from '../interfaces/state.interface';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { UserResponse } from '../interfaces/req-response.interface';
import { delay, map, tap } from 'rxjs';
import { UserSingleResponse } from '../interfaces/single.user.interface';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private http = inject(HttpClient);

    // #state = signal<State | any>({
    //     loading: true,
    //     user: [],
    // });

    private state = signal<State | any>({
        loading: true,
        user: [],
    });

    private user = signal<UserSingleResponse | any>(undefined);


    public userComputed = computed(() => this.user());
    public users = computed(() => this.state().user);
    public loading = computed(() => this.state().loading);

    constructor() {
        this.getUsers();
    }



    getUsers() {
        return this.http.get<UserResponse>(`${environment.api}/users`).pipe(
            delay(2000)
        ).subscribe((data) => {
            this.state.set({
                user: data.data,
                loading: false,
            })
        })
    }

    getUserByID(id: string) {
        return this.http.get<UserSingleResponse>(`${environment.api}/users/${id}`).pipe(
            map((data) =>{
                console.log( data.data)
                return data.data;
            })
        ).subscribe((data) => {
            this.user.set(data);
        });
    }

    getUserByID2(id: string) {
        return this.http.get<UserSingleResponse>(`${environment.api}/users/${id}`).pipe(
            map((data) =>{
                return data.data;
            })
        );
    }
}