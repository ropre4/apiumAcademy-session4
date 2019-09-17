import {Component, Input, OnInit} from '@angular/core';

type Size = 'small' | 'medium' | 'large';
type BtnType = 'default' | 'ghost' | 'plain';
type Color = 'primary' | 'secondary' | 'danger' | 'gray';
type iconPosition = 'left' | 'right';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() public text: string;
  @Input() public size: Size = 'medium';
  @Input() public btnType: BtnType = 'default';
  @Input() public color: Color = 'primary';
  @Input() public icon: string;
  @Input() public iconPosition: iconPosition = 'right';
  constructor() { }

  ngOnInit() {
  }

}
