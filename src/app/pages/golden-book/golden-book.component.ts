import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { forbidenExtensionValidator } from 'src/app/shared/validators/forbidenExtensionValidator';

import { Comment } from 'src/app/shared/interfaces/comment';
import { ApiServiceService } from 'src/app/services/api-service.service';
@Component({
  selector: 'app-golden-book',
  templateUrl: './golden-book.component.html',
  styleUrls: ['./golden-book.component.css'],
})
export class GoldenBookComponent {
  //  Je defini variable du texte pour créer un compteur
  textMessageForCount: string = '';
  commentsToDisplay!: Comment[];

  // création d'un formgroupe
  commentForm = this.formbuilder.group({
    // création pour chacun des input un formcontrol
    firstname: ['', [Validators.required]],
    lastname: ['', [Validators.required]],
    email: [
      '',
      [Validators.required, Validators.email, forbidenExtensionValidator],
    ],
    message: [
      '',
      [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(2000),
      ],
    ],
    rating: [0, [this.noteValidator]],
  });

  messageReponse: string = '';

  changeCommentVisible: boolean = false;
  constructor(
    private formbuilder: FormBuilder,
    private apiService: ApiServiceService
  ) {}

  ngOnInit(): void {
    this.getCommentsFromAPI();
  }
  // ici la methode ne retourne pas de valeurs, la variable initié à false retourne true et inverserment graçe au !

  onClickAddComment(): void {
    this.changeCommentVisible = !this.changeCommentVisible;
  }

  getCommentsFromAPI() {
    this.apiService.getComments().subscribe((data) => {
      this.commentsToDisplay = data;
      // Mon [] commentsTodisplay est = à mon [] commentsToDisplay filtre  pour chaque objet (item) de mon [] et verifie si = true, "je pourrais ne pas indiquer === true, mais cela aide à comprendre le code"

      this.commentsToDisplay = this.commentsToDisplay.filter(
        (item) => item.verifiedByAdmin === true
      );
    });
  }

  onSubmitForm() {
    if (this.commentForm.valid) {
      this.apiService.postComment(this.commentForm).subscribe((data) => {
        this.messageReponse = data.message;

        setTimeout(() => {
          this.messageReponse = '';
        }, 3000); /* rappel après 3 secondes = 3000 millisecondes */

        this.commentForm.controls.firstname.setValue('');
        this.commentForm.controls.lastname.setValue('');
        this.commentForm.controls.message.setValue('');
        this.commentForm.controls.rating.setValue(0);
        this.commentForm.controls.email.setValue('');
        this.onClickAddComment();
      });
    }
  }
  setNoteComment(star: number) {
    this.commentForm.controls.rating.setValue(star);
  }
  noteValidator(control: AbstractControl): ValidationErrors | null {
    //  verifie si true ou false correspond à > 0
    const isValid =
      (control.value as number) > 0 && (control.value as number) < 6;
    // si false
    // return isValid ? null :  { note: { value: control.value } }
    if (!isValid) {
      // renvoir un objet clé valeur

      return { note: { value: control.value } };
    } else {
      return null;
    }
  }
}
