import { Directive, ElementRef, HostListener } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

@Directive({
  selector: "[appNumerico]",
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: NumericoDirective,
      multi: true,
    },
  ],
})
export class NumericoDirective implements ControlValueAccessor {
  @HostListener("keyup", ["$event"])
  onKeyUp($event: any) {
    let valor = $event.target.value;

    valor = valor.replace(/[\D]/g, "");

    $event.target.value = valor;

    this.onChange(valor);
  }

  constructor(private el: ElementRef) {}

  onChange: any;
  onTouched: any;

  writeValue(obj: any): void {
    this.el.nativeElement.value = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    throw new Error("Method not implemented.");
  }
}
