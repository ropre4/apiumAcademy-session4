import { Component } from '@angular/core';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  private title = 'Welcome to Simon Says!';

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

}
