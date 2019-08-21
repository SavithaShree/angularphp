import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{
  path: 'login',
  component: LoginFormComponent,
},
{
  path: '',
  redirectTo: 'login',
  pathMatch: 'full',
},
{
  path: 'signup',
  component: SignupFormComponent,
},
{
  path: 'home',
  component: HomeComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
