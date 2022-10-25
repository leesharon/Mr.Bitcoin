import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { ContactDetailsComponent } from "./components/contact-details/contact-details.component"
import { ContactComponent } from "./pages/contact/contact.component"
import { StatisticComponent } from "./pages/statistic/statistic.component"
import { WalletComponent } from "./pages/wallet/wallet.component"

const routes: Routes = [
    {
        path: "contact/:id",
        component: ContactDetailsComponent,
    },
    {
        path: "contact",
        component: ContactComponent,
    },
    {
        path: "wallet",
        component: WalletComponent,
    },
    {
        path: "statistic",
        component: StatisticComponent,
    },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
