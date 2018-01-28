import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  @HostBinding('class.hovered') isHovered = false;

  @HostListener('mouseenter') omMouseEnter() {
    this.isHovered = true;
  }

  @HostListener('mouseleave') omMouseLeave() {
    this.isHovered = false;
  }

  constructor() { }

}
