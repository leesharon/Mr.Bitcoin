import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"

import { AppRoutingModule } from "./app-routing.module"
import { HttpClientModule } from "@angular/common/http"
import { AppComponent } from "./app.component"
import { AppHeaderComponent } from "./components/app-header/app-header.component"
import { ContactComponent } from "./pages/contact/contact.component"
import { ContactListComponent } from "./components/contact-list/contact-list.component"
import { ContactPreviewComponent } from "./components/contact-preview/contact-preview.component"
import { ContactFilterComponent } from "./components/contact-filter/contact-filter.component"
import { StatisticComponent } from "./pages/statistic/statistic.component"
import { ChartComponent } from "./components/chart/chart.component"
import { FormsModule } from "@angular/forms"
import { CommonModule } from "@angular/common"
import { WalletComponent } from "./pages/wallet/wallet.component"
import { ContactEditComponent } from "./pages/contact-edit/contact-edit.component"
import { ContactDetailsComponent } from "./components/contact-details/contact-details.component"
import { SignupComponent } from "./pages/signup/signup.component";
import { RecommendationComponent } from './components/recommendation/recommendation.component';
import { TransactionListComponent } from './components/transaction-list/transaction-list.component';
import { TransactioPreviewComponent } from './components/transactio-preview/transactio-preview.component'

@NgModule({
    declarations: [
        AppComponent,
        AppHeaderComponent,
        ContactComponent,
        ContactListComponent,
        ContactDetailsComponent,
        ContactPreviewComponent,
        ContactFilterComponent,
        StatisticComponent,
        ChartComponent,
        WalletComponent,
        ContactEditComponent,
        SignupComponent,
        RecommendationComponent,
        TransactionListComponent,
        TransactioPreviewComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        CommonModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
