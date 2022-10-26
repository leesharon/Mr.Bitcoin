import { ContactResolver } from './services/contact.resolver'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ContactDetailsComponent } from './components/contact-details/contact-details.component'
import { ContactComponent } from './pages/contact/contact.component'
import { StatisticComponent } from './pages/statistic/statistic.component'
import { WalletComponent } from './pages/wallet/wallet.component'
import { ContactEditComponent } from './pages/contact-edit/contact-edit.component'
import { SignupComponent } from './pages/signup/signup.component'
import { AuthGuard } from './guards/auth.guard'

const routes: Routes = [
  {
    path: 'contact',
    component: ContactComponent,
    children: [{ path: 'edit', component: ContactEditComponent }],
    canActivate: [AuthGuard],
  },
  {
    path: 'contact/:id',
    component: ContactDetailsComponent,
    resolve: { contact: ContactResolver },
    canActivate: [AuthGuard],
    children: [
      {
        path: 'edit/:id',
        component: ContactEditComponent,
        resolve: { contact: ContactResolver },
      },
    ],
  },
  {
    path: 'wallet',
    component: WalletComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'statistic',
    component: StatisticComponent,
    canActivate: [AuthGuard],
  },
  {
    path: '',
    component: SignupComponent,
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
