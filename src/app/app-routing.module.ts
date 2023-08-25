import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth-guard.guard';
import { dontleaveGuard } from './dontleave.guard';
import { leaveGuard } from './leave.guard';
import { LoginComponent } from './login/login.component';
import { securityGuard } from './security.guard';
import { SensitiveDataComponent } from './sensitive-data/sensitive-data.component';
import { XssDOMAvoidComponent } from './xss-dom-avoid/xss-dom-avoid.component';
import { XssDOMComponent } from './xss-dom/xss-dom.component';
import { XssSanitizationDisabledComponent } from './xss-sanitization-disabled/xss-sanitization-disabled.component';
import { XssComponent } from './xss/xss.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'sanitization-disable',
    pathMatch: 'full'
  },
  {
    path: 'xss', 
    loadComponent: ()=> XssComponent,
    // loadChildren: () => import('./app.module').then((m)=>m.AppModule),
    canDeactivate: [dontleaveGuard]
  },
  {
    path: 'sanitization-disable',
    loadComponent: ()=> XssSanitizationDisabledComponent
  },
  {
    path: 'dom',
    loadComponent: ()=> XssDOMComponent
  },
  {
    path: 'dom-avoid',
    loadComponent: ()=> XssDOMAvoidComponent,
    canActivate: [securityGuard]
  },
  {
    path: 'login',
    loadComponent: ()=> LoginComponent,
    canDeactivate: [leaveGuard]
  },
  {
    path: 'sensitive-data',
    canActivate: [AuthGuard],
    loadComponent: ()=> SensitiveDataComponent
  },
  // {
  //   path: '**',
  //   redirectTo: 'xss',
  //   pathMatch: 'full'
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
