import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { Ingredient } from 'src/app/shared/interfaces/ingredients';
import { Dish } from 'src/app/shared/interfaces/menu';

@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.css'],
})
export class DishComponent {
  menuId!: number;
  dish!: Dish;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiServiceService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.menuId = parseInt(params['id']);

      this.getDishByIdFromApi();
    });
  }

  getDishByIdFromApi() {
    this.apiService
      .getDishById(this.menuId)
      .subscribe((data) => (this.dish = data));
  }
}
