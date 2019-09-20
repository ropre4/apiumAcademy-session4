import {Component, OnDestroy, OnInit} from '@angular/core';
import { IUser, UserService } from '../../services/user.service';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {

  private user: IUser;
  private bestSequence: number;
  private subscribtions: Subscription[] = [];

  constructor(
    private userService: UserService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.subscribtions.push(this.userService.getUser().subscribe((user: IUser) => {
      this.user = user;
    }));
    this.subscribtions.push(this.userService.getBestSequence().subscribe((bestSequence: number) => {
      this.bestSequence = bestSequence;
    }));
  }

  ngOnDestroy() {
    this.subscribtions.forEach((sub: Subscription) => sub.unsubscribe());
  }

  goToLogin() {
    this.router.navigateByUrl('/');
  }

}
