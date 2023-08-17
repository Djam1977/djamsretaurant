import { Component } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { Flat } from 'src/app/shared/interfaces/menu';
@Component({
  selector: 'app-admin-delete-flat',
  templateUrl: './admin-delete-flat.component.html',
  styleUrls: ['./admin-delete-flat.component.css'],
})
export class AdminDeleteFlatComponent {
  ngOnInit() {
    this.getFlatsFromApiService();
  }

  flatsToDisplay!: Flat[];

  constructor(private apiService: ApiServiceService) {}

  getFlatsFromApiService() {
    this.apiService
      .getFlats()
      .subscribe((data) => (this.flatsToDisplay = data));
  }

  deleteFlatFromApiService(id: number) {
    this.apiService.deleteFlat(id).subscribe(() => location.reload());
  }
}
