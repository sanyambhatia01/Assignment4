import { Directive, HostBinding, HostListener, OnInit, Renderer2 } from '@angular/core';
 
@Directive({
  selector: '[appHover]'
})
export class HoverDirective implements OnInit{
 
  constructor(private renderer : Renderer2) { }
  @HostBinding('style.height') h:string='100px';
  @HostBinding('style.width') w:string='100px';
 
  ngOnInit(){
    this.h='100px';
  }
  @HostListener('mouseenter') mouseEnter(){
    this.h='300px';
    this.w='300px';
  }
  @HostListener('mouseleave') mouseLeave(){
    this.h='100px';
    this.w='100px';
  }
}
