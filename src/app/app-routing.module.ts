import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { GreenHousesComponent } from './components/green-houses/green-houses.component';
import { SuppliesComponent } from './components/supplies/supplies.component';
import { GuidlinesComponent } from './components/guidlines/guidlines.component';
import { SystemsComponent } from './components/systems/systems.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about',component:AboutUsComponent},
  {path:'contact-us',component:ContactUsComponent},
  {path:'gallery',component:GalleryComponent},
  {path:'green-houses',component:GreenHousesComponent},
  {path:'supplies',component:SuppliesComponent},
  {path:'guidlines',component:GuidlinesComponent},
  {path:'irrigation-systems',component:SystemsComponent},
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
