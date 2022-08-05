import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent,} from './shared/components';
import { AuthGuardService } from './shared/services';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import { DxDataGridModule, DxFormModule } from 'devextreme-angular';
import {ResultModule} from "./result/result.module";

const routes: Routes = [
  {
    path:'question',
    loadChildren: ()=> import('./question/question.module').then(m=>m.QuestionModule),
    canActivate: [AuthGuardService],
    canActivateChild:[AuthGuardService],
  },
  {
    path:'prize',
    loadChildren: ()=> import('./prize/prize.module').then(m=>m.PrizeModule),
    canActivate: [AuthGuardService],
    canActivateChild:[AuthGuardService],

  },
  {
    path:'result',
    loadChildren: ()=> import('./result/result.module').then(m=>ResultModule),
    canActivate: [AuthGuardService],
    canActivateChild:[AuthGuardService],

  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'login-form',
    component: LoginFormComponent,
    canActivate: [ AuthGuardService ]
  },

  {
    path: '**',
    redirectTo: 'prize'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true }), DxDataGridModule, DxFormModule],
  providers: [AuthGuardService],
  exports: [RouterModule],
  declarations: [
    HomeComponent,
    ProfileComponent,
    TasksComponent
  ]
})
export class AppRoutingModule { }
