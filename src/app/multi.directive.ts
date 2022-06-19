import { Directive,Input ,TemplateRef,ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appMulti]'
})
export class MultiDirective {

  @Input() set appMulti(condition) {
    if(condition) {
      this.viewContRef.createEmbeddedView(this.tempRef);
    } else {
      this.viewContRef.clear();
    }
}
constructor(private tempRef: TemplateRef<any>, private viewContRef: ViewContainerRef) { }
}
