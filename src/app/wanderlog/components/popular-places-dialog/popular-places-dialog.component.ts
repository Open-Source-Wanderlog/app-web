import { Component, OnInit } from '@angular/core';
import { MatDialogRef} from "@angular/material/dialog";
import { FlightsApiService } from '../../services/flights-api.service';
import { Source } from '../../model/source';

@Component({
  selector: 'app-popular-places-dialog',
  templateUrl: './popular-places-dialog.component.html',
})
export class PopularPlacesDialogComponent implements OnInit {
  sources: Source[] = [];

  constructor(
      private flightsApiService: FlightsApiService,
      public  dialogRef: MatDialogRef<PopularPlacesDialogComponent>
  ) {}

  ngOnInit(): void {
    this.flightsApiService.getSources().subscribe((data: any) => {
      this.sources = data.map((item: any) => new Source(item));
    });
  }

  closeDialog() {
    this.dialogRef.close();
  }
}