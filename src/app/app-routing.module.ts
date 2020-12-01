import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DataContentComponent } from './data-content/data-content.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { RegisterComponent } from './register/register.component';
import { AriclesComponent } from './aricles/aricles.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AuthGuard } from './auth.guard';
import { DetailArticleComponent } from './detail-article/detail-article.component';
import { ContatDetailsComponent } from './contat-details/contat-details.component';
import { CreateArticleComponent } from './create-article/create-article.component';
const routes: Routes = [
  // {
  //   path: '',
  //   component:LoginComponent
  // },
  {
    path:'create-article',
    component: CreateArticleComponent
  },
  {
    path:'contact/:id',
    component: ContatDetailsComponent
  },
  {
    path:'property/:id',
    component: DetailArticleComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: DataContentComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'articles', component: AriclesComponent },
  { path: 'contact-us', component: ContactUsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
