import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: "Home", component: HomeComponent, title: 'Home' },
  { path: "About", component: AboutComponent, title: 'About' },
  { path: "Portfolio", component: PortfolioComponent, title: 'Portfolio' },
  { path: "Contact", component: ContactComponent, title: 'Contact' },
  { path: "", redirectTo: 'Home', pathMatch: "full" },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
