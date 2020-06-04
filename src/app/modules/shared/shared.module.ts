import { MaterialModule } from './material/material.module';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout/';
import { EditableChipListComponent } from './widgets/editable-chip-list/editable-chip-list.component'; 


@NgModule({
  declarations: [
    EditableChipListComponent
  ],
  imports: [
    FlexLayoutModule,
    MaterialModule,
  ],
  exports: [
    EditableChipListComponent,
    MaterialModule,
    FlexLayoutModule,
  ]
})
export class SharedModule { }
