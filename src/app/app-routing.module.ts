import { Routes, RouterModule } from '@angular/router'
import { NgModule } from "@angular/core";
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth/common/auth-guard.service';
import { UsersComponent } from './users/users.component';
import { CodeComponent } from './code/code.component';
import { ExampleComponent } from './example/example.component';

const appRoutes: Routes = [
    { path: '', component: SigninComponent},
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
    { path: 'code', component: CodeComponent, canActivate: [AuthGuard]},
    { path: 'example', component: ExampleComponent, canActivate: [AuthGuard]},
    { path: 'signin', component: SigninComponent},
    { path: 'signup', component: SignupComponent},
    { path: 'users', component: UsersComponent, canActivate: [AuthGuard]}
  ];

@NgModule({
    imports:[
        RouterModule.forRoot(appRoutes)
    ],
    exports:[RouterModule]
})
export class AppRoutingModule{
    
}