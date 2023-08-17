//
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
// function récupére le control
export function forbidenExtensionValidator(
  control: AbstractControl
): ValidationErrors | null {
  //  verifie si true ou false correspond à .com, .net, .fr
  const isValid =
    (control.value as string).endsWith('.com') ||
    (control.value as string).endsWith('.net') ||
    (control.value as string).endsWith('.fr');
  // si false
  if (!isValid) {
    // renvoir un objet clé valeur

    return { extension: { value: control.value } };
  } else {
    return null;
  }
}
