import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { routes } from '../../app.routes';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.scss'
})
export class SideMenuComponent {

  
  public menuItems = routes.map(route => {
    // return route.children ?? []
    if (route.children) {
      return route.children
    } else {
      return []
    }
  }).flat().filter(route => route && route.path !== '**').filter(route => !route.path?.includes(':'));

  constructor() {
    // const dashBoardRoutes = routes.map(route => {
    // return route.children ?? []
    //   if (route.children) {
    //     return route.children
    //   } else {
    //     return []
    //   }
    // }).flat().filter(route => route && route.path !== '**').filter(route => !route.path?.includes(':'));
    // console.log(dashBoardRoutes);
  }


}
