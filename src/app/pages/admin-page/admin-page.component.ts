import { Component, NgModule } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Type } from 'src/app/shared/interfaces/type';
import { Flat } from 'src/app/shared/interfaces/menu';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Ingredient } from 'src/app/shared/interfaces/ingredients';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { Comment } from 'src/app/shared/interfaces/comment';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css'],
})
export class AdminPageComponent {
  menu!: Flat;
  menusToDisplay!: Flat[];
  typeToDisplay!: Type[];
  textMessageForCount: string = '';
  ingredientsListToDisplay!: Ingredient[];
  ingredientsFilter!: Ingredient[];
  arrayForIngredientsAdd: number[] = [];
  commentsToDisplay!: Comment[];
  changeMenuCommentVisible: boolean = true;
  comment!: Comment;
  commentSelected!: number;

  // au click du html la methode est déclenché et réceptionne le "menu .id" envoyé html
  onClickChangePage(): void {
    this.changeMenuCommentVisible = !this.changeMenuCommentVisible;
  }

  // deleteMenu(id: number) {
  //refait le tour complet de la liste de menu
  // for (let i = 0; i < this.menusList.length; i++) {
  //  et regarde Si l'id envoyé en argument de la méthode
  // if (this.menusList[i].id === id) {
  // Si id trouvé retire l'objet de la liste de menu affichée
  //       this.menusToDisplay.splice(i, 1);
  //     }
  //   }
  // }
  constructor(
    private route: ActivatedRoute,
    private formbuilder: FormBuilder,
    private apiService: ApiServiceService,
    private authService: AuthServiceService
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
    this.postFlatFromApi();
  }

  ngOnInit() {
    this.getCommentsFromAPI();
    this.addNewMenuForm.valueChanges.subscribe((data) => {});
    this.getTypesFromService();
    this.getIngredientsFromService();

    // Mon [] commentsTodisplay est = à mon [] commentsToDisplay filtre  l'item et verifie si =  false
    // this.commentsToDisplay = this.commentsToDisplay.filter((item) => item.isVerifiedByAdmin=== false);
  }
  getCommentsFromAPI() {
    this.apiService.getComments().subscribe((data) => {
      this.commentsToDisplay = data;
      // Mon [] commentsTodisplay est = à mon [] commentsToDisplay filtre  pour chaque objet (item) de mon [] et verifie si = true, "je pourrais ne pas indiquer === true, mais cela aide à comprendre le code"

      this.commentsToDisplay = this.commentsToDisplay.filter(
        (item) => !item.verifiedByAdmin
      );
    });
  }

  //Methode qui prend en parametre 2 argumentsde type number(toto), qui seront envoyés par la boucle en Html
  deleteCommentFromService(commentSelected: number): void {
    this.apiService
      .deleteComment(commentSelected)
      .subscribe(() => location.reload());
  }
  acceptCommentFromService(commentSelected: number, comment: Comment): void {
    this.apiService
      .putComment(commentSelected, comment)
      .subscribe(() => location.reload());
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
  logOutFromService(): void {
    this.authService.logOut();
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
  postFlatFromApi() {
    this.apiService.postFlat(this.addNewMenuForm).subscribe();
  }
}
