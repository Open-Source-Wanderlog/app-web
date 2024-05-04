import { Component } from '@angular/core';
import { MatDialog} from "@angular/material/dialog";
import { PopularPlacesDialogComponent } from '../popular-places-dialog/popular-places-dialog.component';
import {FlightsApiService} from "../../services/flights-api.service";
import {SpecialOffer} from "../../model/special-offer";
import {SpecialOffersDialogComponent} from "../special-offers-dialog/special-offers-dialog.component";

@Component({
  selector: 'app-body-content',
  templateUrl: './body-content.component.html',
  styleUrl: './body-content.component.css'
})
export class BodyContentComponent {
  dialogOpened = false;
  specialOffersDialogOpened = false;
  specialOffers: any[] = [];

  constructor(public dialog: MatDialog, private flightsApiService: FlightsApiService ) {this.getSpecialOffers();}

  openDialog() {
    if (!this.dialogOpened) {
      this.dialogOpened = true;
      const dialogRef = this.dialog.open(PopularPlacesDialogComponent);
      dialogRef.afterClosed().subscribe(() => {
        this.dialogOpened = false;
      });
    }
  }

  openSpecialOffersDialog() {
    if (!this.specialOffersDialogOpened) {
      this.specialOffersDialogOpened = true;
      const dialogRef = this.dialog.open(SpecialOffersDialogComponent);
      dialogRef.afterClosed().subscribe(() => {
        this.specialOffersDialogOpened = false;
      });
    }

  }

  getSpecialOffers() {
    this.flightsApiService.getSpecialOffers().subscribe((data: any) => {
      this.specialOffers = data.map((item: any) => new SpecialOffer(item));
    });
  }


}
