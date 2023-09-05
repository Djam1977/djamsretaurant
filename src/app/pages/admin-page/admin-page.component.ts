import { Component, NgModule } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { Comment } from 'src/app/shared/interfaces/comment';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css'],
})
export class AdminPageComponent {
 
  commentsToDisplay!: Comment[];
 
  comment!: Comment;
  commentSelected!: number;

  // au click du html la methode est déclenché et réceptionne le "menu .id" envoyé html
 

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

    private formbuilder: FormBuilder,
    private apiService: ApiServiceService,
    private authService: AuthServiceService
  ) {}



  ngOnInit() {
    this.getCommentsFromAPI();
   
   

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

  logOutFromService(): void {
    this.authService.logOut();
  }

}
