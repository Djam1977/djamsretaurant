import { emitDistinctChangesOnlyDefaultValue } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { first, last } from 'rxjs';

@Component({
  selector: 'app-golden-book',
  templateUrl: './golden-book.component.html',
  styleUrls: ['./golden-book.component.css'],
})
export class GoldenBookComponent {
  // création d'un formgroupe
  commentForm = this.formbuilder.group({
    // création pour chacun des input un formcontrol
    firstnameController: ['', [Validators.required]],
    lastnameController: ['', [Validators.required]],
    emailController: ['', [Validators.required, Validators.email]],
    messageController: [
      '',
      [Validators.required,
      Validators.minLength(5),
      Validators.maxLength(2000)
    ]],
  });
  constructor(private formbuilder: FormBuilder) {}

  onSubmitForm() {
    console.log(this.commentForm.value);
  }
}
