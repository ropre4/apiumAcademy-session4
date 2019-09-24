import {Component, NgZone, OnInit} from '@angular/core';

@Component({
  selector: 'app-zone-demo',
  templateUrl: './zone-demo.component.html',
  styleUrls: ['./zone-demo.component.scss']
})
export class ZoneDemoComponent implements OnInit {

  public progress = 0;

  constructor(private zone: NgZone) { }

  ngOnInit() {
  }

  processWithinAngularZone() {
    this.progress = 0;
    this.increaseProgress(() => console.log('Done!'));
  }

  processOutsideAngularZone() {
    this.progress = 0;
    this.zone.runOutsideAngular(() => {
      this.increaseProgress(() => {
        this.zone.run(() => {
          console.log('Outside Done!');
        });
      });
    });
  }

  increaseProgress(doneCallback: () => void) {
    this.progress += 1;
    console.log(`Current progress: ${this.progress}%`);

    if (this.progress < 100) {
      setTimeout(() => {
        this.increaseProgress(doneCallback);
      }, 20);
    } else {
      doneCallback();
    }
  }

}
