import { Component } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { Dish } from 'src/app/shared/interfaces/menu';

@Component({
  selector: 'app-admin-delete-dish',
  templateUrl: './admin-delete-dish.component.html',
  styleUrls: ['./admin-delete-dish.component.css'],
})
export class AdminDeleteDishComponent {
 

  dishesToDisplay!: Dish[];
  ngOnInit() {
    this.getDishesFromApiService();
  }
  constructor(private apiService: ApiServiceService) {}

  getDishesFromApiService() {
    this.apiService
      .getDishes()
      .subscribe((data) => (this.dishesToDisplay = data));
  }

  deleteDishFromApiService(id: number) {
    this.apiService
      .deleteDish(id)
      .subscribe(
        () =>
          (this.dishesToDisplay = this.dishesToDisplay.filter(
            (dish) => dish.id !== id
          ))
      );
  }
}
