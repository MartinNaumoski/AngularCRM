

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { DataContentComponent } from './data-content/data-content.component';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { LoginComponent } from './login/login.component';
import { LoginHeaderComponent } from './login-header/login-header.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { RegisterComponent } from './register/register.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { AriclesComponent } from './aricles/aricles.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from './auth.guard'
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './token.interceptor';
import { DetailArticleComponent } from './detail-article/detail-article.component';
import { ContatDetailsComponent } from './contat-details/contat-details.component';
import { CreateArticleComponent } from './create-article/create-article.component';
import { EditArticleComponent } from './edit-article/edit-article.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { AboutComponent } from './about/about.component';
import { CarouselComponent } from './carousel/carousel.component'
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { DetailPropertyComponent } from './detail-property/detail-property.component';  

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DataContentComponent,
    LoginComponent,
    LoginHeaderComponent,
    HomeComponent,
    AboutUsComponent,
    RegisterComponent,
    SideBarComponent,
    AriclesComponent,
    ContactUsComponent,
    DetailArticleComponent,
    ContatDetailsComponent,
    CreateArticleComponent,
    EditArticleComponent,
    ResetPasswordComponent,
    AboutComponent,
    CarouselComponent,
    FooterComponent,
    ContactComponent,
    DetailPropertyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatCardModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [AuthGuard, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
