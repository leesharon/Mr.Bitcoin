import { ContactResolver } from './services/contact.resolver'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ContactDetailsComponent } from './components/contact-details/contact-details.component'
import { ContactComponent } from './pages/contact/contact.component'
import { StatisticComponent } from './pages/statistic/statistic.component'
import { WalletComponent } from './pages/wallet/wallet.component'

const routes: Routes = [
  {
    path: 'contact/:id',
    component: ContactDetailsComponent,
    resolve: { contact: ContactResolver },
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'wallet',
    component: WalletComponent,
  },
  {
    path: 'statistic',
    component: StatisticComponent,
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
