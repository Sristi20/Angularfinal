import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewCmpComponent } from './new-cmp/new-cmp.component';
import { AboutComponent } from './about/about.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FormsModule } from '@angular/forms';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FilterPipe } from 'src/filter.pipe';
import { SearchFilterComponent } from './search-filter/search-filter.component';
import { HighlightDirective } from 'src/highlight.directive';
import { LoginComponent } from './login/login.component';
import { UserServiceService } from './user-service.service';
import { MaterialModule } from './material/material.module';
import { TokenInterceptorService } from './token-interceptor.services';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialPOCComponent } from './material-poc/material-poc.component';
import { MaterialLoginComponent } from './material-poc/material-login/material-login.component';
import { MaterialUserComponent } from './material-poc/material-user/material-user.component';



@NgModule({
  declarations: [
    AppComponent,
    NewCmpComponent,
    AboutComponent,
    UserComponent,
    HomeComponent,
    ContactFormComponent,
    RegistrationFormComponent,
    FilterPipe,
    SearchFilterComponent,
    HighlightDirective,
    LoginComponent,
    MaterialPOCComponent,
    MaterialLoginComponent,
    MaterialUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [AuthGuard,AuthService,UserServiceService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
