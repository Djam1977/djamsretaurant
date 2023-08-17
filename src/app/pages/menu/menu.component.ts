import { Component, OnInit } from '@angular/core';
import { Flat } from 'src/app/shared/interfaces/menu';
import { Type } from 'src/app/shared/interfaces/type';
import { Ingredient } from 'src/app/shared/interfaces/ingredients';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  flatsToDisplay: any[] = [];
  typeToDisplay!: Type[];
  ingredientsListToDisplay: Ingredient[] = [];

  constructor(private apiService: ApiServiceService) {}
  ngOnInit(): void {
    this.getFlatsFromApiService();
    // this.getIngredientsFromApiService();
    this.getTypesFromApiService();
  }

  getFlatsFromApiService() {
    this.apiService.getFlats().subscribe((data) => {
      this.flatsToDisplay = data;
    });
  }

  getTypesFromApiService() {
    this.apiService.getTypes().subscribe((data) => {
      this.typeToDisplay = data;
    });
  }
}
