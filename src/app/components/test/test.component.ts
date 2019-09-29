import { Component, QueryList, ViewChildren} from '@angular/core';
import {CollapseDirective, ICollapseDirective} from '../../directives/collapse.directive';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {

  @ViewChildren(CollapseDirective) private list: QueryList<CollapseDirective>;

  public accordions = ['1', '2', '3'];

  constructor() { }



  closeAll() {
    this.list.forEach((dir: ICollapseDirective) => dir.close());
  }

}
