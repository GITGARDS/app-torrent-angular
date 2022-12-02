import { Directive, OnInit, Input } from "@angular/core";
import {
  AbstractControl,
  FormControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from "@angular/forms";

@Directive({
  selector: "[appMinimoValidator]",
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: MinimoValidatorDirective,
      multi: true,
    },
  ],
})
export class MinimoValidatorDirective implements Validator, OnInit {
  @Input("valorMinimo") valorMinimo: string = "0";

  constructor() {}

  validate(c: FormControl) {
    let v: number = +c.value;
    if (isNaN(v)) {
      return { minimo: true, requiredValue: +this.valorMinimo };
    }
    if (v < +this.valorMinimo) {
      return { minimo: true, requiredValue: +this.valorMinimo };
    }
    return null;
  }

  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
  registerOnValidatorChange?(fn: () => void): void {
    throw new Error("Method not implemented.");
  }
}
