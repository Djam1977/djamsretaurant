import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { Dish } from 'src/app/shared/interfaces/menu';

@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.css'],
})
export class DishComponent {
  menuId!: number;
  dish!: Dish;

  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.menuId = parseInt(params['id']);

      this.getDishByIdFromApi();
    });
  }

  getDishByIdFromApi() {
    this.apiService.getDishById(this.menuId).subscribe((data) => {
      this.dish = data;
    });
  }
}
