import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @HostBinding('style.backgroundColor') backgroundColor: string | undefined;
  highlightColor: string | undefined;
  defaultColor: string | undefined;
 
  constructor(private elementRef: ElementRef ,private renderer : Renderer2) { }

  @HostListener('mouseenter') mouseover(eventData: Event){
    //this.renderer.setStyle(this.elementRef.nativeElement,'background-color','pink');
    this.backgroundColor =this.highlightColor = "green";
  }

  @HostListener('mouseleave') mouseleave(eventData: Event){
    //this.renderer.setStyle(this.elementRef.nativeElement,'background-color','transparent');
    this.backgroundColor = this.defaultColor;
  }

}
