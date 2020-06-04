import { SelectedTeaserNotifyingService } from './services/selected-teaser-notifying.service';
import { TeasersHttpService } from './services/teasers-http.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeaserListComponent } from './components/teaser-list/teaser-list.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import * as fromTeaserStore from '../../store/teaser';
import { TeaserItemComponent } from './components/teaser-item/teaser-item.component';

import { MatListModule } from '@angular/material/list';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatChipsModule} from '@angular/material/chips'; 

@NgModule({
  declarations: [TeaserListComponent, TeaserItemComponent],
  providers: [
    TeasersHttpService,
    SelectedTeaserNotifyingService,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatListModule,
    FormsModule,
    FlexLayoutModule,
    MatChipsModule,

    StoreModule.forFeature('teasers', fromTeaserStore.reducer),
    EffectsModule.forFeature(fromTeaserStore.teaserEffects),
  ],
  exports: [TeaserListComponent]
})
export class TeaserModule { }
