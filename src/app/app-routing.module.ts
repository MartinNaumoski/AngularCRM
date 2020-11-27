import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DataContentComponent} from './data-content/data-content.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component'
import { RegisterComponent } from './register/register.component'
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path:'' , component:DataContentComponent },
  { path:'home', component: HomeComponent },
  { path:'about-us',component: AboutUsComponent},
  { path:'register',component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
