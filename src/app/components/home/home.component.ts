import {ChangeDetectionStrategy, Component} from '@angular/core';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public title: {a: string} = {a: 'a'};
  public counter$ = new Subject();

  constructor(
    private userService: UserService,
    private router: Router,
  ) { }

  private onSubmit(data: any) {
      this.userService.setUser({
        name: data.name,
        email: data.email
      });
      this.router.navigateByUrl('game');
  }

  public changeTitle() {
    this.title = {a: '' + Date.now()};
    // this.title.a = '' + Date.now();
  }

  public emitSomething() {
    this.counter$.next( Date.now());
  }
}
