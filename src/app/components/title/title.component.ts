import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TitleComponent implements OnInit, OnDestroy {

  public counter = 0;
  public sub: Subscription;

  @Input() public title: {a: string};
  @Input() public counter$: Observable<any>;

  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.sub = this.counter$.subscribe( () => {
      this.counter++;
      // this.cd.markForCheck();
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
