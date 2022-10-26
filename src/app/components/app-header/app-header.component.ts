import { Component, OnDestroy, OnInit } from '@angular/core'
import { NavigationEnd, Router } from '@angular/router'
import { Subscription } from 'rxjs'
import { UserService } from 'src/app/services/user.service'

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss'],
})
export class AppHeaderComponent implements OnInit, OnDestroy {
  constructor(private userService: UserService, private router: Router) {}

  paramsSubscription!: Subscription

  loggedinUser = this.userService.getUser()
  isSignup!: boolean

  ngOnInit(): void {
    this.paramsSubscription = this.router.events.subscribe((data) => {
      if (data instanceof NavigationEnd) {
        this.isSignup = data.url === '/'
      }
    })
  }

  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe()
  }

  logout() {
    sessionStorage.removeItem('loggedinUser')
  }
}
