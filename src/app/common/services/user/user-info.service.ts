import { UserInfo } from './../../../model/user/user-info.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {
  public userInfo: BehaviorSubject<UserInfo>;

  constructor() {
    // TODO : get from store
    this.userInfo = new BehaviorSubject(<UserInfo>{username: 'ofirkatz', displayName: 'Ophir Katz', email: 'ophirk8396@gmail.com'});
  }
}
