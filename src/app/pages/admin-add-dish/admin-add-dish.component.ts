import { Type } from 'src/app/shared/interfaces/type';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { Ingredient } from 'src/app/shared/interfaces/ingredients';
import { Dish } from 'src/app/shared/interfaces/menu';

@Component({
  selector: 'app-admin-add-dish',
  templateUrl: './admin-add-dish.component.html',
  styleUrls: ['./admin-add-dish.component.css'],
})
export class AdminAddDishComponent {
  menu!: Dish;
  menusToDisplay!: Dish[];
  typeToDisplay!: Type[];
  messageReponse: string = '';

  ingredientsListToDisplay!: Ingredient[];
  ingredientsFilter!: Ingredient[];
  arrayForIngredientsAdd: number[] = [];

  constructor(
    private formbuilder: FormBuilder,
    private apiService: ApiService
  ) {}

  addNewMenuForm = this.formbuilder.group({
    // création pour chacun des input un formcontrol

    type: ['', [Validators.required]],
    name: ['', [Validators.required]],
    price: ['', [Validators.required]],
    ingredients: [[0], [Validators.required]],
    image: ['', [Validators.required]],
  });
  onSubmitForm() {
    this.postDishFromApi();
  }

  ngOnInit() {
    this.getTypesFromService();
    this.getIngredientsFromService();
  }

  // permet de cocher les ingrédient  en filtrant et en pushant, sans que les valeurs soit pusher aux décochage
  chooseIngredients(idIngredient: number): void {
    if (this.arrayForIngredientsAdd.includes(idIngredient)) {
      this.arrayForIngredientsAdd = this.arrayForIngredientsAdd.filter(
        (item) => item !== idIngredient
      );
    } else {
      this.arrayForIngredientsAdd.push(idIngredient);
    }

    this.addNewMenuForm.controls.ingredients.setValue(
      this.arrayForIngredientsAdd
    );
  }

  getLettersForFiltersIngredients(event: any) {
    this.ingredientsListToDisplay = this.ingredientsFilter.filter((item) =>
      item.name.toUpperCase().includes(event.target.value.toUpperCase())
    );
  }
  getTypesFromService() {
    this.apiService.getTypes().subscribe((data) => {
      this.typeToDisplay = data;
    });
  }
  getIngredientsFromService() {
    this.apiService.getIngredients().subscribe((data) => {
      this.ingredientsListToDisplay = data;
      this.ingredientsFilter = data;
    });
  }
  postDishFromApi() {
    if (this.addNewMenuForm.valid) {
      // création de la variable avec un tableau d'ingredients vide
      let ingredientsToSend = [];
      // Avec la boucle iteration des id ingrédients dans le tableau pour le transformer en objet
      for (let ingredient of this.arrayForIngredientsAdd) {
        ingredientsToSend.push({ id: ingredient });
      }
      // Je renvoie ce que le back attent comme typage avec ma variable
      let newDishToSend = {
        type: { id: parseInt(this.addNewMenuForm.value.type!) },
        image: this.addNewMenuForm.value.image,
        name: this.addNewMenuForm.value.name,
        price: this.addNewMenuForm.value.price,
        titre: this.addNewMenuForm.value.name,
        ingredients: ingredientsToSend,
      };

      this.apiService.postDish(newDishToSend).subscribe((data) => {
        this.messageReponse = data.message;
        setTimeout(() => {
          this.messageReponse = '';
        }, 3000);

        this.addNewMenuForm.reset();
        this.arrayForIngredientsAdd = [];
      });
    }
  }
}
