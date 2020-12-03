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
import { EditArticleComponent } from './edit-article/edit-article.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component'
const routes: Routes = [
  // {
  //   path: '',
  //   component:LoginComponent
  // },
  {
    path: 'edit-article/:id',
    component: EditArticleComponent,
   // canActivate: [AuthGuard]
  },
  {
    path: 'create-article',
    component: CreateArticleComponent,
  //  canActivate: [AuthGuard]
  },
  {
    path: 'contact/:id',
    component: ContatDetailsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'property/:id',
    component: DetailArticleComponent,
    canActivate: [AuthGuard]
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
  {
    path: 'about-us',
    component: AboutUsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'articles',
    component: AriclesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'contact-us',
    component: ContactUsComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'reset-password',
    component: ResetPasswordComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
