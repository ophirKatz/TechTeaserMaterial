import { newDialogData } from './../../../../model/dialog/add-new-teaser-dialog.data';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddNewTeaserComponent } from '../add-new-teaser/add-new-teaser.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  private dialogSub: Subscription;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    this.openAddTeaserModal();
  }
  
  ngOnDestroy(): void {
    this.dialogSub.unsubscribe();
  }

  openAddTeaserModal(): void {
    const dialogRef = this.dialog.open(AddNewTeaserComponent,
      {
        width: '650px',
        data: newDialogData()
      });

    this.dialogSub = dialogRef.afterClosed().subscribe(this.handleResult);
  }

  handleResult(result: any): void {
    console.log(`Add New Teaser Result: ${result}`);
  }
}
