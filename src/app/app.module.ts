import { NavbarsComponent } from './components/navbars/navbars.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { GreenHousesComponent } from './components/green-houses/green-houses.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { SuppliesComponent } from './components/supplies/supplies.component';
import { HeaderComponent } from './components/navbars/header/header.component';
import { FooterComponent } from './components/navbars/footer/footer.component';
import { GuidlinesComponent } from './components/guidlines/guidlines.component';
import { SystemsComponent } from './components/systems/systems.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SlidesComponent } from './components/home/slides/slides.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactUsComponent,
    AboutUsComponent,
    GreenHousesComponent,
    GalleryComponent,
    SuppliesComponent,
    HeaderComponent,
    FooterComponent,
    GuidlinesComponent,
    SystemsComponent,
    NotFoundComponent,
    NavbarsComponent,
    SlidesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
