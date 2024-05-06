import {Component, OnDestroy} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, Validators} from '@angular/forms';
import {AuthJwtService} from '../../core/service/auth-jwt.service';
import {LoginRequest} from '../../../gs-api/src/models/login-request';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';
import {StateStorageService} from '../../core/service/state-storage.service';
import {UserService} from '../../shared/services/user.service';
import {SignUpRequest} from '../../../gs-api/src/models/sign-up-request';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnDestroy {

  constructor(private ngbActiveModal: NgbActiveModal,
              private fb: FormBuilder,
              private stateStorageService: StateStorageService,
              private router: Router,
              private jwtService: AuthJwtService,
              private userService: UserService) {}

  onClickButton = false;
  subscription: Subscription;
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
    console.log(event);
    event.preventDefault();
    this.currentTab = tab;
  }

  login(): void {
    this.onClickButton = true;
    this.subscription = this.jwtService.login(this.setDataForLogin()).subscribe(
      () => {
        this.onClickButton = false;
        this.ngbActiveModal.close();
        const redirect = this.stateStorageService.getUrl();
        if (redirect) {
          this.stateStorageService.storeUrl(null);
          this.router.navigateByUrl(redirect).then();
        } else {
          this.router.navigate(['/admin/dashboard']).then();
        }
      },
      (err) => {
        this.onClickButton = false;
        console.log(err);
      }
    );
  }

  setDataForLogin(): LoginRequest {
    return {
      password: this.formLogin.get('password').value,
      phoneOrEmail: this.formLogin.get('username').value,
    };
  }

  register(): void {
    this.onClickButton = true;
    this.subscription = this.userService.register(this.setDataForRegister()).subscribe(
      () => {
        this.onClickButton = false;
        // this.switchTab(, 'tab1');
      },
      (err) => {
        this.onClickButton = false;
        console.log(err);
      }
    );
  }

  setDataForRegister(): SignUpRequest {
    return {
      password: this.formRegister.get('password').value,
      email: this.formRegister.get('email').value,
      name: this.formRegister.get('name').value,
      phone: this.formRegister.get('phoneNumber').value,
    };
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
