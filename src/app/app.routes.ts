/**
 * Created by sravankumarbommana on 8/30/16.
 */
import { provideRouter }  from '@angular/router';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

//Specifying Route Paths and Components
const APP_ROUTES = [
  { path: 'home', component: UserComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent }


];

export const APP_ROUTES_PROVIDER = [

  provideRouter(APP_ROUTES)

];
