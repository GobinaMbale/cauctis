import {Component, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {filterMenu} from '../../../shared/utils/method.utils';
import {MenuInterface} from '../../../shared/interfaces/menu.interface';
import {navBarItems} from '../../../shared/items/navbar.item';
import {LanguageService} from '../../../shared/services/language.service';
import {SignInComponent} from '../../sign-in/sign-in.component';
import {RoleEnum} from '../../../shared/enums/role.enum';
import {LocalStorageEnum} from '../../../shared/enums/local-storage.enum';
import {SignUpRequest} from '../../../../gs-api/src/models/sign-up-request';

@Component({
  selector: 'app-navbar-style-one',
  templateUrl: './navbar-style-one.component.html',
  styleUrls: ['./navbar-style-one.component.scss']
})
export class NavbarStyleOneComponent implements OnInit {

  currentUser = JSON.parse(localStorage.getItem(LocalStorageEnum.DATA_USER)) as SignUpRequest;
  navBarItems: MenuInterface[];
  constructor(private ngbModal: NgbModal,
              private languageService: LanguageService) { }

  ngOnInit(): void {
    if (this.currentUser) {
      console.log('role');
      const roles: RoleEnum[] = this.currentUser.profiles.map(userProfile => RoleEnum[userProfile.profile.name as keyof typeof RoleEnum])
        .filter(role => role !== undefined);
      this.navBarItems = filterMenu(roles, navBarItems);
    } else {
      console.log('no*role');
      this.navBarItems = filterMenu([RoleEnum.ROLE_CUSTOMER], navBarItems);
    }
  }

  changeLanguage(lang): void {
    this.languageService.setLanguage(lang);
  }

  openSigninSignupPopup(): void {
    this.ngbModal.open(SignInComponent, {size: 'md', backdrop: 'static'});
  }
}
