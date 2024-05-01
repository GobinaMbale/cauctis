import { Component } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {

  constructor(private ngbActiveModal: NgbActiveModal,
              private fb: FormBuilder) {}

  onClickButton = false;
  formLogin = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]]
  });
  formRegister = this.fb.group({
    name: ['', [Validators.required]],
    phoneNumber: ['', [Validators.required]],
    email: ['', [Validators.required]],
    password: ['', [Validators.required]],
    confirmPassword: ['', [Validators.required]]
  });

  // Signin/Signup Tabs
  currentTab = 'tab1';

  closeSigninSignupPopup(): void {
    this.ngbActiveModal.close();
  }
  switchTab(event: MouseEvent, tab: string): void {
    event.preventDefault();
    this.currentTab = tab;
  }

  login(): void {}

  register(): void {}
}
