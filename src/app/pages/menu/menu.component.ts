import { Component, OnInit } from '@angular/core';
import { Type } from 'src/app/shared/interfaces/type';
import { Ingredient } from 'src/app/shared/interfaces/ingredients';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  dishesToDisplay: any[] = [];
  typeToDisplay!: Type[];
  ingredientsListToDisplay: Ingredient[] = [];

  constructor(private apiService: ApiService) {}
  ngOnInit(): void {
    this.getDishesFromApiService();
    // this.getIngredientsFromApiService();
    this.getTypesFromApiService();
  }

  getDishesFromApiService() {
    this.apiService.getDishes().subscribe((data) => {
      this.dishesToDisplay = data;
    });
  }

  getTypesFromApiService() {
    this.apiService.getTypes().subscribe((data) => {
      this.typeToDisplay = data;
    });
  }
}
