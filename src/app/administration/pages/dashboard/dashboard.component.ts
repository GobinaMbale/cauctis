import { Component, OnInit } from '@angular/core';
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

  ngOnInit(): void {
    this.data = JSON.parse(localStorage.getItem(LocalStorageEnum.DATA_USER)) as SignUpRequest;
  }

}
