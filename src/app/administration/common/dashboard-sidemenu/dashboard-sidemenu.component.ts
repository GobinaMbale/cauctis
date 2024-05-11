import {Component, OnInit} from '@angular/core';
import {AuthJwtService} from '../../../core/service/auth-jwt.service';
import {MenuInterface} from '../../../shared/interfaces/menu.interface';
import {RoleEnum} from '../../../shared/enums/role.enum';
import {LocalStorageEnum} from '../../../shared/enums/local-storage.enum';
import {SignUpRequest} from '../../../../gs-api/src/models/sign-up-request';
import {filterMenu} from '../../../shared/utils/method.utils';
import {sideMenuItems} from './sidemenu.item';

@Component({
  selector: 'app-dashboard-sidemenu',
  templateUrl: './dashboard-sidemenu.component.html',
  styleUrls: ['./dashboard-sidemenu.component.scss']
})
export class DashboardSidemenuComponent implements OnInit {
  sidebarItems: MenuInterface[];
  currentUser = JSON.parse(localStorage.getItem(LocalStorageEnum.DATA_USER)) as SignUpRequest;

  constructor(private jwtService: AuthJwtService) { }

  ngOnInit(): void {
    this.sidebarItems = this.getMenuItem(this.currentUser);
  }

  getMenuItem(user: SignUpRequest): MenuInterface[] {
    const roles: RoleEnum[] = user.profiles.map(userProfile => RoleEnum[userProfile.profile.name as keyof typeof RoleEnum])
      .filter(role => role !== undefined);
    return filterMenu(roles, sideMenuItems);
  }

  logout(): void {
    this.jwtService.logout();
  }

}
