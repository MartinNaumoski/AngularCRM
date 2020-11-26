import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DataContentComponent} from './data-content/data-content.component'
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path:'' ,component:DataContentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
