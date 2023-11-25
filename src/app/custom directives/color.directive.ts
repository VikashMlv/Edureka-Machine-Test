import { style } from '@angular/animations';
import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {


  constructor(private element: ElementRef) { }

  @HostListener("mouseover") onMouseOver() {
    this.element.nativeElement.classList.add('bg-success')
   console.log("success color");

  }

  @HostListener("mouseout") onMouseOut(){
    this.element.nativeElement.classList.remove('bg-success')
    console.log("remove success color");
  }


}
