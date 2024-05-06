import { Component, OnInit } from '@angular/core';
import {LocalStorageService} from 'ngx-webstorage';
import {SignUpRequest} from '../../../../gs-api/src/models/sign-up-request';
import {LocalStorageEnum} from '../../../shared/enums/local-storage.enum';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  data: SignUpRequest;

  breadcrumb = [
    {
      title: '',
      subTitle: 'Dashboard'
    }
  ];

  constructor(private $localStorage: LocalStorageService) { }

  ngOnInit(): void {
    this.data = this.$localStorage.retrieve(LocalStorageEnum.DATA_USER);
  }

}
