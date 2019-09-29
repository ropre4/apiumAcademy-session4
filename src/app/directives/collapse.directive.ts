import {Directive, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, Renderer2} from '@angular/core';

export interface ICollapseBox {
  toggle: () => void;
  close: () => void;
}

export interface ICollapseDirective {
  close: () => void;
}

@Directive({
  selector: '[appCollapse]'
})
export class CollapseDirective implements OnInit, ICollapseDirective {

  @Input() appCollapse: ICollapseBox;
  @Input() open = false;
  @Output() clickedOnMe = new EventEmitter<any>();


  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.renderer.setStyle(this.el.nativeElement, 'color', 'blue');
    if (!this.open) {
      this.appCollapse.close();
    }
  }

  close() {
    this.appCollapse.close();
  }

  @HostListener('click')
  private onClick() {
    this.clickedOnMe.emit();
    this.appCollapse.toggle();
  }

}
