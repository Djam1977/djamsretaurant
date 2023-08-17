import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Ingredient } from 'src/app/shared/interfaces/ingredients';
import { Flat } from 'src/app/shared/interfaces/menu';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-flat',
  templateUrl: './flat.component.html',
  styleUrls: ['./flat.component.css'],
})
export class FlatComponent {
  menuId!: number;
  flat!: Flat;
  ingredientsListToDisplay!: Ingredient[];

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiServiceService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.menuId = parseInt(params['id']);

      // this.getMenuFromApi();
      this.getFlatByIdFromApi();
    });
  }

  getFlatByIdFromApi() {
    this.apiService
      .getFlatById(this.menuId)
      .subscribe((data) => (this.flat = data));
  }
}
// Je veux recuperer id(number) demandé au click  du plat qui est dans la liste , selectionner
// en comparant l'id dans le [] avec true ou false retourne moi l'objet {{menu}}
// return this.http.get(`${this.baseUrl}/menu.id`);
