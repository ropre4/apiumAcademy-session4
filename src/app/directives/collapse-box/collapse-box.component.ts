import { Component, OnInit } from '@angular/core';
import {ICollapseBox} from '../collapse.directive';

@Component({
  selector: 'app-collapse-box',
  templateUrl: './collapse-box.component.html',
  styleUrls: ['./collapse-box.component.scss']
})
export class CollapseBoxComponent implements OnInit, ICollapseBox {

  private open = true;

  constructor() { }

  ngOnInit() {
  }

  public toggle() {
    this.open = !this.open;
  }

  public close() {
    this.open = false;
  }

}
