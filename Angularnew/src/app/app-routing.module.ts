import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AuthGuard } from './auth.guard';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MaterialLoginComponent } from './material-poc/material-login/material-login.component';
import { MaterialPOCComponent } from './material-poc/material-poc.component';
import { MaterialUserComponent } from './material-poc/material-user/material-user.component';
import { NewCmpComponent } from './new-cmp/new-cmp.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { SearchFilterComponent } from './search-filter/search-filter.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    component: HomeComponent,
    path: 'home',
    canActivate: [AuthGuard]
  },
  {
    component: AboutComponent,
    path: 'about'
  },
  {
    component: UserComponent,
    path: 'user'
  },
  {
    path: 'new-cmp',
    component: NewCmpComponent
  },
  {
    path: 'contact-form',
    component: ContactFormComponent
  },
  {
    path: 'registration-form',
    component: RegistrationFormComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    component: SearchFilterComponent,
    path: 'search-filter'
  },
  {
    component: MaterialPOCComponent,
    path: 'material-poc'
  },
  {
    component: MaterialLoginComponent,
    path: 'material-poc/material-login'
  },
  {
    component: MaterialUserComponent,
    path: 'material-poc/material-user',
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }