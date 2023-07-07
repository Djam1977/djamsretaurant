import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { forbidenExtensionValidator } from 'src/app/shared/validators/forbidenExtensionValidator';
import { commentsGoldenBook } from 'src/app/shared/data/fake-data';
import { Comment } from 'src/app/shared/interfaces/comment';
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
    firstnameController: ['', [Validators.required]],
    lastnameController: ['', [Validators.required]],
    emailController: [
      '',
      [Validators.required, Validators.email, forbidenExtensionValidator],
    ],
    noteController: [0, [this.noteValidator]],
    messageController: [
      '',
      [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(2000),
      ],
    ],
  });

 
 changeCommentVisible: boolean = false;
  constructor(private formbuilder: FormBuilder) {}

  ngOnInit(): void {
    this.getCommentsFromAPI();
  }
// ici la methode ne retourne pas de valeurs, la variable initié à false retourne true et inverserment graçe au !
  
  onClickaddcomment(): void {
    this.changeCommentVisible = !this.changeCommentVisible
  }

  getCommentsFromAPI() {
    // this.apiService.getUnapprovedComments().subscribe((data) => {
    //   this.comments = data;
    //   this.commentsToDisplay = data;
    // });
    this.commentsToDisplay = commentsGoldenBook;
  }

  onSubmitForm() {}
  setNoteComment(star: number) {
    this.commentForm.controls.noteController.setValue(star);
  }
  noteValidator(control: AbstractControl): ValidationErrors | null {
    //  verifie si true ou false correspond à > 0
    const isValid = (control.value as number) > 0;
    // si false

    if (!isValid) {
      // renvoir un objet clé valeur

      return { note: { value: control.value } };
    } else {
      return null;
    }
  }
}
