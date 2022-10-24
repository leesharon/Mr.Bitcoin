import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component'
import { AppHeaderComponent } from './components/app-header/app-header.component'
import { ContactComponent } from './pages/contact/contact.component'
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { ContactPreviewComponent } from './components/contact-preview/contact-preview.component'

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    ContactComponent,
    ContactListComponent,
    ContactPreviewComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
