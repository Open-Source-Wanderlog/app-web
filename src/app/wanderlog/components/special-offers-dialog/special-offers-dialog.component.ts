import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FlightsApiService } from '../../services/flights-api.service';
import { SpecialOffer } from '../../model/special-offer';

@Component({
  selector: 'app-special-offers-dialog',
  templateUrl: './special-offers-dialog.component.html',
  styleUrls: ['./special-offers-dialog.component.css']
})
export class SpecialOffersDialogComponent implements OnInit {
  specialOffers: SpecialOffer[] = [];

  constructor(
      public dialogRef: MatDialogRef<SpecialOffersDialogComponent>,
      private flightsApiService: FlightsApiService
  ) {}

  ngOnInit() {
    this.getSpecialOffers();
  }

  getSpecialOffers() {
    this.flightsApiService.getSpecialOffers().subscribe((data: any) => {
      this.specialOffers = data.map((item: any) => new SpecialOffer(item));
    });
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
