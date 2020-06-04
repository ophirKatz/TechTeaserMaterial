import { UserInfoService } from './../../../../common/services/user/user-info.service';
import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddNewTeaserDialogData } from '../../../../model/dialog/add-new-teaser-dialog.data';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-new-teaser',
  templateUrl: './add-new-teaser.component.html',
  styleUrls: ['./add-new-teaser.component.css']
})
export class AddNewTeaserComponent implements OnInit, OnDestroy {
  private userSub: Subscription;

  //#region Lifecycle

  constructor(private dialogRef: MatDialogRef<AddNewTeaserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: AddNewTeaserDialogData,
    private userInfoService: UserInfoService) { }
  
  ngOnInit(): void {
    this.userSub = this.userInfoService.userInfo.subscribe(userInfo => this.data.author = userInfo.displayName);
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }

  //#endregion

  submit(): void {
    console.log(this.data);
    // dispatch action with new teaser
  }
}
