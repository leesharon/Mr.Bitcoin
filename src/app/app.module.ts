import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"

import { AppRoutingModule } from "./app-routing.module"
import { AppComponent } from "./app.component"
import { AppHeaderComponent } from "./components/app-header/app-header.component"
import { ContactDetailsComponent } from "./components/contact-details/contact-details.component"

@NgModule({
    declarations: [AppComponent, AppHeaderComponent, ContactDetailsComponent],
    imports: [BrowserModule, AppRoutingModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
