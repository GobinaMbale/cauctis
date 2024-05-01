import { Component, OnInit } from '@angular/core';
import {SignInComponent} from '../../../customer/sign-in/sign-in.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navbar-style-one',
  templateUrl: './navbar-style-one.component.html',
  styleUrls: ['./navbar-style-one.component.scss']
})
export class NavbarStyleOneComponent implements OnInit {

  constructor(private ngbModal: NgbModal) { }

  ngOnInit(): void {
  }

  openSigninSignupPopup(): void {
    this.ngbModal.open(SignInComponent, {size: 'md', backdrop: 'static'});
  }
}
