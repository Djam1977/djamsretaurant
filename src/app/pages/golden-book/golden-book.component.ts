import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { forbidenExtensionValidator } from 'src/app/shared/validators/forbidenExtensionValidator';

@Component({
  selector: 'app-golden-book',
  templateUrl: './golden-book.component.html',
  styleUrls: ['./golden-book.component.css'],
})
export class GoldenBookComponent {
  //  Je defini variable du texte pour créer un compteur
  textMessageForCount: string = '';

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

  constructor(private formbuilder: FormBuilder) {}

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
    
      return { note : { value: control.value } };
    } else {
      return null;
    }
  }
}
