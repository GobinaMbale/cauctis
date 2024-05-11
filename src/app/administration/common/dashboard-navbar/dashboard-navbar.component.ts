import { Component, OnInit } from '@angular/core';
import {MenuInterface} from '../../../shared/interfaces/menu.interface';
import {filterMenu} from '../../../shared/utils/method.utils';
import {navBarItems} from '../../../shared/items/navbar.item';
import {LocalStorageEnum} from '../../../shared/enums/local-storage.enum';
import {SignUpRequest} from '../../../../gs-api/src/models/sign-up-request';
import {RoleEnum} from '../../../shared/enums/role.enum';

@Component({
  selector: 'app-dashboard-navbar',
  templateUrl: './dashboard-navbar.component.html',
  styleUrls: ['./dashboard-navbar.component.scss']
})
export class DashboardNavbarComponent implements OnInit {

  currentUser = JSON.parse(localStorage.getItem(LocalStorageEnum.DATA_USER)) as SignUpRequest;
  navBarItems: MenuInterface[];
  constructor() { }

  ngOnInit(): void {
    if (this.currentUser) {
      console.log('role');
      const roles: RoleEnum[] = this.currentUser.profiles.map(userProfile => RoleEnum[userProfile.profile.name as keyof typeof RoleEnum])
        .filter(role => role !== undefined);
      this.navBarItems = filterMenu(roles, navBarItems);
    } else {
      this.navBarItems = filterMenu([RoleEnum.ROLE_CUSTOMER], navBarItems);
    }
  }
}
