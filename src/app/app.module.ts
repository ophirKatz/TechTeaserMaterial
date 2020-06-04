import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { DefaultModule } from './layouts/default/default.module';

import { NotificationsService } from './common/services/notifications/notifications.service';
import { Client } from './communication/client';
import { ServerListeners } from './communication/server-listeners/server-listeners';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule,

    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([])
  ],
  providers: [
    NotificationsService,
    Client,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private client: Client,
    private serverListeners: ServerListeners) {
  }
}
