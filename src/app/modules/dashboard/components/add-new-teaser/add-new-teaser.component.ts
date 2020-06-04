import { UserInfoService } from './../../../../common/services/user/user-info.service';
import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddNewTeaserData } from '../../../../model/data/add-new-teaser.data';
import { Subscription } from 'rxjs';
import { TeasersState } from '../../../../store/teaser/teaser.state';
import * as TeaserActions from '../../../../store/teaser/teaser.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-add-new-teaser',
  templateUrl: './add-new-teaser.component.html',
  styleUrls: ['./add-new-teaser.component.css']
})
export class AddNewTeaserComponent implements OnInit, OnDestroy {
  private userSub: Subscription;

  //#region Lifecycle

  constructor(private dialogRef: MatDialogRef<AddNewTeaserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: AddNewTeaserData,
    private userInfoService: UserInfoService,
    private store: Store<TeasersState>) { }
  
  ngOnInit(): void {
    this.userSub = this.userInfoService.userInfo.subscribe(userInfo => this.data.author = userInfo.displayName);
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }

  //#endregion

  submit(): void {
    this.store.dispatch(TeaserActions.requestAddTeaser({teaserData: this.data}));
  }
}
