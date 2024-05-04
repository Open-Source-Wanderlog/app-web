import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule} from "@angular/material/toolbar";
import { MatDialogModule} from "@angular/material/dialog";
import {HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarContentComponent } from './wanderlog/components/toolbar-content/toolbar-content.component';
import {MatButton} from "@angular/material/button";
import { BodyContentComponent } from './wanderlog/components/body-content/body-content.component';
import {NgOptimizedImage} from "@angular/common";
import { PopularPlacesDialogComponent } from './wanderlog/components/popular-places-dialog/popular-places-dialog.component';
import { SpecialOffersDialogComponent } from './wanderlog/components/special-offers-dialog/special-offers-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarContentComponent,
    BodyContentComponent,
    PopularPlacesDialogComponent,
    SpecialOffersDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButton,
    NgOptimizedImage,
    MatDialogModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
