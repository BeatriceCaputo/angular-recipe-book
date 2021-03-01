import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class')
  currentClass:  string;
  
  @HostListener('click')
  onClick(){
    this.currentClass==='open' ? this.currentClass = '' : this.currentClass = 'open';
  }
  constructor() { }

}
