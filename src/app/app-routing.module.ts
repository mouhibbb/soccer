import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { NewPlayerComponent } from './components/new-player/new-player.component';
import { NewTeamComponent } from './components/new-team/new-team.component';
import { AddAdminComponent } from './components/add-admin/add-admin.component';
import { DashboardAdminComponent } from './components/dashboard-admin/dashboard-admin.component';
import { DisplayUserComponent } from './components/display-user/display-user.component';
import { DisplayMatchComponent } from './components/display-match/display-match.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'newteam',component:NewTeamComponent},
  {path:'newplayer',component:NewPlayerComponent},
  {path:'addmatch',component:AddMatchComponent},
  {path:'addadmin',component:AddAdminComponent},
  {path:'dashboardadmin',component:DashboardAdminComponent},
  {path:'displayUser/:name/:id',component:DisplayUserComponent},
  {path:'editUser/:id',component:AddAdminComponent},
  {path:'displayMatch/:id',component:DisplayMatchComponent},
  {path:'displayUser/:name/:id',component:DisplayUserComponent},
  {path:'editTeam/:id',component:NewTeamComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
