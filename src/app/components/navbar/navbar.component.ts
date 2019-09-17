import { Component, OnInit } from '@angular/core';
import { IUser, UserService } from '../../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  private user: IUser;
  private bestSequence: number;

  constructor(
    private userService: UserService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.userService.getUser().subscribe((user: IUser) => {
      this.user = user;
    });
    this.userService.getBestSequence().subscribe((bestSequence: number) => {
      this.bestSequence = bestSequence;
    });
  }

  goToLogin() {
    this.router.navigateByUrl('/');
  }

}
